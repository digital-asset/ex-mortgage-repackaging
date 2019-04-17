// package: com.digitalasset.ledger.api.v1.testing
// file: com/digitalasset/ledger/api/v1/testing/reset_service.proto

import * as GRPC from "grpc";
import * as com_digitalasset_ledger_api_v1_testing_reset_service_pb from "../../../../../../com/digitalasset/ledger/api/v1/testing/reset_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export = ResetService;
declare namespace ResetService {
  class ResetServiceClient extends GRPC.Client {
    reset(request: com_digitalasset_ledger_api_v1_testing_reset_service_pb.ResetRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
    reset(request: com_digitalasset_ledger_api_v1_testing_reset_service_pb.ResetRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
    reset(request: com_digitalasset_ledger_api_v1_testing_reset_service_pb.ResetRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
    reset(request: com_digitalasset_ledger_api_v1_testing_reset_service_pb.ResetRequest, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
  }

  namespace MethodImplTypes {
    type reset = GRPC.handleUnaryCall<com_digitalasset_ledger_api_v1_testing_reset_service_pb.ResetRequest, google_protobuf_empty_pb.Empty>;
  }
  interface MethodImpls {
    reset: MethodImplTypes.reset;
  }
  interface ResetServiceService extends GRPC.ServiceDefinition<MethodImpls> {
    reset: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_testing_reset_service_pb.ResetRequest, google_protobuf_empty_pb.Empty>;
  }

}
