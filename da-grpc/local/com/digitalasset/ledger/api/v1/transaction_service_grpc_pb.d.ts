// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/transaction_service.proto

import * as GRPC from "grpc";
import * as com_digitalasset_ledger_api_v1_transaction_service_pb from "../../../../../com/digitalasset/ledger/api/v1/transaction_service_pb";

export = TransactionService;
declare namespace TransactionService {
  class TransactionServiceClient extends GRPC.Client {
    getTransactions(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest, metadata: GRPC.Metadata, options: Partial<GRPC.CallOptions>): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsResponse>;
    getTransactions(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest, options: Partial<GRPC.CallOptions>): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsResponse>;
    getTransactions(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest, metadata: GRPC.Metadata ): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsResponse>;
    getTransactions(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsResponse>;
    getTransactionTrees(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest, metadata: GRPC.Metadata, options: Partial<GRPC.CallOptions>): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionTreesResponse>;
    getTransactionTrees(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest, options: Partial<GRPC.CallOptions>): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionTreesResponse>;
    getTransactionTrees(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest, metadata: GRPC.Metadata ): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionTreesResponse>;
    getTransactionTrees(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionTreesResponse>;
    getTransactionByEventId(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByEventIdRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse>): GRPC.ClientUnaryCall;
    getTransactionByEventId(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByEventIdRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse>): GRPC.ClientUnaryCall;
    getTransactionByEventId(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByEventIdRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse>): GRPC.ClientUnaryCall;
    getTransactionByEventId(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByEventIdRequest, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse>): GRPC.ClientUnaryCall;
    getTransactionById(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByIdRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse>): GRPC.ClientUnaryCall;
    getTransactionById(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByIdRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse>): GRPC.ClientUnaryCall;
    getTransactionById(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByIdRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse>): GRPC.ClientUnaryCall;
    getTransactionById(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByIdRequest, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse>): GRPC.ClientUnaryCall;
    getLedgerEnd(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndResponse>): GRPC.ClientUnaryCall;
    getLedgerEnd(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndResponse>): GRPC.ClientUnaryCall;
    getLedgerEnd(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndResponse>): GRPC.ClientUnaryCall;
    getLedgerEnd(request: com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndRequest, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndResponse>): GRPC.ClientUnaryCall;
  }

  namespace MethodImplTypes {
    type getTransactions = GRPC.handleServerStreamingCall<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest, com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsResponse>;
    type getTransactionTrees = GRPC.handleServerStreamingCall<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest, com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionTreesResponse>;
    type getTransactionByEventId = GRPC.handleUnaryCall<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByEventIdRequest, com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse>;
    type getTransactionById = GRPC.handleUnaryCall<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByIdRequest, com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse>;
    type getLedgerEnd = GRPC.handleUnaryCall<com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndRequest, com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndResponse>;
  }
  interface MethodImpls {
    getTransactions: MethodImplTypes.getTransactions;
    getTransactionTrees: MethodImplTypes.getTransactionTrees;
    getTransactionByEventId: MethodImplTypes.getTransactionByEventId;
    getTransactionById: MethodImplTypes.getTransactionById;
    getLedgerEnd: MethodImplTypes.getLedgerEnd;
  }
  interface TransactionServiceService extends GRPC.ServiceDefinition<MethodImpls> {
    getTransactions: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest, com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsResponse>;
    getTransactionTrees: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest, com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionTreesResponse>;
    getTransactionByEventId: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByEventIdRequest, com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse>;
    getTransactionById: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByIdRequest, com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse>;
    getLedgerEnd: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndRequest, com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndResponse>;
  }

}
