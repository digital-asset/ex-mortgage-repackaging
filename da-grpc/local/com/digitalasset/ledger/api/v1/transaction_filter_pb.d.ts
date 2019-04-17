// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/transaction_filter.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_ledger_api_v1_value_pb from "../../../../../com/digitalasset/ledger/api/v1/value_pb";

export class TransactionFilter extends jspb.Message {
  getFiltersByPartyMap(): jspb.Map<string, Filters>;
  clearFiltersByPartyMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionFilter): TransactionFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionFilter;
  static deserializeBinaryFromReader(message: TransactionFilter, reader: jspb.BinaryReader): TransactionFilter;
}

export namespace TransactionFilter {
  export type AsObject = {
    filtersByPartyMap: Array<[string, Filters.AsObject]>,
  }
}

export class Filters extends jspb.Message {
  hasInclusive(): boolean;
  clearInclusive(): void;
  getInclusive(): InclusiveFilters | undefined;
  setInclusive(value?: InclusiveFilters): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filters.AsObject;
  static toObject(includeInstance: boolean, msg: Filters): Filters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Filters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filters;
  static deserializeBinaryFromReader(message: Filters, reader: jspb.BinaryReader): Filters;
}

export namespace Filters {
  export type AsObject = {
    inclusive?: InclusiveFilters.AsObject,
  }
}

export class InclusiveFilters extends jspb.Message {
  clearTemplateIdsList(): void;
  getTemplateIdsList(): Array<com_digitalasset_ledger_api_v1_value_pb.Identifier>;
  setTemplateIdsList(value: Array<com_digitalasset_ledger_api_v1_value_pb.Identifier>): void;
  addTemplateIds(value?: com_digitalasset_ledger_api_v1_value_pb.Identifier, index?: number): com_digitalasset_ledger_api_v1_value_pb.Identifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InclusiveFilters.AsObject;
  static toObject(includeInstance: boolean, msg: InclusiveFilters): InclusiveFilters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InclusiveFilters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InclusiveFilters;
  static deserializeBinaryFromReader(message: InclusiveFilters, reader: jspb.BinaryReader): InclusiveFilters;
}

export namespace InclusiveFilters {
  export type AsObject = {
    templateIdsList: Array<com_digitalasset_ledger_api_v1_value_pb.Identifier.AsObject>,
  }
}

