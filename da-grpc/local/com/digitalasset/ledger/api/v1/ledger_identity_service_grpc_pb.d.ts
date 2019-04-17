// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/ledger_identity_service.proto

import * as GRPC from "grpc";
import * as com_digitalasset_ledger_api_v1_ledger_identity_service_pb from "../../../../../com/digitalasset/ledger/api/v1/ledger_identity_service_pb";

export = LedgerIdentityService;
declare namespace LedgerIdentityService {
  class LedgerIdentityServiceClient extends GRPC.Client {
    getLedgerIdentity(request: com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityResponse>): GRPC.ClientUnaryCall;
    getLedgerIdentity(request: com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityResponse>): GRPC.ClientUnaryCall;
    getLedgerIdentity(request: com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityResponse>): GRPC.ClientUnaryCall;
    getLedgerIdentity(request: com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityRequest, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityResponse>): GRPC.ClientUnaryCall;
  }

  namespace MethodImplTypes {
    type getLedgerIdentity = GRPC.handleUnaryCall<com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityRequest, com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityResponse>;
  }
  interface MethodImpls {
    getLedgerIdentity: MethodImplTypes.getLedgerIdentity;
  }
  interface LedgerIdentityServiceService extends GRPC.ServiceDefinition<MethodImpls> {
    getLedgerIdentity: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityRequest, com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityResponse>;
  }

}
