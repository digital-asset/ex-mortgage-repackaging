import { Contract, DaGrpc, fullName, mkLogger } from '@da/da-grpc';
import Axios from 'axios';
import { History } from 'history';
import * as React from 'react';
import { DelegatedRegistrationRights } from 'src/contracts/Delegation/DelegatedRegistrationRights';
import { DelegatedSecuritizerRights } from 'src/contracts/Delegation/DelegatedSecuritizerRights';
import { MortgagePoolHolderRights } from 'src/contracts/Roles/MortgagePoolHolderRights';
import { OperatorRights } from 'src/contracts/Roles/OperatorRights';
import { AvailableCUSIP } from '../contracts/AvailableCusip/AvailableCUSIP';
import { MortgagePool } from '../contracts/MortgagePool/MortgagePool';
import { MortgagePoolAgreement } from '../contracts/MortgagePool/MortgagePoolAgreement';
import { MortgagePoolAgreementDraft } from '../contracts/MortgagePool/MortgagePoolAgreementDraft';
import { MortgagePoolAgreementProposal } from '../contracts/MortgagePool/MortgagePoolAgreementProposal';
import { getFromDict, ISerchable, mkDict } from '../helpers';
import { contractsListLocation } from '../routes';

export enum Role {
  MortgagePoolHolder = 'MortgagePoolHolder',
  Operator = 'Operator',
  Registry = 'Registry',
  Securitizer = 'Securitizer',
}

const common = [
  MortgagePool,
  MortgagePoolAgreement,
  MortgagePoolAgreementDraft,
  MortgagePoolAgreementProposal
]
const templateIdsByRole: {[role in keyof typeof Role]: string[] } = {
  'MortgagePoolHolder': [
    ...common,
    MortgagePoolHolderRights
  ].map(c => fullName(c.contractProto)),
  'Operator': [
    ...common,
    DelegatedRegistrationRights,
    DelegatedSecuritizerRights,
    OperatorRights,
  ].map(c => fullName(c.contractProto)),
  'Registry': common.map(c => fullName(c.contractProto)),
  'Securitizer': [...common, AvailableCUSIP].map(c => fullName(c.contractProto)),
}

export const users: IUser[] = [
  {
    initContractsListType: 'pools',
    name: 'Mortgage Pool Holder',
    party: 'MortgagePoolHolder',
    role: Role.MortgagePoolHolder
  },
  {
    initContractsListType: 'agreements',
    name: 'Operator',
    party: 'Operator',
    role: Role.Operator
  },
  {
    initContractsListType: 'pools',
    name: 'Securitizer A',
    party: 'Securitizer',
    role: Role.Securitizer
  }
]

export const userByParty = mkDict(users, u => u.party)

export function isNewContract(seenCids: ReadonlySet<string>, cidOrContract: string | Contract<object>): boolean {
  return !seenCids.has(
    typeof cidOrContract === 'string'
      ? cidOrContract
      : cidOrContract.cid
  )
}

function mkAddress(port?: string) {
  const w = window.location
  const p = port || window.location.port
  return `${w.protocol}//${w.hostname}${p ? `:${p}` : ''}`
}

export async function restartLedger(seconds: number) {
  const delayedReload = () =>
    setTimeout(() => location.reload(), seconds*1000)

  return Axios
    .post(`${mkAddress()}/da-restart`)
    .then(delayedReload)
    .catch(() => Axios
      .post(`${mkAddress("4000")}/da-restart`)
      .then(delayedReload, delayedReload)
    )
}

async function mkDaGrpc(port?: string) {
  return DaGrpc.new({
    applicationId: 'mortgage-app',
    grpcServer: mkAddress(port),
    logger: mkLogger('GRPC', { debug: () => {} , info: () => {}}),
    useGrpcWeb: true,
    watchedParties: users.map(u => u.party)
  })
}

export const daGrpcPromise: Promise<DaGrpc> = mkDaGrpc().catch(() => mkDaGrpc("4000"))

