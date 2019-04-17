import * as grpcWeb from 'grpc-web';

import * as com_digitalasset_ledger_api_v1_ledger_offset_pb from '../../../../../com/digitalasset/ledger/api/v1/ledger_offset_pb';
import * as com_digitalasset_ledger_api_v1_transaction_filter_pb from '../../../../../com/digitalasset/ledger/api/v1/transaction_filter_pb';
import * as com_digitalasset_ledger_api_v1_transaction_pb from '../../../../../com/digitalasset/ledger/api/v1/transaction_pb';
import * as com_digitalasset_ledger_api_v1_trace_context_pb from '../../../../../com/digitalasset/ledger/api/v1/trace_context_pb';

import {
  GetLedgerEndRequest,
  GetLedgerEndResponse,
  GetTransactionByEventIdRequest,
  GetTransactionByIdRequest,
  GetTransactionResponse,
  GetTransactionTreesResponse,
  GetTransactionsRequest,
  GetTransactionsResponse} from './transaction_service_pb';

export class TransactionServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getTransactions(
    request: GetTransactionsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GetTransactionsResponse>;

  getTransactionTrees(
    request: GetTransactionsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GetTransactionTreesResponse>;

  getTransactionByEventId(
    request: GetTransactionByEventIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetTransactionResponse) => void
  ): grpcWeb.ClientReadableStream<GetTransactionResponse>;

  getTransactionById(
    request: GetTransactionByIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetTransactionResponse) => void
  ): grpcWeb.ClientReadableStream<GetTransactionResponse>;

  getLedgerEnd(
    request: GetLedgerEndRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetLedgerEndResponse) => void
  ): grpcWeb.ClientReadableStream<GetLedgerEndResponse>;

}

export class TransactionServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getTransactions(
    request: GetTransactionsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GetTransactionsResponse>;

  getTransactionTrees(
    request: GetTransactionsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GetTransactionTreesResponse>;

  getTransactionByEventId(
    request: GetTransactionByEventIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetTransactionResponse>;

  getTransactionById(
    request: GetTransactionByIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetTransactionResponse>;

  getLedgerEnd(
    request: GetLedgerEndRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetLedgerEndResponse>;

}

