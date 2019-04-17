// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('grpc');
var com_digitalasset_ledger_api_v1_transaction_service_pb = require('../../../../../com/digitalasset/ledger/api/v1/transaction_service_pb.js');
var com_digitalasset_ledger_api_v1_ledger_offset_pb = require('../../../../../com/digitalasset/ledger/api/v1/ledger_offset_pb.js');
var com_digitalasset_ledger_api_v1_transaction_filter_pb = require('../../../../../com/digitalasset/ledger/api/v1/transaction_filter_pb.js');
var com_digitalasset_ledger_api_v1_transaction_pb = require('../../../../../com/digitalasset/ledger/api/v1/transaction_pb.js');
var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js');

function serialize_com_digitalasset_ledger_api_v1_GetLedgerEndRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetLedgerEndRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetLedgerEndRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetLedgerEndResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetLedgerEndResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetLedgerEndResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetTransactionByEventIdRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByEventIdRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetTransactionByEventIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetTransactionByEventIdRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByEventIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetTransactionByIdRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByIdRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetTransactionByIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetTransactionByIdRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetTransactionResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetTransactionResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetTransactionTreesResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionTreesResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetTransactionTreesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetTransactionTreesResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionTreesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetTransactionsRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetTransactionsRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetTransactionsResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetTransactionsResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Allows clients to read transactions from the ledger.
var TransactionServiceService = exports.TransactionServiceService = {
  // Read the ledger's filtered transaction stream for a set of parties.
  getTransactions: {
    path: '/com.digitalasset.ledger.api.v1.TransactionService/GetTransactions',
    requestStream: false,
    responseStream: true,
    requestType: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest,
    responseType: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_GetTransactionsRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetTransactionsRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_GetTransactionsResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetTransactionsResponse,
  },
  // Read the ledger's complete transaction stream for a set of parties.
  getTransactionTrees: {
    path: '/com.digitalasset.ledger.api.v1.TransactionService/GetTransactionTrees',
    requestStream: false,
    responseStream: true,
    requestType: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionsRequest,
    responseType: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionTreesResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_GetTransactionsRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetTransactionsRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_GetTransactionTreesResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetTransactionTreesResponse,
  },
  // Lookup a transaction by the ID of an event that appears within it.
  // Returns NOT_FOUND if no such transaction exists.
  getTransactionByEventId: {
    path: '/com.digitalasset.ledger.api.v1.TransactionService/GetTransactionByEventId',
    requestStream: false,
    responseStream: false,
    requestType: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByEventIdRequest,
    responseType: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_GetTransactionByEventIdRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetTransactionByEventIdRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_GetTransactionResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetTransactionResponse,
  },
  // Lookup a transaction by its ID.
  // Returns NOT_FOUND if no such transaction exists.
  getTransactionById: {
    path: '/com.digitalasset.ledger.api.v1.TransactionService/GetTransactionById',
    requestStream: false,
    responseStream: false,
    requestType: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionByIdRequest,
    responseType: com_digitalasset_ledger_api_v1_transaction_service_pb.GetTransactionResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_GetTransactionByIdRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetTransactionByIdRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_GetTransactionResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetTransactionResponse,
  },
  // Get the current ledger end.
  // Subscriptions started with the returned offset will serve transactions created after this RPC was called.
  getLedgerEnd: {
    path: '/com.digitalasset.ledger.api.v1.TransactionService/GetLedgerEnd',
    requestStream: false,
    responseStream: false,
    requestType: com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndRequest,
    responseType: com_digitalasset_ledger_api_v1_transaction_service_pb.GetLedgerEndResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_GetLedgerEndRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetLedgerEndRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_GetLedgerEndResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetLedgerEndResponse,
  },
};

exports.TransactionServiceClient = grpc.makeGenericClientConstructor(TransactionServiceService);
