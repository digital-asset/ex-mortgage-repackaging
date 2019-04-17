import { SubmitAndWaitRequest } from '../local/com/digitalasset/ledger/api/v1/command_service_pb';
import { Command, Commands, CreateCommand, ExerciseCommand } from '../local/com/digitalasset/ledger/api/v1/commands_pb';
import { GetLedgerIdentityRequest } from '../local/com/digitalasset/ledger/api/v1/ledger_identity_service_pb'
import { LedgerOffset } from '../local/com/digitalasset/ledger/api/v1/ledger_offset_pb';
import { ListPackagesRequest } from '../local/com/digitalasset/ledger/api/v1/package_service_pb';
import { Filters, InclusiveFilters, TransactionFilter } from '../local/com/digitalasset/ledger/api/v1/transaction_filter_pb'
import { Transaction } from '../local/com/digitalasset/ledger/api/v1/transaction_pb';
import { GetTransactionsRequest, GetTransactionsResponse } from '../local/com/digitalasset/ledger/api/v1/transaction_service_pb';
import { ITransactionFilterElement, newTimestamp, newError, IFinalLogger } from './helpers';
import { Code as GRPC_CODE } from '../local/google/rpc/code_pb'
import * as UUID from  'uuid'
import { DatatypeManager, ILabeledType } from './datatype';
import { EventMap } from './event_map';
import { Value, Identifier } from '../local/com/digitalasset/ledger/api/v1/value_pb';
import { GetActiveContractsRequest, GetActiveContractsResponse } from '../local/com/digitalasset/ledger/api/v1/active_contracts_service_pb';

import * as daml_lf from "../local/com/digitalasset/daml_lf/daml_lf_pb"
import { TemplateManager } from "./template_manager";

// ----------------------
// only types imported. do not use as code source
import * as GRPC from 'grpc';
import { LedgerIdentityServiceClient as LedgerIdentityLSC } from '../local/com/digitalasset/ledger/api/v1/ledger_identity_service_grpc_pb'
import { CommandServiceClient as CommandLSC } from '../local/com/digitalasset/ledger/api/v1/command_service_grpc_pb';
import { PackageServiceClient as PackageLSC } from '../local/com/digitalasset/ledger/api/v1/package_service_grpc_pb';
import { TransactionServiceClient as TransactionLSC } from '../local/com/digitalasset/ledger/api/v1/transaction_service_grpc_pb';
import { ActiveContractsServiceClient as ActiveContractsLSC } from '../local/com/digitalasset/ledger/api/v1/active_contracts_service_grpc_pb';

import * as grpcWeb from 'grpc-web';
import { LedgerIdentityServiceClient as LedgerIdentityWSC } from '../local/com/digitalasset/ledger/api/v1/ledger_identity_service_grpc_web_pb'
import { CommandServiceClient as CommandWSC } from '../local/com/digitalasset/ledger/api/v1/command_service_grpc_web_pb';
import { PackageServiceClient as PackageWSC } from '../local/com/digitalasset/ledger/api/v1/package_service_grpc_web_pb';
import { TransactionServiceClient as TransactionWSC } from '../local/com/digitalasset/ledger/api/v1/transaction_service_grpc_web_pb';
import { ActiveContractsServiceClient as ActiveContractsWSC } from '../local/com/digitalasset/ledger/api/v1/active_contracts_service_grpc_web_pb';
import { IContractConstructor, Contract, fullName } from './contract';
import { GetPackageRequest } from '../local/com/digitalasset/ledger/api/v1/package_service_pb';
// ----------------------

type GetFunL<R, V> = (request: R, callback: (e: any, v: V) => void) => any
type GetFunW<R, V> = (request: R, _: any, callback: (e: any, v: V) => void) => any
type GetFun<R, V> = GetFunL<R, V> | GetFunW<R, V>

type StreamFunL<R, A> = (request: R) => grpcWeb.ClientReadableStream<A>
type StreamFunW<R, A> = (request: R, _: any) => grpcWeb.ClientReadableStream<A>

class SC<W, L> {
  public sc: W | L

  constructor (filename: string, modulename: string, hostname: string, private useGrpcWeb: boolean) {
    const file = require(`../local/com/digitalasset/ledger/api/v1/${filename}_service_grpc${useGrpcWeb ? '_web' : ''}_pb`)
    const module = file[`${modulename}ServiceClient`]
    this.sc = new module(
      hostname,
      useGrpcWeb ? {} : (require('grpc') as typeof GRPC).credentials.createInsecure(),
      useGrpcWeb ? {} : undefined
    )
  }