interface ISearchableContracts {
  [s: string]: Array<Contract<object> & ISerchable>
}

export interface IContractsState extends ISearchableContracts {
  agreements: MortgagePoolAgreement[],
  pools: MortgagePool[],
  drafts: MortgagePoolAgreementDraft[],
  proposals: MortgagePoolAgreementProposal[],
}

export interface IGeneratedState {
  availableCusips: AvailableCUSIP[],
  draftByReference: { [cid: string]: MortgagePoolAgreementDraft },
  poolByCusip: { [cusip: string]: MortgagePool },
  currentlyShownCids: ReadonlySet<string>,
}

function load<T>(path: string, defaultValue: T): T {
  const json = localStorage.getItem(path)
  return json ? JSON.parse(json) : defaultValue
}

export const UserContext: React.Context<IUserStore> = React.createContext({
  daGrpcPromise,
  historyPush: () => {},
  logic: {
    contracts: {
      byType: () => undefined,
      draftByReference: () => undefined,
      getAvailableCusip: () => undefined,
      getSeenSnapshot: () => new Set(),
      goToContractsList: () => {},
      if: () => undefined,
      isNew: () => true,
      poolByCusip: () => undefined,
      poolsByCusips: () => undefined,
      reload: () => Promise.resolve(),
      search: () => undefined,
      searchForComponent: () => 'Loading...',
      setVisited: () => {},
    },
    logOut: () => {},
    notifications: {},
    party: () => undefined,
    role: () => undefined,
    setParty: () => Promise.resolve(),
    user: () => undefined,
  },
  partyState: undefined,
});

export interface IUser {
  name: string,
  role: Role,
  initContractsListType: keyof IContractsState,
  party: string,
}

export interface ILogic {
  contracts: {
    byType<K extends keyof IContractsState, T = IContractsState[K]>(type: K, ifZero?: T): IContractsState[K] | T | undefined,
    draftByReference(reference: string): MortgagePoolAgreementDraft | undefined | null,
    getSeenSnapshot(): ReadonlySet<string> | undefined,
    goToContractsList(type: keyof IContractsState): void,
    if<T>(fun: (contracts: IContractsState) => T): T | undefined,
    isNew(cidOrContract: string | Contract<object>): boolean,
    reload(after?: Promise<void>): Promise<void>,
    poolByCusip(cusip: string): MortgagePool | undefined,
    poolsByCusips(cusips: string[]): MortgagePool[] | undefined,
    getAvailableCusip(): AvailableCUSIP | undefined,
    search<K extends keyof IContractsState>(type: K, value: string): IContractsState[K] | undefined,
    searchForComponent<K extends keyof IContractsState>(type: K, value: string | undefined, emptyMessage: string): IContractsState[K] | string,
    setVisited(cidsOrContracts: Array<string | Contract<object>>, moveToCurrentlyShown: boolean): void,
  },
  logOut(): void,
  party(): string | undefined,
  role(): Role | undefined,
  setParty(party: string): Promise<void>,
  user(): IUser | undefined,
}

export interface IOperatorState {
  delegatedRegistryRights: DelegatedRegistrationRights,
  delegatedSecuritizerRights: DelegatedSecuritizerRights,
  operatorRights: OperatorRights,
}

export interface IMortgagePoolHolderState {
  mortgagePoolHolderRights: MortgagePoolHolderRights
}

export interface IPartyState {
  cachedSeenCids: Set<string> | undefined,
  contracts: IContractsState | undefined,
  generated: IGeneratedState,
  ledgerId: string,
  mortgagePoolHolder: IMortgagePoolHolderState | undefined,
  operator: IOperatorState | undefined,
  party: string,
}

export interface IUserStore {
  daGrpcPromise: Promise<DaGrpc>,
  historyPush(location: string): void,
  logic: ILogic,
  partyState: IPartyState | undefined,
}

export interface IUserStoreProps {
  daGrpcPromise: Promise<DaGrpc>,
  history: History
}

