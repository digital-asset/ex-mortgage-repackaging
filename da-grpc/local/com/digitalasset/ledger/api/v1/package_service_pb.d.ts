// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/package_service.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_ledger_api_v1_trace_context_pb from "../../../../../com/digitalasset/ledger/api/v1/trace_context_pb";

export class ListPackagesRequest extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPackagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPackagesRequest): ListPackagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPackagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPackagesRequest;
  static deserializeBinaryFromReader(message: ListPackagesRequest, reader: jspb.BinaryReader): ListPackagesRequest;
}

export namespace ListPackagesRequest {
  export type AsObject = {
    ledgerId: string,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

export class ListPackagesResponse extends jspb.Message {
  clearPackageIdsList(): void;
  getPackageIdsList(): Array<string>;
  setPackageIdsList(value: Array<string>): void;
  addPackageIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPackagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPackagesResponse): ListPackagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPackagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPackagesResponse;
  static deserializeBinaryFromReader(message: ListPackagesResponse, reader: jspb.BinaryReader): ListPackagesResponse;
}

export namespace ListPackagesResponse {
  export type AsObject = {
    packageIdsList: Array<string>,
  }
}

export class GetPackageRequest extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  getPackageId(): string;
  setPackageId(value: string): void;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPackageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPackageRequest): GetPackageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPackageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPackageRequest;
  static deserializeBinaryFromReader(message: GetPackageRequest, reader: jspb.BinaryReader): GetPackageRequest;
}

export namespace GetPackageRequest {
  export type AsObject = {
    ledgerId: string,
    packageId: string,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

export class GetPackageResponse extends jspb.Message {
  getHashFunction(): HashFunction;
  setHashFunction(value: HashFunction): void;

  getArchivePayload(): Uint8Array | string;
  getArchivePayload_asU8(): Uint8Array;
  getArchivePayload_asB64(): string;
  setArchivePayload(value: Uint8Array | string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPackageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPackageResponse): GetPackageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPackageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPackageResponse;
  static deserializeBinaryFromReader(message: GetPackageResponse, reader: jspb.BinaryReader): GetPackageResponse;
}

export namespace GetPackageResponse {
  export type AsObject = {
    hashFunction: HashFunction,
    archivePayload: Uint8Array | string,
    hash: string,
  }
}

export class GetPackageStatusRequest extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  getPackageId(): string;
  setPackageId(value: string): void;

  hasTraceContext(): boolean;
  clearTraceContext(): void;
  getTraceContext(): com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext | undefined;
  setTraceContext(value?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPackageStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPackageStatusRequest): GetPackageStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPackageStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPackageStatusRequest;
  static deserializeBinaryFromReader(message: GetPackageStatusRequest, reader: jspb.BinaryReader): GetPackageStatusRequest;
}

export namespace GetPackageStatusRequest {
  export type AsObject = {
    ledgerId: string,
    packageId: string,
    traceContext?: com_digitalasset_ledger_api_v1_trace_context_pb.TraceContext.AsObject,
  }
}

export class GetPackageStatusResponse extends jspb.Message {
  getPackageStatus(): PackageStatus;
  setPackageStatus(value: PackageStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPackageStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPackageStatusResponse): GetPackageStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPackageStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPackageStatusResponse;
  static deserializeBinaryFromReader(message: GetPackageStatusResponse, reader: jspb.BinaryReader): GetPackageStatusResponse;
}

export namespace GetPackageStatusResponse {
  export type AsObject = {
    packageStatus: PackageStatus,
  }
}

export enum PackageStatus {
  UNKNOWN = 0,
  REGISTERED = 1,
}

export enum HashFunction {
  SHA256 = 0,
}