  public getUseGrpcWeb(): boolean {
    return this.useGrpcWeb
  }

  run<R, V> (f: GetFun<R, V>, request: R): Promise<V> {
    const g = f.bind(this.sc)
    return new Promise<V>((resolve, reject) => {
      function callback(e: any, v: V) {
        if (e) { reject(e) } else { resolve(v) }
      }
      if (this.useGrpcWeb) {
        (g as GetFunW<R, V>)(request, {}, callback)
      } else {
        (g as GetFunL<R, V>)(request, callback)
      }
    })
  }
}

export const TIMEOUT = {
  message: 'no transaction encountered with this commandId',
  ms: 10000,
  code: 1410,
  msForActiveContracts: 1000,
}

type WatchCommandIdPromise
  = Promise<(transaction: Transaction) => void>
  | undefined

export interface IDaGrpc {
  applicationId: string,
  watchedParties: string[],
  grpcServer: string,
  useGrpcWeb: boolean,
  logger: IFinalLogger
}

export class DaGrpc {
  private commandClient: SC<CommandWSC, CommandLSC>
  private transactionClient: SC<TransactionWSC, TransactionLSC>
  private activeContractsClient: SC<ActiveContractsWSC, ActiveContractsLSC>
  private watchedCommandIds: { [commandId: string]: WatchCommandIdPromise }
  public useGrpcWeb: boolean
  private applicationId: string
  public watchedParties: string[]
  public logger: IFinalLogger
  public datatypeManager: DatatypeManager

  private constructor(
    props: IDaGrpc,
    public ledgerId: string,
    public templateManager: TemplateManager,
  ) {
    this.commandClient = new SC<CommandWSC, CommandLSC>('command', 'Command', props.grpcServer, props.useGrpcWeb)
    this.transactionClient = new SC<TransactionWSC, TransactionLSC>('transaction', 'Transaction', props.grpcServer, props.useGrpcWeb)
    this.activeContractsClient = new SC<ActiveContractsWSC, ActiveContractsLSC>('active_contracts', 'ActiveContracts', props.grpcServer, props.useGrpcWeb)
    this.watchedCommandIds = {}
    this.applicationId = props.applicationId
    this.useGrpcWeb = props.useGrpcWeb
    this.logger = props.logger
    this.watchedParties = props.watchedParties
    this.datatypeManager = new DatatypeManager(templateManager)

    this.startTransactionStream()
  }

  public static async new(props: IDaGrpc): Promise<DaGrpc> {
    const ledgerSC = new SC<LedgerIdentityWSC, LedgerIdentityLSC>('ledger_identity', 'LedgerIdentity', props.grpcServer, props.useGrpcWeb)
    const ledgerId = (
      await ledgerSC.run(
        ledgerSC.sc.getLedgerIdentity,
        new GetLedgerIdentityRequest()
      )
    ).getLedgerId()

    const templateManager = await this.getTemplateManager(ledgerId, props.grpcServer, props.useGrpcWeb)
    return new DaGrpc(props, ledgerId, templateManager)
  }

