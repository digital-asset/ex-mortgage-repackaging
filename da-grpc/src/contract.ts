import { DaGrpc, TIMEOUT } from "./da_grpc";
import { CreatedEvent } from "../local/com/digitalasset/ledger/api/v1/event_pb";
import { newError } from './helpers'
import { Code as GRPC_CODE } from '../local/google/rpc/code_pb'
import { ILabeledType, IType } from './datatype';

export interface IChoiceProto { name: string, partyLabel: string, argument?: ILabeledType[] }
export interface IContractProto {
  argument: ILabeledType[],
  choices: IChoiceProto[],
  module: string,
  name: string,
  signatory: string
}
export interface IContractProps { daGrpc: DaGrpc, proto: IContractProto, event: CreatedEvent }
export interface IContractConstructor<A extends object, B extends Contract<A>> {
  new (props: IContractProps): B,
  contractProto: IContractProto
}

function toDictBy<T>(field: string, protos: T[]): { [_: string]: T } {
  const byField = {}
  protos.forEach(p => byField[p[field]] = p)
  return byField
}

export function fullName(namesOrProto: string[] | IContractProto): string {
  return Array.isArray(namesOrProto)
    ? namesOrProto.join('.')
    : `${namesOrProto.module}.${namesOrProto.name}`
}

export async function createContract<A extends object, B extends Contract<A>>(
  daGrpc: DaGrpc, argument: A, constructor: IContractConstructor<A, B>): Promise<B> {
  const events = await daGrpc.create(
    argument[constructor.contractProto.signatory] as string,
    fullName(constructor.contractProto),
    constructor.contractProto.argument,
    argument
  )
  daGrpc.logger.info('CREATED', events.counts())
  return events.getFirst(constructor)
}

export abstract class Contract<A extends object> {
  public cid: string
  public argument: A
  public daGrpc: DaGrpc
  public proto: IContractProto
  public choiceByName: { [name: string]: IChoiceProto }
  public templateId: string

  constructor({ daGrpc, proto, event }: IContractProps) {
    this.daGrpc = daGrpc
    this.cid = event.getContractId()
    this.choiceByName = toDictBy('name', proto.choices)
    this.proto = proto
    this.templateId = fullName(proto)
    this.argument = this.daGrpc.datatypeManager.readRecord(
      { argument: proto.argument, datatypeId: this.templateId },
      event.getCreateArguments()
    ) as A
  }

  public async exercise<T extends object>(name: string, argument: T) {
    try {
      const choice = this.choiceByName[name]
      if (!choice) {
        throw newError(`cannot find proto for choice "${name}"`, { available: Object.keys(this.choiceByName) })
      }
      const labeledTypes = choice.argument
      const type: IType =// labeledTypes && labeledTypes.length > 0 
       // ? 
        { argument: labeledTypes, datatypeId: fullName([this.proto.module, this.proto.name, name]) }
       // : ILeafType.Unit
      const value = this.daGrpc.datatypeManager.write(type, argument)
      const partyLabel = choice.partyLabel
      const party = this.argument[partyLabel] as string
      try {
        const events = await this.daGrpc.exercise(
          this.cid,
          this.templateId,
          name,
          this.argument[this.choiceByName[name].partyLabel] as string,
          value
        )
        this.daGrpc.logger.info('CREATED', events.counts())
        return events.withAttachedDebugInfo({ argument, choice, party, this: this.asJson() })
      } catch (err) {
        this.daGrpc.logger.error(err)
        const info = { choice: { name, argument, type }, contract: this.asJson() }
        switch (err.code) {
          case GRPC_CODE.INVALID_ARGUMENT: throw newError(err.details, { ...info, valueAsObject: value.toObject(), value })
          case TIMEOUT.code: throw newError(`${this.templateId}-${name} failed`, info)
          default: throw newError(err, info)
        }
      }
    } catch(err) {
      this.daGrpc.logger.error(err)
      throw err
    }
  }

  // for debug
  public asJson(){
    return {
      templateId: fullName(this.proto),
      cid: this.cid,
      argument: this.argument
    }
  }
}