function seenCidsKey({ party, ledgerId }: { party: string, ledgerId: string }){
  return `dam-seen-cids:${party}:${ledgerId}`
}

export class UserStore extends React.Component<IUserStoreProps, IUserStore> {
  public constructor(props: IUserStoreProps) {
    super(props)
    this.state = {
      daGrpcPromise: props.daGrpcPromise,
      historyPush: this.historyPush.bind(this),
      logic: {
        contracts: {
          byType: type => this.ifContracts(c => c[type]),
          draftByReference: reference => this.ifGenerated(generated => getFromDict(reference, generated.draftByReference, null)),
          getAvailableCusip: () =>
            this.ifGenerated(generated => generated.availableCusips.pop()
          ),
          getSeenSnapshot: () => this.ifPartyState(ps => ps.cachedSeenCids),
          goToContractsList: this.goToContractsList.bind(this),
          if: this.ifContracts.bind(this),
          isNew: cidOrContract => this.ifPartyState(ps => isNewContract(ps.cachedSeenCids!, cidOrContract)) || false,
          poolByCusip: cusip => this.ifGenerated(generated => getFromDict(cusip, generated.poolByCusip)),
          poolsByCusips: (cusips: string[]) =>
            this.ifContracts(_ =>
              cusips
                .map(cusip => this.state.logic.contracts.poolByCusip(cusip))
                .filter(x => x)  // filter undefineds
                .map(x => x!)  // force MortgagePool[] type
            ),
          reload: this.loadContracts.bind(this),
          search: this.search.bind(this),
          searchForComponent: this.searchForComponent.bind(this),
          setVisited: this.setVisited.bind(this),
        },
        logOut: () => { this.setParty(undefined); this.historyPush('/'); },
        party: this.party.bind(this),
        role: () => this.ifPartyState(_ => this.user()!.role),
        setParty: this.setParty.bind(this),
        user: this.user.bind(this),
      },
      partyState: this.genPartyState(load<string | undefined>("dam-user", undefined)),
    }
    this.loadContracts()
  }

  private goToContractsList(type: keyof IContractsState){
    const allContracts = this.byType(type) || []
    const newContracts = allContracts.filter(this.state.logic.contracts.isNew)

    this.setVisited(newContracts, true)
    this.historyPush(contractsListLocation(type))
  }

  private historyPush(location: string){
    this.props.history.push(location)
  }

  private setVisited(cidsOrContracts: Array<string | Contract<object>>, moveToCurrentlyShown: boolean){
    const cids = cidsOrContracts.map(cidOrContract =>
      typeof cidOrContract === 'string'
        ? cidOrContract
        : cidOrContract.cid
    )
    this.ifPartyState(partyState => {
      const cachedSeenCids = partyState.cachedSeenCids!
      const newCids = cids.filter(cid => !cachedSeenCids.has(cid))
      const currentlyShownCids = moveToCurrentlyShown ? new Set(newCids) : partyState.generated.currentlyShownCids
      const generated = { ...partyState.generated, currentlyShownCids }

      newCids.forEach(cid => cachedSeenCids.add(cid))

      if (newCids.length > 0) {
        localStorage.setItem(
          seenCidsKey(partyState),
          JSON.stringify(Array.from(cachedSeenCids))
        )
      }

      this.setState({ partyState: {...partyState, cachedSeenCids, generated} })
    })
  }

  private genPartyState(party: string | undefined): IPartyState | undefined {
    if (party && userByParty[party]) {
      localStorage.setItem("dam-user", JSON.stringify(party));
      return {
        cachedSeenCids: undefined,
        contracts: undefined,
        generated: {
          availableCusips: [],
          currentlyShownCids: new Set(),
          draftByReference: {},
          poolByCusip: {},
        },
        ledgerId: "",
        mortgagePoolHolder: undefined,
        operator: undefined,
        party,
      }
    } else {
      localStorage.removeItem("dam-user");
      if (party !== undefined) {
        console.error(Object.assign(
          new Error('invalid party'),
          { party, expected: Object.keys(userByParty)}
        ))
      }
      return undefined
    }
  }

