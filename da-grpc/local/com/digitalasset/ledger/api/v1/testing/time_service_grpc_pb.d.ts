// package: com.digitalasset.ledger.api.v1.testing
// file: com/digitalasset/ledger/api/v1/testing/time_service.proto

import * as GRPC from "grpc";
import * as com_digitalasset_ledger_api_v1_testing_time_service_pb from "../../../../../../com/digitalasset/ledger/api/v1/testing/time_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export = TimeService;
declare namespace TimeService {
  class TimeServiceClient extends GRPC.Client {
    getTime(request: com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeRequest, metadata: GRPC.Metadata, options: Partial<GRPC.CallOptions>): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeResponse>;
    getTime(request: com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeRequest, options: Partial<GRPC.CallOptions>): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeResponse>;
    getTime(request: com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeRequest, metadata: GRPC.Metadata ): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeResponse>;
    getTime(request: com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeRequest): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeResponse>;
    setTime(request: com_digitalasset_ledger_api_v1_testing_time_service_pb.SetTimeRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
    setTime(request: com_digitalasset_ledger_api_v1_testing_time_service_pb.SetTimeRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
    setTime(request: com_digitalasset_ledger_api_v1_testing_time_service_pb.SetTimeRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
    setTime(request: com_digitalasset_ledger_api_v1_testing_time_service_pb.SetTimeRequest, callback: GRPC.requestCallback<google_protobuf_empty_pb.Empty>): GRPC.ClientUnaryCall;
  }

  namespace MethodImplTypes {
    type getTime = GRPC.handleServerStreamingCall<com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeRequest, com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeResponse>;
    type setTime = GRPC.handleUnaryCall<com_digitalasset_ledger_api_v1_testing_time_service_pb.SetTimeRequest, google_protobuf_empty_pb.Empty>;
  }
  interface MethodImpls {
    getTime: MethodImplTypes.getTime;
    setTime: MethodImplTypes.setTime;
  }
  interface TimeServiceService extends GRPC.ServiceDefinition<MethodImpls> {
    getTime: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeRequest, com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeResponse>;
    setTime: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_testing_time_service_pb.SetTimeRequest, google_protobuf_empty_pb.Empty>;
  }

}
