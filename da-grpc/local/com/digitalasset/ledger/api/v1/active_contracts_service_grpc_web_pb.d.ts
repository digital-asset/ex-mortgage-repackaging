import * as grpcWeb from 'grpc-web';

import * as com_digitalasset_ledger_api_v1_event_pb from '../../../../../com/digitalasset/ledger/api/v1/event_pb';
import * as com_digitalasset_ledger_api_v1_transaction_filter_pb from '../../../../../com/digitalasset/ledger/api/v1/transaction_filter_pb';
import * as com_digitalasset_ledger_api_v1_trace_context_pb from '../../../../../com/digitalasset/ledger/api/v1/trace_context_pb';

import {
  GetActiveContractsRequest,
  GetActiveContractsResponse} from './active_contracts_service_pb';

export class ActiveContractsServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getActiveContracts(
    request: GetActiveContractsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GetActiveContractsResponse>;

}

export class ActiveContractsServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getActiveContracts(
    request: GetActiveContractsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GetActiveContractsResponse>;

}