  public setParty(party: string | undefined): Promise<void> {
    return new Promise(resolve =>
      this.setState(
        { partyState: this.genPartyState(party) },
        () => resolve(this.loadContracts())
      )
    )
  };

  private ifGenerated<T>(fun: (generated: IGeneratedState) => T): T | undefined {
    return this.ifPartyState(ps => ps.generated ? fun(ps.generated) : undefined)
  }

  private ifContracts<T>(fun: (contracts: IContractsState) => T): T | undefined {
    return this.ifPartyState(ps => ps.contracts ? fun(ps.contracts) : undefined)
  }

  private ifPartyState<T, D = undefined>(fun: (partyState: IPartyState) => T, defaultValue?: D): T | D {
    return this.state.partyState ? fun(this.state.partyState) : defaultValue as D
  }

  private party(): string | undefined {
    return this.ifPartyState(ps => ps.party)
  }

  public user(): IUser | undefined {
    return this.ifPartyState(ps => userByParty[ps.party])
  }

  private async loadContracts(after = Promise.resolve()): Promise<void> {
    if (this.state.partyState) {
      const party = this.state.partyState.party
      const role = userByParty[party].role
      const isOutdated = () => party !== this.party()

      const daGrpc = await this.state.daGrpcPromise
      if (isOutdated()) { return }

      const events = await daGrpc.getList([{ party, templateIds: templateIdsByRole[role] }])
      if (isOutdated()) { return }

      const ledgerId = daGrpc.ledgerId
      const drafts = events.getAllAsContracts(MortgagePoolAgreementDraft)
      const pools = events.getAllAsContracts(MortgagePool)
      const partyState: IPartyState = {
        cachedSeenCids: this.state.partyState.cachedSeenCids || new Set(load(seenCidsKey({ party, ledgerId }), [])),
        contracts: {
          agreements: events.getAllAsContracts(MortgagePoolAgreement),
          drafts,
          pools,
          proposals: events.getAllAsContracts(MortgagePoolAgreementProposal),
        },
        generated: {
          availableCusips: events.getAllAsContracts(AvailableCUSIP),
          currentlyShownCids: this.state.partyState.generated.currentlyShownCids,
          draftByReference: mkDict(drafts, c => c.argument.agreementDraftFields.referenceNumber),
          poolByCusip: mkDict(pools, c => c.argument.mortgagePoolFields.cusip.text),
        },
        ledgerId,
        mortgagePoolHolder: role === Role.MortgagePoolHolder
          ? { mortgagePoolHolderRights: events.getFirst(MortgagePoolHolderRights) }
          : undefined,
        operator: role === Role.Operator
          ? {
            delegatedRegistryRights: events.getFirst(DelegatedRegistrationRights),
            delegatedSecuritizerRights: events.getFirst(DelegatedSecuritizerRights),
            operatorRights: events.getFirst(OperatorRights),
          }
          : undefined,
        party,
      }
      await after
      if (isOutdated()) { return }
      this.setState({ partyState })
    }
  }

  private byType<K extends keyof IContractsState, T = IContractsState[K]>(type: K, ifZero?: T): IContractsState[K] | T | undefined {
    return this.ifContracts(c => ifZero === undefined
      ? c[type]
      : c[type].length === 0
        ? ifZero
        : c[type]
    )
  }

  private searchForComponent<K extends keyof IContractsState>(
    type: K, value: string | undefined, emptyMessage: string
  ): IContractsState[K] | string {
    return (value ? this.search(type, value) : this.byType(type, emptyMessage)) || 'Loading'
  }

  private search<K extends keyof IContractsState>(type: K, value: string): IContractsState[K] | undefined {
    const upperCaseValue = value.toUpperCase()
    const contracts = this.byType(type)
    return contracts && contracts.filter(c => c.searchIndex.search(upperCaseValue) !== -1)
  }

  public render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserStore
