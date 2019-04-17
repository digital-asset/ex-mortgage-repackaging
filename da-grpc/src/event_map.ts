import { Event, CreatedEvent } from "../local/com/digitalasset/ledger/api/v1/event_pb";
import { newError } from "./helpers";
import { fullName, IContractConstructor, Contract } from "./contract";
import { DaGrpc } from "./da_grpc";

export class EventMap {
  private events: {[templateId: string]: CreatedEvent[]} = {}
  private debugInfo = {}

  public counts(): {[templateId: string]: number} {
    const countByTemplateId = {}
    Object.keys(this.events).forEach(templateId =>
      countByTemplateId[templateId] = this.events[templateId].length
    )
    return countByTemplateId
  }

  public getDebugInfo(): object {
    return Object.assign(this.debugInfo, { counts: this.counts() })
  }

  public withAttachedDebugInfo(info: object): EventMap {
    Object.assign(this.debugInfo, info)
    return this
  }

  public addEvent(event: CreatedEvent){
    const templateId = event.getTemplateId().getName()
    if (!this.events[templateId]) {
      this.events[templateId] = []
    }
    this.events[templateId].push(event)
  }

  constructor(events: Event[], private daGrpc: DaGrpc){
    events
      .filter(event => event.hasCreated())
      .forEach(event => this.addEvent(event.getCreated()!))
  }

  public getAllAsContracts<A extends object, B extends Contract<A>>(
    constructor: IContractConstructor<A, B>, requestedCount?: number
  ): B[] {
    const requestedTemplateId = fullName(constructor.contractProto)
    const events = this.events[requestedTemplateId] || []
    if (requestedCount === undefined || requestedCount === events.length){
      return events.map(event => new constructor({
        proto: constructor.contractProto,
        daGrpc: this.daGrpc,
        event
      }))
    } else {
      throw newError('unexpected contracts', {
        available: this.counts(),
        requestedTemplateId,
        requestedCount,
        ...this.debugInfo
      })
    }
  }

  public getFirst<A extends object, B extends Contract<A>>(constructor: IContractConstructor<A, B>): B {
    return this.getAllAsContracts(constructor, 1)[0]
  }
}