// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/event.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_ledger_api_v1_value_pb from "../../../../../com/digitalasset/ledger/api/v1/value_pb";

export class Event extends jspb.Message {
  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): CreatedEvent | undefined;
  setCreated(value?: CreatedEvent): void;

  hasExercised(): boolean;
  clearExercised(): void;
  getExercised(): ExercisedEvent | undefined;
  setExercised(value?: ExercisedEvent): void;

  hasArchived(): boolean;
  clearArchived(): void;
  getArchived(): ArchivedEvent | undefined;
  setArchived(value?: ArchivedEvent): void;

  getEventCase(): Event.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    created?: CreatedEvent.AsObject,
    exercised?: ExercisedEvent.AsObject,
    archived?: ArchivedEvent.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    CREATED = 1,
    EXERCISED = 2,
    ARCHIVED = 3,
  }
}

export class CreatedEvent extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): void;

  getContractId(): string;
  setContractId(value: string): void;

  hasTemplateId(): boolean;
  clearTemplateId(): void;
  getTemplateId(): com_digitalasset_ledger_api_v1_value_pb.Identifier | undefined;
  setTemplateId(value?: com_digitalasset_ledger_api_v1_value_pb.Identifier): void;

  hasCreateArguments(): boolean;
  clearCreateArguments(): void;
  getCreateArguments(): com_digitalasset_ledger_api_v1_value_pb.Record | undefined;
  setCreateArguments(value?: com_digitalasset_ledger_api_v1_value_pb.Record): void;

  clearWitnessPartiesList(): void;
  getWitnessPartiesList(): Array<string>;
  setWitnessPartiesList(value: Array<string>): void;
  addWitnessParties(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: CreatedEvent): CreatedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreatedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatedEvent;
  static deserializeBinaryFromReader(message: CreatedEvent, reader: jspb.BinaryReader): CreatedEvent;
}

export namespace CreatedEvent {
  export type AsObject = {
    eventId: string,
    contractId: string,
    templateId?: com_digitalasset_ledger_api_v1_value_pb.Identifier.AsObject,
    createArguments?: com_digitalasset_ledger_api_v1_value_pb.Record.AsObject,
    witnessPartiesList: Array<string>,
  }
}

export class ArchivedEvent extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): void;

  getContractId(): string;
  setContractId(value: string): void;

  hasTemplateId(): boolean;
  clearTemplateId(): void;
  getTemplateId(): com_digitalasset_ledger_api_v1_value_pb.Identifier | undefined;
  setTemplateId(value?: com_digitalasset_ledger_api_v1_value_pb.Identifier): void;

  clearWitnessPartiesList(): void;
  getWitnessPartiesList(): Array<string>;
  setWitnessPartiesList(value: Array<string>): void;
  addWitnessParties(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchivedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ArchivedEvent): ArchivedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchivedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchivedEvent;
  static deserializeBinaryFromReader(message: ArchivedEvent, reader: jspb.BinaryReader): ArchivedEvent;
}

export namespace ArchivedEvent {
  export type AsObject = {
    eventId: string,
    contractId: string,
    templateId?: com_digitalasset_ledger_api_v1_value_pb.Identifier.AsObject,
    witnessPartiesList: Array<string>,
  }
}

export class ExercisedEvent extends jspb.Message {
  getEventId(): string;
  setEventId(value: string): void;

  getContractId(): string;
  setContractId(value: string): void;

  hasTemplateId(): boolean;
  clearTemplateId(): void;
  getTemplateId(): com_digitalasset_ledger_api_v1_value_pb.Identifier | undefined;
  setTemplateId(value?: com_digitalasset_ledger_api_v1_value_pb.Identifier): void;

  getContractCreatingEventId(): string;
  setContractCreatingEventId(value: string): void;

  getChoice(): string;
  setChoice(value: string): void;

  hasChoiceArgument(): boolean;
  clearChoiceArgument(): void;
  getChoiceArgument(): com_digitalasset_ledger_api_v1_value_pb.Value | undefined;
  setChoiceArgument(value?: com_digitalasset_ledger_api_v1_value_pb.Value): void;

  clearActingPartiesList(): void;
  getActingPartiesList(): Array<string>;
  setActingPartiesList(value: Array<string>): void;
  addActingParties(value: string, index?: number): string;

  getConsuming(): boolean;
  setConsuming(value: boolean): void;

  clearWitnessPartiesList(): void;
  getWitnessPartiesList(): Array<string>;
  setWitnessPartiesList(value: Array<string>): void;
  addWitnessParties(value: string, index?: number): string;

  clearChildEventIdsList(): void;
  getChildEventIdsList(): Array<string>;
  setChildEventIdsList(value: Array<string>): void;
  addChildEventIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExercisedEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ExercisedEvent): ExercisedEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExercisedEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExercisedEvent;
  static deserializeBinaryFromReader(message: ExercisedEvent, reader: jspb.BinaryReader): ExercisedEvent;
}

export namespace ExercisedEvent {
  export type AsObject = {
    eventId: string,
    contractId: string,
    templateId?: com_digitalasset_ledger_api_v1_value_pb.Identifier.AsObject,
    contractCreatingEventId: string,
    choice: string,
    choiceArgument?: com_digitalasset_ledger_api_v1_value_pb.Value.AsObject,
    actingPartiesList: Array<string>,
    consuming: boolean,
    witnessPartiesList: Array<string>,
    childEventIdsList: Array<string>,
  }
}

