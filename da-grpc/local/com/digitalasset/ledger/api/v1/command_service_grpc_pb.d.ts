// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/command_service.proto

import * as GRPC from "grpc";
import * as com_digitalasset_ledger_api_v1_command_service_pb from "../../../../../com/digitalasset/ledger/api/v1/command_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export = CommandService;
declare namespace CommandService {
  class CommandServiceClient extends GRPC.Client {
    submitAndWait(request: com_digitalasset_ledger_api_v1_command_service_pb.SubmitAndWaitRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
    submitAndWait(request: com_digitalasset_ledger_api_v1_command_service_pb.SubmitAndWaitRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
    submitAndWait(request: com_digitalasset_ledger_api_v1_command_service_pb.SubmitAndWaitRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
    submitAndWait(request: com_digitalasset_ledger_api_v1_command_service_pb.SubmitAndWaitRequest, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
  }

  namespace MethodImplTypes {
    type submitAndWait = GRPC.handleUnaryCall<com_digitalasset_ledger_api_v1_command_service_pb.SubmitAndWaitRequest, google_protobuf_empty_pb.Empty>;
  }
  interface MethodImpls {
    submitAndWait: MethodImplTypes.submitAndWait;
  }
  interface CommandServiceService extends GRPC.ServiceDefinition<MethodImpls> {
    submitAndWait: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_command_service_pb.SubmitAndWaitRequest, google_protobuf_empty_pb.Empty>;
  }

}
