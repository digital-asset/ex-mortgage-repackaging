import * as grpcWeb from 'grpc-web';

import * as com_digitalasset_ledger_api_v1_trace_context_pb from '../../../../../com/digitalasset/ledger/api/v1/trace_context_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';

import {
  GetLedgerConfigurationRequest,
  GetLedgerConfigurationResponse} from './ledger_configuration_service_pb';

export class LedgerConfigurationServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getLedgerConfiguration(
    request: GetLedgerConfigurationRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GetLedgerConfigurationResponse>;

}

export class LedgerConfigurationServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getLedgerConfiguration(
    request: GetLedgerConfigurationRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GetLedgerConfigurationResponse>;

}

