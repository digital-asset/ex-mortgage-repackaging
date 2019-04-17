// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/command_service.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_ledger_api_v1_commands_pb from "../../../../../com/digitalasset/ledger/api/v1/commands_pb";
import * as com_digitalasset_ledger_api_v1_trace_context_pb from "../../../../../com/digitalasset/ledger/api/v1/trace_context_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class SubmitAndWaitRequest extends jspb.Message {
  hasCommands(): boolean;
  clearCommands(): void;
  getCommands(): com_digitalasset_ledger_api_v1_commands_pb.Commands | undefined;
  setCommands(value?: com_digitalasset_ledger_api_v1_commands_pb.Commands): void;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitAndWaitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitAndWaitRequest): SubmitAndWaitRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitAndWaitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitAndWaitRequest;
  static deserializeBinaryFromReader(message: SubmitAndWaitRequest, reader: jspb.BinaryReader): SubmitAndWaitRequest;
}

export namespace SubmitAndWaitRequest {
  export type AsObject = {
    commands?: com_digitalasset_ledger_api_v1_commands_pb.Commands.AsObject,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

