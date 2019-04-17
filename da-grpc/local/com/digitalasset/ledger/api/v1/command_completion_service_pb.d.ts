// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/command_completion_service.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_ledger_api_v1_completion_pb from "../../../../../com/digitalasset/ledger/api/v1/completion_pb";
import * as com_digitalasset_ledger_api_v1_ledger_offset_pb from "../../../../../com/digitalasset/ledger/api/v1/ledger_offset_pb";
import * as com_digitalasset_ledger_api_v1_trace_context_pb from "../../../../../com/digitalasset/ledger/api/v1/trace_context_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CompletionStreamRequest extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  getApplicationId(): string;
  setApplicationId(value: string): void;

  clearPartiesList(): void;
  getPartiesList(): Array<string>;
  setPartiesList(value: Array<string>): void;
  addParties(value: string, index?: number): string;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset | undefined;
  setOffset(value?: com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompletionStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompletionStreamRequest): CompletionStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompletionStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompletionStreamRequest;
  static deserializeBinaryFromReader(message: CompletionStreamRequest, reader: jspb.BinaryReader): CompletionStreamRequest;
}

export namespace CompletionStreamRequest {
  export type AsObject = {
    ledgerId: string,
    applicationId: string,
    partiesList: Array<string>,
    offset?: com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset.AsObject,
  }
}

export class CompletionStreamResponse extends jspb.Message {
  hasCheckpoint(): boolean;
  clearCheckpoint(): void;
  getCheckpoint(): Checkpoint | undefined;
  setCheckpoint(value?: Checkpoint): void;

  clearCompletionsList(): void;
  getCompletionsList(): Array<com_digitalasset_ledger_api_v1_completion_pb.Completion>;
  setCompletionsList(value: Array<com_digitalasset_ledger_api_v1_completion_pb.Completion>): void;
  addCompletions(value?: com_digitalasset_ledger_api_v1_completion_pb.Completion, index?: number): com_digitalasset_ledger_api_v1_completion_pb.Completion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompletionStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompletionStreamResponse): CompletionStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompletionStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompletionStreamResponse;
  static deserializeBinaryFromReader(message: CompletionStreamResponse, reader: jspb.BinaryReader): CompletionStreamResponse;
}

export namespace CompletionStreamResponse {
  export type AsObject = {
    checkpoint?: Checkpoint.AsObject,
    completionsList: Array<com_digitalasset_ledger_api_v1_completion_pb.Completion.AsObject>,
  }
}

export class Checkpoint extends jspb.Message {
  hasRecordTime(): boolean;
  clearRecordTime(): void;
  getRecordTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecordTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset | undefined;
  setOffset(value?: com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Checkpoint.AsObject;
  static toObject(includeInstance: boolean, msg: Checkpoint): Checkpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Checkpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Checkpoint;
  static deserializeBinaryFromReader(message: Checkpoint, reader: jspb.BinaryReader): Checkpoint;
}

export namespace Checkpoint {
  export type AsObject = {
    recordTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    offset?: com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset.AsObject,
  }
}

export class CompletionEndRequest extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompletionEndRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompletionEndRequest): CompletionEndRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompletionEndRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompletionEndRequest;
  static deserializeBinaryFromReader(message: CompletionEndRequest, reader: jspb.BinaryReader): CompletionEndRequest;
}

export namespace CompletionEndRequest {
  export type AsObject = {
    ledgerId: string,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

export class CompletionEndResponse extends jspb.Message {
  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset | undefined;
  setOffset(value?: com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompletionEndResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompletionEndResponse): CompletionEndResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompletionEndResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompletionEndResponse;
  static deserializeBinaryFromReader(message: CompletionEndResponse, reader: jspb.BinaryReader): CompletionEndResponse;
}

export namespace CompletionEndResponse {
  export type AsObject = {
    offset?: com_digitalasset_ledger_api_v1_ledger_offset_pb.LedgerOffset.AsObject,
  }
}

