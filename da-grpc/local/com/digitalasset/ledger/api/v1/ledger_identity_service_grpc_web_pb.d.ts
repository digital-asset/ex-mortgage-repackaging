import * as grpcWeb from 'grpc-web';

import * as com_digitalasset_ledger_api_v1_trace_context_pb from '../../../../../com/digitalasset/ledger/api/v1/trace_context_pb';

import {
  GetLedgerIdentityRequest,
  GetLedgerIdentityResponse} from './ledger_identity_service_pb';

export class LedgerIdentityServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getLedgerIdentity(
    request: GetLedgerIdentityRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetLedgerIdentityResponse) => void
  ): grpcWeb.ClientReadableStream<GetLedgerIdentityResponse>;

}

export class LedgerIdentityServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getLedgerIdentity(
    request: GetLedgerIdentityRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetLedgerIdentityResponse>;

}

