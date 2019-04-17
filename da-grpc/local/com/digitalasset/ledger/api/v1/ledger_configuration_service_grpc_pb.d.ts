// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/ledger_configuration_service.proto

import * as GRPC from "grpc";
import * as com_digitalasset_ledger_api_v1_ledger_configuration_service_pb from "../../../../../com/digitalasset/ledger/api/v1/ledger_configuration_service_pb";

export = LedgerConfigurationService;
declare namespace LedgerConfigurationService {
  class LedgerConfigurationServiceClient extends GRPC.Client {
    getLedgerConfiguration(request: com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationRequest, metadata: GRPC.Metadata, options: Partial<GRPC.CallOptions>): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationResponse>;
    getLedgerConfiguration(request: com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationRequest, options: Partial<GRPC.CallOptions>): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationResponse>;
    getLedgerConfiguration(request: com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationRequest, metadata: GRPC.Metadata ): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationResponse>;
    getLedgerConfiguration(request: com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationRequest): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationResponse>;
  }

  namespace MethodImplTypes {
    type getLedgerConfiguration = GRPC.handleServerStreamingCall<com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationRequest, com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationResponse>;
  }
  interface MethodImpls {
    getLedgerConfiguration: MethodImplTypes.getLedgerConfiguration;
  }
  interface LedgerConfigurationServiceService extends GRPC.ServiceDefinition<MethodImpls> {
    getLedgerConfiguration: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationRequest, com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationResponse>;
  }

}
