// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/command_submission_service.proto

import * as GRPC from "grpc";
import * as com_digitalasset_ledger_api_v1_command_submission_service_pb from "../../../../../com/digitalasset/ledger/api/v1/command_submission_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export = CommandSubmissionService;
declare namespace CommandSubmissionService {
  class CommandSubmissionServiceClient extends GRPC.Client {
    submit(request: com_digitalasset_ledger_api_v1_command_submission_service_pb.SubmitRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
    submit(request: com_digitalasset_ledger_api_v1_command_submission_service_pb.SubmitRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
    submit(request: com_digitalasset_ledger_api_v1_command_submission_service_pb.SubmitRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
    submit(request: com_digitalasset_ledger_api_v1_command_submission_service_pb.SubmitRequest, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
  }

  namespace MethodImplTypes {
    type submit = GRPC.handleUnaryCall<com_digitalasset_ledger_api_v1_command_submission_service_pb.SubmitRequest, google_protobuf_empty_pb.Empty>;
  }
  interface MethodImpls {
    submit: MethodImplTypes.submit;
  }
  interface CommandSubmissionServiceService extends GRPC.ServiceDefinition<MethodImpls> {
    submit: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_command_submission_service_pb.SubmitRequest, google_protobuf_empty_pb.Empty>;
  }

}
