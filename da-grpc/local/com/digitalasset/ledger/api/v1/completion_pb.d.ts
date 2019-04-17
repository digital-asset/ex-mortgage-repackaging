// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/completion.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_ledger_api_v1_trace_context_pb from "../../../../../com/digitalasset/ledger/api/v1/trace_context_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class Completion extends jspb.Message {
  getCommandId(): string;
  setCommandId(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Completion.AsObject;
  static toObject(includeInstance: boolean, msg: Completion): Completion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Completion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Completion;
  static deserializeBinaryFromReader(message: Completion, reader: jspb.BinaryReader): Completion;
}

export namespace Completion {
  export type AsObject = {
    commandId: string,
    status?: google_rpc_status_pb.Status.AsObject,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

