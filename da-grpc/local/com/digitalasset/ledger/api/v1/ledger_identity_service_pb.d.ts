// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/ledger_identity_service.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_ledger_api_v1_trace_context_pb from "../../../../../com/digitalasset/ledger/api/v1/trace_context_pb";

export class GetLedgerIdentityRequest extends jspb.Message {
  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLedgerIdentityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLedgerIdentityRequest): GetLedgerIdentityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLedgerIdentityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLedgerIdentityRequest;
  static deserializeBinaryFromReader(message: GetLedgerIdentityRequest, reader: jspb.BinaryReader): GetLedgerIdentityRequest;
}

export namespace GetLedgerIdentityRequest {
  export type AsObject = {
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

export class GetLedgerIdentityResponse extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLedgerIdentityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLedgerIdentityResponse): GetLedgerIdentityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLedgerIdentityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLedgerIdentityResponse;
  static deserializeBinaryFromReader(message: GetLedgerIdentityResponse, reader: jspb.BinaryReader): GetLedgerIdentityResponse;
}

export namespace GetLedgerIdentityResponse {
  export type AsObject = {
    ledgerId: string,
  }
}

