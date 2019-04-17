// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/trace_context.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class TraceContext extends jspb.Message {
  getTraceIdHigh(): number;
  setTraceIdHigh(value: number): void;

  getTraceId(): number;
  setTraceId(value: number): void;

  getSpanId(): number;
  setSpanId(value: number): void;

  hasParentSpanId(): boolean;
  clearParentSpanId(): void;
  getParentSpanId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setParentSpanId(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  getSampled(): boolean;
  setSampled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraceContext.AsObject;
  static toObject(includeInstance: boolean, msg: TraceContext): TraceContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TraceContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraceContext;
  static deserializeBinaryFromReader(message: TraceContext, reader: jspb.BinaryReader): TraceContext;
}

export namespace TraceContext {
  export type AsObject = {
    traceIdHigh: number,
    traceId: number,
    spanId: number,
    parentSpanId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    sampled: boolean,
  }
}

