// package: grpc.health.v1
// file: grpc/health/v1/health_service.proto

import * as GRPC from "grpc";
import * as grpc_health_v1_health_service_pb from "../../../grpc/health/v1/health_service_pb";

export = Health;
declare namespace Health {
  class HealthClient extends GRPC.Client {
    check(request: grpc_health_v1_health_service_pb.HealthCheckRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<grpc_health_v1_health_service_pb.HealthCheckResponse>): GRPC.ClientUnaryCall;
    check(request: grpc_health_v1_health_service_pb.HealthCheckRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<grpc_health_v1_health_service_pb.HealthCheckResponse>): GRPC.ClientUnaryCall;
    check(request: grpc_health_v1_health_service_pb.HealthCheckRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<grpc_health_v1_health_service_pb.HealthCheckResponse>): GRPC.ClientUnaryCall;
    check(request: grpc_health_v1_health_service_pb.HealthCheckRequest, callback: GRPC.requestCallback<grpc_health_v1_health_service_pb.HealthCheckResponse>): GRPC.ClientUnaryCall;
  }

  namespace MethodImplTypes {
    type check = GRPC.handleUnaryCall<grpc_health_v1_health_service_pb.HealthCheckRequest, grpc_health_v1_health_service_pb.HealthCheckResponse>;
  }
  interface MethodImpls {
    check: MethodImplTypes.check;
  }
  interface HealthService extends GRPC.ServiceDefinition<MethodImpls> {
    check: GRPC.MethodDefinition<grpc_health_v1_health_service_pb.HealthCheckRequest, grpc_health_v1_health_service_pb.HealthCheckResponse>;
  }

}
