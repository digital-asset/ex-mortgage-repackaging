// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/package_service.proto

import * as GRPC from "grpc";
import * as com_digitalasset_ledger_api_v1_package_service_pb from "../../../../../com/digitalasset/ledger/api/v1/package_service_pb";

export = PackageService;
declare namespace PackageService {
  class PackageServiceClient extends GRPC.Client {
    listPackages(request: com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesResponse>): GRPC.ClientUnaryCall;
    listPackages(request: com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesResponse>): GRPC.ClientUnaryCall;
    listPackages(request: com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesResponse>): GRPC.ClientUnaryCall;
    listPackages(request: com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesRequest, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesResponse>): GRPC.ClientUnaryCall;
    getPackage(request: com_digitalasset_ledger_api_v1_package_service_pb.GetPackageRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_package_service_pb.GetPackageResponse>): GRPC.ClientUnaryCall;
    getPackage(request: com_digitalasset_ledger_api_v1_package_service_pb.GetPackageRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_package_service_pb.GetPackageResponse>): GRPC.ClientUnaryCall;
    getPackage(request: com_digitalasset_ledger_api_v1_package_service_pb.GetPackageRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_package_service_pb.GetPackageResponse>): GRPC.ClientUnaryCall;
    getPackage(request: com_digitalasset_ledger_api_v1_package_service_pb.GetPackageRequest, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_package_service_pb.GetPackageResponse>): GRPC.ClientUnaryCall;
    getPackageStatus(request: com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusResponse>): GRPC.ClientUnaryCall;
    getPackageStatus(request: com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusResponse>): GRPC.ClientUnaryCall;
    getPackageStatus(request: com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusResponse>): GRPC.ClientUnaryCall;
    getPackageStatus(request: com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusRequest, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusResponse>): GRPC.ClientUnaryCall;
  }

  namespace MethodImplTypes {
    type listPackages = GRPC.handleUnaryCall<com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesRequest, com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesResponse>;
    type getPackage = GRPC.handleUnaryCall<com_digitalasset_ledger_api_v1_package_service_pb.GetPackageRequest, com_digitalasset_ledger_api_v1_package_service_pb.GetPackageResponse>;
    type getPackageStatus = GRPC.handleUnaryCall<com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusRequest, com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusResponse>;
  }
  interface MethodImpls {
    listPackages: MethodImplTypes.listPackages;
    getPackage: MethodImplTypes.getPackage;
    getPackageStatus: MethodImplTypes.getPackageStatus;
  }
  interface PackageServiceService extends GRPC.ServiceDefinition<MethodImpls> {
    listPackages: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesRequest, com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesResponse>;
    getPackage: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_package_service_pb.GetPackageRequest, com_digitalasset_ledger_api_v1_package_service_pb.GetPackageResponse>;
    getPackageStatus: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusRequest, com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusResponse>;
  }

}