  public static async getTemplateManager(ledgerId: string, grpcServer: string, useGrpcWeb: boolean): Promise<TemplateManager> {
    const packageSC = new SC<PackageWSC, PackageLSC>('package', 'Package', grpcServer, useGrpcWeb)
    const lpr = new ListPackagesRequest()
    lpr.setLedgerId(ledgerId);

    var entityNameToId = new Map<string, Identifier>();
    const pkgIdsList = (await packageSC.run(packageSC.sc.listPackages, lpr)).getPackageIdsList()
    for (const packageId of pkgIdsList) {
      const gpr = new GetPackageRequest()
      gpr.setLedgerId(ledgerId)
      gpr.setPackageId(packageId);
      const response = (await packageSC.run(packageSC.sc.getPackage, gpr));
      const archivePayload = response.getArchivePayload_asU8()
      const payload = daml_lf.ArchivePayload.deserializeBinary(archivePayload);
      for (const damlModule of payload.getDamlLf1().getModulesList()) {
          const moduleName = damlModule.getName().getSegmentsList().join('.');
          for (const template of damlModule.getTemplatesList()) {
              const templateNameDN = template.getTycon();
              const templateName = templateNameDN.getSegmentsList().toString();
              const fullTemplateName = moduleName + "." + templateName
              if (entityNameToId.has(fullTemplateName)) {
                  throw newError("Clashing entities: " + moduleName + " " + fullTemplateName, {})
              }
              const templateIdentifier = new Identifier()
              templateIdentifier.setPackageId(packageId)
              templateIdentifier.setModuleName(moduleName)
              templateIdentifier.setEntityName(templateName)
              entityNameToId.set(fullTemplateName, templateIdentifier)
              for (const choice of template.getChoicesList()) {
                const fullChoiceName = fullTemplateName + "." + choice.getName()
                const choiceIdentifier = new Identifier()
                choiceIdentifier.setPackageId(packageId)
                choiceIdentifier.setModuleName(moduleName)
                choiceIdentifier.setEntityName(choice.getName())
                choiceIdentifier.setName(templateName)

                entityNameToId.set(fullChoiceName, choiceIdentifier)
              }
          }
      }
    }
    return new TemplateManager(entityNameToId)
}

  public newFilters(templateIds: string[] | undefined): Filters {
    const filters = new Filters()
    if (templateIds) {
      const inclusiveFilters = new InclusiveFilters()
      inclusiveFilters.setTemplateIdsList(
        templateIds.map(templateId => this.datatypeManager.writeIdentifier(templateId))
      )
      filters.setInclusive(inclusiveFilters)
    }
    return filters
  }

  public newTransactionFilter(transactionFilterElements: ITransactionFilterElement[]) {
    const transactionFilter = new TransactionFilter()
    transactionFilterElements.forEach(({party, templateIds}) =>
      transactionFilter.getFiltersByPartyMap().set(party, this.newFilters(templateIds))
    )

    return transactionFilter
  }

  public newCommands(party: string, commandList: Command[], workflowId: string, commandId: string): Commands {
    const commands = new Commands()
    commands.setLedgerId(this.ledgerId)
    commands.setWorkflowId(workflowId)
    commands.setParty(party)
    commands.setCommandId(commandId)
    commands.setCommandsList(commandList)
    commands.setLedgerEffectiveTime(newTimestamp())
    commands.setMaximumRecordTime(newTimestamp(30))
    commands.setApplicationId(this.applicationId)
    return commands
  }

  public newLedgerOffset(absoluteOrBoundary: string | number): LedgerOffset {
    const ledgerOffset = new LedgerOffset()
    if (typeof (absoluteOrBoundary) === 'string') {
      ledgerOffset.setAbsolute(absoluteOrBoundary)
    } else {
      ledgerOffset.setBoundary(absoluteOrBoundary)
    }
    return ledgerOffset
  }

  private startTransactionStream(): void {
    const request = new GetTransactionsRequest()
    request.setLedgerId(this.ledgerId)
    request.setFilter(this.newTransactionFilter(
      this.watchedParties.map(party => ({ party, templateIds: undefined }))
    ))
    request.setBegin(this.newLedgerOffset(LedgerOffset.LedgerBoundary.LEDGER_BEGIN))
    request.setVerbose(false)

    // warning: TS cannot resolve union type
    const tc = this.transactionClient
    const getTxs = (r: GetTransactionsRequest) => {
      if (tc.getUseGrpcWeb()) {
        return (tc.sc.getTransactions as StreamFunW<GetTransactionsRequest, GetTransactionsResponse>)(r, {})
      } else {
        return (tc.sc.getTransactions as StreamFunL<GetTransactionsRequest, GetTransactionsResponse>)(r)
      }
    }
    const stream = getTxs(request)
    stream.on('data', (chunk: GetTransactionsResponse) => {
      chunk.getTransactionsList().forEach(transaction => {
        this.logger.info("TRANSACTION", transaction.toObject())
        const commandId = transaction.getCommandId()
        if (commandId in this.watchedCommandIds) {
          const promise = this.watchedCommandIds[commandId]
          if (promise) {
            promise.then(fun => fun(transaction))
          }
          delete this.watchedCommandIds[commandId]
        }
      })
    })
  }

