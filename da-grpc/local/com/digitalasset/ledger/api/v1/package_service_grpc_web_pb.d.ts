import * as grpcWeb from 'grpc-web';

import * as com_digitalasset_ledger_api_v1_trace_context_pb from '../../../../../com/digitalasset/ledger/api/v1/trace_context_pb';

import {
  GetPackageRequest,
  GetPackageResponse,
  GetPackageStatusRequest,
  GetPackageStatusResponse,
  ListPackagesRequest,
  ListPackagesResponse} from './package_service_pb';

export class PackageServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  listPackages(
    request: ListPackagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListPackagesResponse) => void
  ): grpcWeb.ClientReadableStream<ListPackagesResponse>;

  getPackage(
    request: GetPackageRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetPackageResponse) => void
  ): grpcWeb.ClientReadableStream<GetPackageResponse>;

  getPackageStatus(
    request: GetPackageStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetPackageStatusResponse) => void
  ): grpcWeb.ClientReadableStream<GetPackageStatusResponse>;

}

export class PackageServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  listPackages(
    request: ListPackagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListPackagesResponse>;

  getPackage(
    request: GetPackageRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetPackageResponse>;

  getPackageStatus(
    request: GetPackageStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetPackageStatusResponse>;

}

