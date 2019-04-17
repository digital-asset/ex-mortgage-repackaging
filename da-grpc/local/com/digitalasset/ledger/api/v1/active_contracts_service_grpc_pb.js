// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('grpc');
var com_digitalasset_ledger_api_v1_active_contracts_service_pb = require('../../../../../com/digitalasset/ledger/api/v1/active_contracts_service_pb.js');
var com_digitalasset_ledger_api_v1_event_pb = require('../../../../../com/digitalasset/ledger/api/v1/event_pb.js');
var com_digitalasset_ledger_api_v1_transaction_filter_pb = require('../../../../../com/digitalasset/ledger/api/v1/transaction_filter_pb.js');
var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js');

function serialize_com_digitalasset_ledger_api_v1_GetActiveContractsRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetActiveContractsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetActiveContractsRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetActiveContractsResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetActiveContractsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetActiveContractsResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Allows clients to initialize themselves according to a fairly recent state of the ledger without reading through all transactions that were committed since the ledger's creation.
var ActiveContractsServiceService = exports.ActiveContractsServiceService = {
  // Returns a stream of the latest snapshot of active contracts. Getting an empty stream means that the active contracts set is empty and the client should listen to transactions using LEDGER_BEGIN
  // Clients SHOULD NOT assume that the set of active contracts they receive reflects the state at the ledger end.
  getActiveContracts: {
    path: '/com.digitalasset.ledger.api.v1.ActiveContractsService/GetActiveContracts',
    requestStream: false,
    responseStream: true,
    requestType: com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsRequest,
    responseType: com_digitalasset_ledger_api_v1_active_contracts_service_pb.GetActiveContractsResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_GetActiveContractsRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetActiveContractsRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_GetActiveContractsResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetActiveContractsResponse,
  },
};

exports.ActiveContractsServiceClient = grpc.makeGenericClientConstructor(ActiveContractsServiceService);
