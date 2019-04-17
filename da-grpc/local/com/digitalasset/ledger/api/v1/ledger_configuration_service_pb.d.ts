// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/ledger_configuration_service.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_ledger_api_v1_trace_context_pb from "../../../../../com/digitalasset/ledger/api/v1/trace_context_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class GetLedgerConfigurationRequest extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLedgerConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLedgerConfigurationRequest): GetLedgerConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLedgerConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLedgerConfigurationRequest;
  static deserializeBinaryFromReader(message: GetLedgerConfigurationRequest, reader: jspb.BinaryReader): GetLedgerConfigurationRequest;
}

export namespace GetLedgerConfigurationRequest {
  export type AsObject = {
    ledgerId: string,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

export class GetLedgerConfigurationResponse extends jspb.Message {
  hasLedgerConfiguration(): boolean;
  clearLedgerConfiguration(): void;
  getLedgerConfiguration(): LedgerConfiguration | undefined;
  setLedgerConfiguration(value?: LedgerConfiguration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLedgerConfigurationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLedgerConfigurationResponse): GetLedgerConfigurationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLedgerConfigurationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLedgerConfigurationResponse;
  static deserializeBinaryFromReader(message: GetLedgerConfigurationResponse, reader: jspb.BinaryReader): GetLedgerConfigurationResponse;
}

export namespace GetLedgerConfigurationResponse {
  export type AsObject = {
    ledgerConfiguration?: LedgerConfiguration.AsObject,
  }
}

export class LedgerConfiguration extends jspb.Message {
  hasMinTtl(): boolean;
  clearMinTtl(): void;
  getMinTtl(): google_protobuf_duration_pb.Duration | undefined;
  setMinTtl(value?: google_protobuf_duration_pb.Duration): void;

  hasMaxTtl(): boolean;
  clearMaxTtl(): void;
  getMaxTtl(): google_protobuf_duration_pb.Duration | undefined;
  setMaxTtl(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LedgerConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: LedgerConfiguration): LedgerConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LedgerConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LedgerConfiguration;
  static deserializeBinaryFromReader(message: LedgerConfiguration, reader: jspb.BinaryReader): LedgerConfiguration;
}

export namespace LedgerConfiguration {
  export type AsObject = {
    minTtl?: google_protobuf_duration_pb.Duration.AsObject,
    maxTtl?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

