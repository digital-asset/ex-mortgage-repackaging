// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/ledger_offset.proto

import * as jspb from "google-protobuf";

export class LedgerOffset extends jspb.Message {
  hasAbsolute(): boolean;
  clearAbsolute(): void;
  getAbsolute(): string;
  setAbsolute(value: string): void;

  hasBoundary(): boolean;
  clearBoundary(): void;
  getBoundary(): LedgerOffset.LedgerBoundary;
  setBoundary(value: LedgerOffset.LedgerBoundary): void;

  getValueCase(): LedgerOffset.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LedgerOffset.AsObject;
  static toObject(includeInstance: boolean, msg: LedgerOffset): LedgerOffset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LedgerOffset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LedgerOffset;
  static deserializeBinaryFromReader(message: LedgerOffset, reader: jspb.BinaryReader): LedgerOffset;
}

export namespace LedgerOffset {
  export type AsObject = {
    absolute: string,
    boundary: LedgerOffset.LedgerBoundary,
  }

  export enum LedgerBoundary {
    LEDGER_BEGIN = 0,
    LEDGER_END = 1,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    ABSOLUTE = 1,
    BOUNDARY = 2,
  }
}