  private async submit(party: string, command: Command): Promise<EventMap> {
    return new Promise<Transaction>((resolveTransaction, reject) => {
      const commandId = UUID()
      if (this.watchedCommandIds[commandId]) {
        const x = {
          message: 'already used commandId',
          commandId,
          party,
          command: command.toObject()
        }
        reject(new Error(JSON.stringify(x)))
      }
      const request = new SubmitAndWaitRequest()
      request.setCommands(this.newCommands(
        party,
        [command],
        UUID(),
        commandId
      ))

      this.watchedCommandIds[commandId] = this
        .commandClient
        .run(this.commandClient.sc.submitAndWait, request)
        .then(_ => resolveTransaction)
        .catch(err => {
          err.commandId = commandId
          err.party = party
          err.command = command.toObject()
          this.logger.error(err)
          reject(err)
          return err
        })
      setTimeout(
        () => reject(newError(TIMEOUT.message, {
          party,
          command: command.toObject(),
          commandId,
          code: TIMEOUT.code
        })),
        TIMEOUT.ms
      )
    }).then(transaction => new EventMap(transaction.getEventsList(), this))
  }

  public async create(party: string, templateId: string, type: ILabeledType[], argument: any): Promise<EventMap> {
    const createCommand = new CreateCommand()
    createCommand.setCreateArguments(
      this.datatypeManager.writeRecord(
        { argument: type, datatypeId: templateId },
        argument
      )
    )
    createCommand.setTemplateId(this.datatypeManager.writeIdentifier(templateId))
    const command = new Command()
    command.setCreate(createCommand)
    try {
      return await this.submit(party, command)
    } catch(err) {
      this.logger.error(err)
      switch (err.code) {
        case GRPC_CODE.INVALID_ARGUMENT: throw newError(err, { message: err.details, party, templateId, argument })
        case TIMEOUT.code: throw newError(err, {
          message: 'contract create failed', party, templateId, argument })
        default: throw err
      }
    }
  }

  public exercise(
    cid: string, templateId: string, choice: string, party: string, value: Value
  ): Promise<EventMap> {
    const exerciseCommand = new ExerciseCommand()
    exerciseCommand.setChoiceArgument(value)
    exerciseCommand.setChoice(choice)
    exerciseCommand.setContractId(cid)
    exerciseCommand.setTemplateId(this.datatypeManager.writeIdentifier(templateId))
    const command = new Command()
    command.setExercise(exerciseCommand);
    return this.submit(party, command)
  }

  public async getList(transactionFilterElements: ITransactionFilterElement[]): Promise<EventMap> {
    return new Promise<EventMap>((resolve, reject) => {
      const request = new GetActiveContractsRequest()
      request.setLedgerId(this.ledgerId)
      request.setFilter(this.newTransactionFilter(transactionFilterElements))
      request.setVerbose(false)

      const tc = this.activeContractsClient
      const getActiveCs = (r: GetActiveContractsRequest) => {
        if (tc.getUseGrpcWeb()) {
          return (tc.sc.getActiveContracts as StreamFunW<GetActiveContractsRequest, GetActiveContractsResponse>)(r, {})
        } else {
          return (tc.sc.getActiveContracts as StreamFunL<GetActiveContractsRequest, GetActiveContractsResponse>)(r)
        }
      }
      const stream: grpcWeb.ClientReadableStream<GetActiveContractsResponse> = getActiveCs(request)
      const events = new EventMap([], this)

      let hasReceivedAnyData = false

      this.logger.debug('requesting active contracts...')
      stream.on('data', (chunk: GetActiveContractsResponse) => {
        chunk
          .getActiveContractsList()
          .forEach(event => events.addEvent(event))
        this.logger.debug(`received ${chunk.getActiveContractsList().length} active contracts`)
        hasReceivedAnyData = true
      })
      stream.on('end', () => resolve(events))
      stream.on('error', err => reject(err))

      setTimeout(
        () => {
          stream.cancel()
          if (hasReceivedAnyData) {
            resolve(events)
          } else {
            reject(newError('requesting active contracts timeout', {
              transactionFilterElements,
              request: request.toObject(),
              code: TIMEOUT.code
            }))
          }
        },
        TIMEOUT.msForActiveContracts
      )
    })
  }

  public async getSimpleList<A extends object, B extends Contract<A>>(
    party: string, constructor: IContractConstructor<A, B>
  ): Promise<B[]> {
    return (await this.getList([{ party, templateIds: [fullName(constructor.contractProto)] }]))
      .getAllAsContracts(constructor, undefined)
  }
}
