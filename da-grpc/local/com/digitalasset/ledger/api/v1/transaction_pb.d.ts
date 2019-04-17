// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/transaction.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_ledger_api_v1_event_pb from "../../../../../com/digitalasset/ledger/api/v1/event_pb";
import * as com_digitalasset_ledger_api_v1_trace_context_pb from "../../../../../com/digitalasset/ledger/api/v1/trace_context_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TransactionTree extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): void;

  getCommandId(): string;
  setCommandId(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  hasEffectiveAt(): boolean;
  clearEffectiveAt(): void;
  getEffectiveAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectiveAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOffset(): string;
  setOffset(value: string): void;

  getEventsByIdMap(): jspb.Map<string, TreeEvent>;
  clearEventsByIdMap(): void;
  clearRootEventIdsList(): void;
  getRootEventIdsList(): Array<string>;
  setRootEventIdsList(value: Array<string>): void;
  addRootEventIds(value: string, index?: number): string;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionTree.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionTree): TransactionTree.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionTree, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionTree;
  static deserializeBinaryFromReader(message: TransactionTree, reader: jspb.BinaryReader): TransactionTree;
}

export namespace TransactionTree {
  export type AsObject = {
    transactionId: string,
    commandId: string,
    workflowId: string,
    effectiveAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    offset: string,
    eventsByIdMap: Array<[string, TreeEvent.AsObject]>,
    rootEventIdsList: Array<string>,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

export class TreeEvent extends jspb.Message {
  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): com_digitalasset_ledger_api_v1_event_pb.CreatedEvent | undefined;
  setCreated(value?: com_digitalasset_ledger_api_v1_event_pb.CreatedEvent): void;

  hasExercised(): boolean;
  clearExercised(): void;
  getExercised(): com_digitalasset_ledger_api_v1_event_pb.ExercisedEvent | undefined;
  setExercised(value?: com_digitalasset_ledger_api_v1_event_pb.ExercisedEvent): void;

  getKindCase(): TreeEvent.KindCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TreeEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TreeEvent): TreeEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TreeEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TreeEvent;
  static deserializeBinaryFromReader(message: TreeEvent, reader: jspb.BinaryReader): TreeEvent;
}

export namespace TreeEvent {
  export type AsObject = {
    created?: com_digitalasset_ledger_api_v1_event_pb.CreatedEvent.AsObject,
    exercised?: com_digitalasset_ledger_api_v1_event_pb.ExercisedEvent.AsObject,
  }

  export enum KindCase {
    KIND_NOT_SET = 0,
    CREATED = 1,
    EXERCISED = 2,
  }
}

export class Transaction extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): void;

  getCommandId(): string;
  setCommandId(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  hasEffectiveAt(): boolean;
  clearEffectiveAt(): void;
  getEffectiveAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectiveAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearEventsList(): void;
  getEventsList(): Array<com_digitalasset_ledger_api_v1_event_pb.Event>;
  setEventsList(value: Array<com_digitalasset_ledger_api_v1_event_pb.Event>): void;
  addEvents(value?: com_digitalasset_ledger_api_v1_event_pb.Event, index?: number): com_digitalasset_ledger_api_v1_event_pb.Event;

  getOffset(): string;
  setOffset(value: string): void;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    transactionId: string,
    commandId: string,
    workflowId: string,
    effectiveAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    eventsList: Array<com_digitalasset_ledger_api_v1_event_pb.Event.AsObject>,
    offset: string,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

