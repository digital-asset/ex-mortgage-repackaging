// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/active_contracts_service.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_ledger_api_v1_event_pb from "../../../../../com/digitalasset/ledger/api/v1/event_pb";
import * as com_digitalasset_ledger_api_v1_transaction_filter_pb from "../../../../../com/digitalasset/ledger/api/v1/transaction_filter_pb";
import * as com_digitalasset_ledger_api_v1_trace_context_pb from "../../../../../com/digitalasset/ledger/api/v1/trace_context_pb";

export class GetActiveContractsRequest extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): com_digitalasset_ledger_api_v1_transaction_filter_pb.TransactionFilter | undefined;
  setFilter(value?: com_digitalasset_ledger_api_v1_transaction_filter_pb.TransactionFilter): void;

  getVerbose(): boolean;
  setVerbose(value: boolean): void;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveContractsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActiveContractsRequest): GetActiveContractsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActiveContractsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveContractsRequest;
  static deserializeBinaryFromReader(message: GetActiveContractsRequest, reader: jspb.BinaryReader): GetActiveContractsRequest;
}

export namespace GetActiveContractsRequest {
  export type AsObject = {
    ledgerId: string,
    filter?: com_digitalasset_ledger_api_v1_transaction_filter_pb.TransactionFilter.AsObject,
    verbose: boolean,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

export class GetActiveContractsResponse extends jspb.Message {
  getOffset(): string;
  setOffset(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  clearActiveContractsList(): void;
  getActiveContractsList(): Array<com_digitalasset_ledger_api_v1_event_pb.CreatedEvent>;
  setActiveContractsList(value: Array<com_digitalasset_ledger_api_v1_event_pb.CreatedEvent>): void;
  addActiveContracts(value?: com_digitalasset_ledger_api_v1_event_pb.CreatedEvent, index?: number): com_digitalasset_ledger_api_v1_event_pb.CreatedEvent;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveContractsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetActiveContractsResponse): GetActiveContractsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActiveContractsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveContractsResponse;
  static deserializeBinaryFromReader(message: GetActiveContractsResponse, reader: jspb.BinaryReader): GetActiveContractsResponse;
}

export namespace GetActiveContractsResponse {
  export type AsObject = {
    offset: string,
    workflowId: string,
    activeContractsList: Array<com_digitalasset_ledger_api_v1_event_pb.CreatedEvent.AsObject>,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

