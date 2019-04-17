// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/transaction_service.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_ledger_api_v1_ledger_offset_pb from "../../../../../com/digitalasset/ledger/api/v1/ledger_offset_pb";
import * as com_digitalasset_ledger_api_v1_transaction_filter_pb from "../../../../../com/digitalasset/ledger/api/v1/transaction_filter_pb";
import * as com_digitalasset_ledger_api_v1_transaction_pb from "../../../../../com/digitalasset/ledger/api/v1/transaction_pb";
import * as com_digitalasset_ledger_api_v1_trace_context_pb from "../../../../../com/digitalasset/ledger/api/v1/trace_context_pb";

export class GetTransactionsRequest extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  hasBegin(): boolean;
  clearBegin(): void;
  getBegin(): com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset | undefined;
  setBegin(value?: com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset | undefined;
  setEnd(value?: com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset): void;

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
  toObject(includeInstance?: boolean): GetTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionsRequest): GetTransactionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionsRequest;
  static deserializeBinaryFromReader(message: GetTransactionsRequest, reader: jspb.BinaryReader): GetTransactionsRequest;
}

export namespace GetTransactionsRequest {
  export type AsObject = {
    ledgerId: string,
    begin?: com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset.AsObject,
    end?: com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset.AsObject,
    filter?: com_digitalasset_ledger_api_v1_transaction_filter_pb.TransactionFilter.AsObject,
    verbose: boolean,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

export class GetTransactionsResponse extends jspb.Message {
  clearTransactionsList(): void;
  getTransactionsList(): Array<com_digitalasset_ledger_api_v1_transaction_pb.Transaction>;
  setTransactionsList(value: Array<com_digitalasset_ledger_api_v1_transaction_pb.Transaction>): void;
  addTransactions(value?: com_digitalasset_ledger_api_v1_transaction_pb.Transaction, index?: number): com_digitalasset_ledger_api_v1_transaction_pb.Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionsResponse): GetTransactionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionsResponse;
  static deserializeBinaryFromReader(message: GetTransactionsResponse, reader: jspb.BinaryReader): GetTransactionsResponse;
}

export namespace GetTransactionsResponse {
  export type AsObject = {
    transactionsList: Array<com_digitalasset_ledger_api_v1_transaction_pb.Transaction.AsObject>,
  }
}

export class GetTransactionTreesResponse extends jspb.Message {
  clearTransactionsList(): void;
  getTransactionsList(): Array<com_digitalasset_ledger_api_v1_transaction_pb.TransactionTree>;
  setTransactionsList(value: Array<com_digitalasset_ledger_api_v1_transaction_pb.TransactionTree>): void;
  addTransactions(value?: com_digitalasset_ledger_api_v1_transaction_pb.TransactionTree, index?: number): com_digitalasset_ledger_api_v1_transaction_pb.TransactionTree;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionTreesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionTreesResponse): GetTransactionTreesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionTreesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionTreesResponse;
  static deserializeBinaryFromReader(message: GetTransactionTreesResponse, reader: jspb.BinaryReader): GetTransactionTreesResponse;
}

export namespace GetTransactionTreesResponse {
  export type AsObject = {
    transactionsList: Array<com_digitalasset_ledger_api_v1_transaction_pb.TransactionTree.AsObject>,
  }
}

export class GetTransactionByEventIdRequest extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  getEventId(): string;
  setEventId(value: string): void;

  clearRequestingPartiesList(): void;
  getRequestingPartiesList(): Array<string>;
  setRequestingPartiesList(value: Array<string>): void;
  addRequestingParties(value: string, index?: number): string;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionByEventIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionByEventIdRequest): GetTransactionByEventIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionByEventIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionByEventIdRequest;
  static deserializeBinaryFromReader(message: GetTransactionByEventIdRequest, reader: jspb.BinaryReader): GetTransactionByEventIdRequest;
}

export namespace GetTransactionByEventIdRequest {
  export type AsObject = {
    ledgerId: string,
    eventId: string,
    requestingPartiesList: Array<string>,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

export class GetTransactionByIdRequest extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  getTransactionId(): string;
  setTransactionId(value: string): void;

  clearRequestingPartiesList(): void;
  getRequestingPartiesList(): Array<string>;
  setRequestingPartiesList(value: Array<string>): void;
  addRequestingParties(value: string, index?: number): string;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionByIdRequest): GetTransactionByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionByIdRequest;
  static deserializeBinaryFromReader(message: GetTransactionByIdRequest, reader: jspb.BinaryReader): GetTransactionByIdRequest;
}

export namespace GetTransactionByIdRequest {
  export type AsObject = {
    ledgerId: string,
    transactionId: string,
    requestingPartiesList: Array<string>,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

export class GetTransactionResponse extends jspb.Message {
  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): com_digitalasset_ledger_api_v1_transaction_pb.TransactionTree | undefined;
  setTransaction(value?: com_digitalasset_ledger_api_v1_transaction_pb.TransactionTree): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionResponse): GetTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionResponse;
  static deserializeBinaryFromReader(message: GetTransactionResponse, reader: jspb.BinaryReader): GetTransactionResponse;
}

export namespace GetTransactionResponse {
  export type AsObject = {
    transaction?: com_digitalasset_ledger_api_v1_transaction_pb.TransactionTree.AsObject,
  }
}

export class GetLedgerEndRequest extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLedgerEndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLedgerEndRequest): GetLedgerEndRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLedgerEndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLedgerEndRequest;
  static deserializeBinaryFromReader(message: GetLedgerEndRequest, reader: jspb.BinaryReader): GetLedgerEndRequest;
}

export namespace GetLedgerEndRequest {
  export type AsObject = {
    ledgerId: string,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

export class GetLedgerEndResponse extends jspb.Message {
  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset | undefined;
  setOffset(value?: com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLedgerEndResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLedgerEndResponse): GetLedgerEndResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLedgerEndResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLedgerEndResponse;
  static deserializeBinaryFromReader(message: GetLedgerEndResponse, reader: jspb.BinaryReader): GetLedgerEndResponse;
}

export namespace GetLedgerEndResponse {
  export type AsObject = {
    offset?: com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset.AsObject,
  }
}

