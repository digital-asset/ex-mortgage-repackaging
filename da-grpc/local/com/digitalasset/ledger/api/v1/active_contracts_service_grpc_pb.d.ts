// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/active_contracts_service.proto

import * as GRPC from "grpc";
import * as com_digitalasset_ledger_api_v1_active_contracts_service_pb from "../../../../../com/digitalasset/ledger/api/v1/active_contracts_service_pb";

export = ActiveContractsService;
declare namespace ActiveContractsService {
  class ActiveContractsServiceClient extends GRPC.Client {
    getActiveContracts(request: com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsRequest, metadata: GRPC.Metadata, options: Partial<GRPC.CallOptions>): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsResponse>;
    getActiveContracts(request: com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsRequest, options: Partial<GRPC.CallOptions>): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsResponse>;
    getActiveContracts(request: com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsRequest, metadata: GRPC.Metadata ): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsResponse>;
    getActiveContracts(request: com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsRequest): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsResponse>;
  }

  namespace MethodImplTypes {
    type getActiveContracts = GRPC.handleServerStreamingCall<com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsRequest, com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsResponse>;
  }
  interface MethodImpls {
    getActiveContracts: MethodImplTypes.getActiveContracts;
  }
  interface ActiveContractsServiceService extends GRPC.ServiceDefinition<MethodImpls> {
    getActiveContracts: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsRequest, com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsResponse>;
  }

}
