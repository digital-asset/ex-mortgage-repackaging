// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/value.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class Value extends jspb.Message {
  hasRecord(): boolean;
  clearRecord(): void;
  getRecord(): Record | undefined;
  setRecord(value?: Record): void;

  hasVariant(): boolean;
  clearVariant(): void;
  getVariant(): Variant | undefined;
  setVariant(value?: Variant): void;

  hasContractId(): boolean;
  clearContractId(): void;
  getContractId(): string;
  setContractId(value: string): void;

  hasList(): boolean;
  clearList(): void;
  getList(): List | undefined;
  setList(value?: List): void;

  hasInt64(): boolean;
  clearInt64(): void;
  getInt64(): number;
  setInt64(value: number): void;

  hasDecimal(): boolean;
  clearDecimal(): void;
  getDecimal(): string;
  setDecimal(value: string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): number;
  setTimestamp(value: number): void;

  hasParty(): boolean;
  clearParty(): void;
  getParty(): string;
  setParty(value: string): void;

  hasBool(): boolean;
  clearBool(): void;
  getBool(): boolean;
  setBool(value: boolean): void;

  hasUnit(): boolean;
  clearUnit(): void;
  getUnit(): google_protobuf_empty_pb.Empty | undefined;
  setUnit(value?: google_protobuf_empty_pb.Empty): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): number;
  setDate(value: number): void;

  hasOptional(): boolean;
  clearOptional(): void;
  getOptional(): Optional | undefined;
  setOptional(value?: Optional): void;

  hasMap(): boolean;
  clearMap(): void;
  getMap(): Map | undefined;
  setMap(value?: Map): void;

  getSumCase(): Value.SumCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    record?: Record.AsObject,
    variant?: Variant.AsObject,
    contractId: string,
    list?: List.AsObject,
    int64: number,
    decimal: string,
    text: string,
    timestamp: number,
    party: string,
    bool: boolean,
    unit?: google_protobuf_empty_pb.Empty.AsObject,
    date: number,
    optional?: Optional.AsObject,
    map?: Map.AsObject,
  }

  export enum SumCase {
    SUM_NOT_SET = 0,
    RECORD = 1,
    VARIANT = 2,
    CONTRACT_ID = 3,
    LIST = 4,
    INT64 = 5,
    DECIMAL = 6,
    TEXT = 8,
    TIMESTAMP = 9,
    PARTY = 11,
    BOOL = 12,
    UNIT = 13,
    DATE = 14,
    OPTIONAL = 15,
    MAP = 16,
  }
}

export class Record extends jspb.Message {
  hasRecordId(): boolean;
  clearRecordId(): void;
  getRecordId(): Identifier | undefined;
  setRecordId(value?: Identifier): void;

  clearFieldsList(): void;
  getFieldsList(): Array<RecordField>;
  setFieldsList(value: Array<RecordField>): void;
  addFields(value?: RecordField, index?: number): RecordField;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Record.AsObject;
  static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Record;
  static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
}

export namespace Record {
  export type AsObject = {
    recordId?: Identifier.AsObject,
    fieldsList: Array<RecordField.AsObject>,
  }
}

export class RecordField extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordField.AsObject;
  static toObject(includeInstance: boolean, msg: RecordField): RecordField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordField;
  static deserializeBinaryFromReader(message: RecordField, reader: jspb.BinaryReader): RecordField;
}

export namespace RecordField {
  export type AsObject = {
    label: string,
    value?: Value.AsObject,
  }
}

export class Identifier extends jspb.Message {
  getPackageId(): string;
  setPackageId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getModuleName(): string;
  setModuleName(value: string): void;

  getEntityName(): string;
  setEntityName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identifier.AsObject;
  static toObject(includeInstance: boolean, msg: Identifier): Identifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Identifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identifier;
  static deserializeBinaryFromReader(message: Identifier, reader: jspb.BinaryReader): Identifier;
}

export namespace Identifier {
  export type AsObject = {
    packageId: string,
    name: string,
    moduleName: string,
    entityName: string,
  }
}

export class Variant extends jspb.Message {
  hasVariantId(): boolean;
  clearVariantId(): void;
  getVariantId(): Identifier | undefined;
  setVariantId(value?: Identifier): void;

  getConstructor(): string;
  setConstructor(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variant.AsObject;
  static toObject(includeInstance: boolean, msg: Variant): Variant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Variant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variant;
  static deserializeBinaryFromReader(message: Variant, reader: jspb.BinaryReader): Variant;
}

export namespace Variant {
  export type AsObject = {
    variantId?: Identifier.AsObject,
    constructor: string,
    value?: Value.AsObject,
  }
}

export class List extends jspb.Message {
  clearElementsList(): void;
  getElementsList(): Array<Value>;
  setElementsList(value: Array<Value>): void;
  addElements(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): List.AsObject;
  static toObject(includeInstance: boolean, msg: List): List.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): List;
  static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
}

export namespace List {
  export type AsObject = {
    elementsList: Array<Value.AsObject>,
  }
}

export class Optional extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): Value | undefined;
  setValue(value?: Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Optional.AsObject;
  static toObject(includeInstance: boolean, msg: Optional): Optional.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Optional, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Optional;
  static deserializeBinaryFromReader(message: Optional, reader: jspb.BinaryReader): Optional;
}

export namespace Optional {
  export type AsObject = {
    value?: Value.AsObject,
  }
}

export class Map extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<Map.Entry>;
  setEntriesList(value: Array<Map.Entry>): void;
  addEntries(value?: Map.Entry, index?: number): Map.Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Map.AsObject;
  static toObject(includeInstance: boolean, msg: Map): Map.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Map, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Map;
  static deserializeBinaryFromReader(message: Map, reader: jspb.BinaryReader): Map;
}

export namespace Map {
  export type AsObject = {
    entriesList: Array<Map.Entry.AsObject>,
  }

  export class Entry extends jspb.Message {
    hasKey(): boolean;
    clearKey(): void;
    getKey(): Value | undefined;
    setKey(value?: Value): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Value | undefined;
    setValue(value?: Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
  }

  export namespace Entry {
    export type AsObject = {
      key?: Value.AsObject,
      value?: Value.AsObject,
    }
  }
}

