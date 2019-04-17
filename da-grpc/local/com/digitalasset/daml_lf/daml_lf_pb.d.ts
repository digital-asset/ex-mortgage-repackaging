// package: daml_lf
// file: com/digitalasset/daml_lf/daml_lf.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_daml_lf_daml_lf_0_pb from "../../../com/digitalasset/daml_lf/daml_lf_0_pb";
import * as com_digitalasset_daml_lf_daml_lf_1_pb from "../../../com/digitalasset/daml_lf/daml_lf_1_pb";
import * as com_digitalasset_daml_lf_daml_lf_dev_pb from "../../../com/digitalasset/daml_lf/daml_lf_dev_pb";

export class ArchivePayload extends jspb.Message {
  getMinor(): string;
  setMinor(value: string): void;

  hasDamlLf0(): boolean;
  clearDamlLf0(): void;
  getDamlLf0(): com_digitalasset_daml_lf_daml_lf_0_pb.Package | undefined;
  setDamlLf0(value?: com_digitalasset_daml_lf_daml_lf_0_pb.Package): void;

  hasDamlLf1(): boolean;
  clearDamlLf1(): void;
  getDamlLf1(): com_digitalasset_daml_lf_daml_lf_1_pb.Package | undefined;
  setDamlLf1(value?: com_digitalasset_daml_lf_daml_lf_1_pb.Package): void;

  hasDamlLfDev(): boolean;
  clearDamlLfDev(): void;
  getDamlLfDev(): com_digitalasset_daml_lf_daml_lf_dev_pb.Package | undefined;
  setDamlLfDev(value?: com_digitalasset_daml_lf_daml_lf_dev_pb.Package): void;

  getSumCase(): ArchivePayload.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchivePayload.AsObject;
  static toObject(includeInstance: boolean, msg: ArchivePayload): ArchivePayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchivePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchivePayload;
  static deserializeBinaryFromReader(message: ArchivePayload, reader: jspb.BinaryReader): ArchivePayload;
}

export namespace ArchivePayload {
  export type AsObject = {
    minor: string,
    damlLf0?: com_digitalasset_daml_lf_daml_lf_0_pb.Package.AsObject,
    damlLf1?: com_digitalasset_daml_lf_daml_lf_1_pb.Package.AsObject,
    damlLfDev?: com_digitalasset_daml_lf_daml_lf_dev_pb.Package.AsObject,
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    DAML_LF_0 = 1,
    DAML_LF_1 = 2,
    DAML_LF_DEV = 9999,
  }
}

export class Archive extends jspb.Message {
  getHashFunction(): HashFunction;
  setHashFunction(value: HashFunction): void;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Archive.AsObject;
  static toObject(includeInstance: boolean, msg: Archive): Archive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Archive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Archive;
  static deserializeBinaryFromReader(message: Archive, reader: jspb.BinaryReader): Archive;
}

export namespace Archive {
  export type AsObject = {
    hashFunction: HashFunction,
    payload: Uint8Array | string,
    hash: string,
  }
}

export enum HashFunction {
  SHA256 = 0,
}

