// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/commands.proto

import * as jspb from "google-protobuf";
import * as com_digitalasset_ledger_api_v1_value_pb from "../../../../../com/digitalasset/ledger/api/v1/value_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Commands extends jspb.Message {
  getLedgerId(): string;
  setLedgerId(value: string): void;

  getWorkflowId(): string;
  setWorkflowId(value: string): void;

  getApplicationId(): string;
  setApplicationId(value: string): void;

  getCommandId(): string;
  setCommandId(value: string): void;

  getParty(): string;
  setParty(value: string): void;

  hasLedgerEffectiveTime(): boolean;
  clearLedgerEffectiveTime(): void;
  getLedgerEffectiveTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLedgerEffectiveTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMaximumRecordTime(): boolean;
  clearMaximumRecordTime(): void;
  getMaximumRecordTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMaximumRecordTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearCommandsList(): void;
  getCommandsList(): Array<Command>;
  setCommandsList(value: Array<Command>): void;
  addCommands(value?: Command, index?: number): Command;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Commands.AsObject;
  static toObject(includeInstance: boolean, msg: Commands): Commands.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Commands, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Commands;
  static deserializeBinaryFromReader(message: Commands, reader: jspb.BinaryReader): Commands;
}

export namespace Commands {
  export type AsObject = {
    ledgerId: string,
    workflowId: string,
    applicationId: string,
    commandId: string,
    party: string,
    ledgerEffectiveTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    maximumRecordTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    commandsList: Array<Command.AsObject>,
  }
}

export class Command extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): CreateCommand | undefined;
  setCreate(value?: CreateCommand): void;

  hasExercise(): boolean;
  clearExercise(): void;
  getExercise(): ExerciseCommand | undefined;
  setExercise(value?: ExerciseCommand): void;

  getCommandCase(): Command.CommandCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    create?: CreateCommand.AsObject,
    exercise?: ExerciseCommand.AsObject,
  }

  export enum CommandCase {
    COMMAND_NOT_SET = 0,
    CREATE = 1,
    EXERCISE = 2,
  }
}

export class CreateCommand extends jspb.Message {
  hasTemplateId(): boolean;
  clearTemplateId(): void;
  getTemplateId(): com_digitalasset_ledger_api_v1_value_pb.Identifier | undefined;
  setTemplateId(value?: com_digitalasset_ledger_api_v1_value_pb.Identifier): void;

  hasCreateArguments(): boolean;
  clearCreateArguments(): void;
  getCreateArguments(): com_digitalasset_ledger_api_v1_value_pb.Record | undefined;
  setCreateArguments(value?: com_digitalasset_ledger_api_v1_value_pb.Record): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommand.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommand): CreateCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommand;
  static deserializeBinaryFromReader(message: CreateCommand, reader: jspb.BinaryReader): CreateCommand;
}

export namespace CreateCommand {
  export type AsObject = {
    templateId?: com_digitalasset_ledger_api_v1_value_pb.Identifier.AsObject,
    createArguments?: com_digitalasset_ledger_api_v1_value_pb.Record.AsObject,
  }
}

export class ExerciseCommand extends jspb.Message {
  hasTemplateId(): boolean;
  clearTemplateId(): void;
  getTemplateId(): com_digitalasset_ledger_api_v1_value_pb.Identifier | undefined;
  setTemplateId(value?: com_digitalasset_ledger_api_v1_value_pb.Identifier): void;

  getContractId(): string;
  setContractId(value: string): void;

  getChoice(): string;
  setChoice(value: string): void;

  hasChoiceArgument(): boolean;
  clearChoiceArgument(): void;
  getChoiceArgument(): com_digitalasset_ledger_api_v1_value_pb.Value | undefined;
  setChoiceArgument(value?: com_digitalasset_ledger_api_v1_value_pb.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExerciseCommand.AsObject;
  static toObject(includeInstance: boolean, msg: ExerciseCommand): ExerciseCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExerciseCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExerciseCommand;
  static deserializeBinaryFromReader(message: ExerciseCommand, reader: jspb.BinaryReader): ExerciseCommand;
}

export namespace ExerciseCommand {
  export type AsObject = {
    templateId?: com_digitalasset_ledger_api_v1_value_pb.Identifier.AsObject,
    contractId: string,
    choice: string,
    choiceArgument?: com_digitalasset_ledger_api_v1_value_pb.Value.AsObject,
  }
}

