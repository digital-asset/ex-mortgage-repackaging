// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('grpc');
var com_digitalasset_ledger_api_v1_ledger_identity_service_pb = require('../../../../../com/digitalasset/ledger/api/v1/ledger_identity_service_pb.js');
var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js');

function serialize_com_digitalasset_ledger_api_v1_GetLedgerIdentityRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetLedgerIdentityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetLedgerIdentityRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetLedgerIdentityResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetLedgerIdentityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetLedgerIdentityResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Allows clients to verify that the server they are communicating with exposes the ledger they wish to operate on.
// Note that every ledger has a unique id.
var LedgerIdentityServiceService = exports.LedgerIdentityServiceService = {
  // Clients may call this RPC to return the identifier of the ledger they are connected to.
  getLedgerIdentity: {
    path: '/com.digitalasset.ledger.api.v1.LedgerIdentityService/GetLedgerIdentity',
    requestStream: false,
    responseStream: false,
    requestType: com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityRequest,
    responseType: com_digitalasset_ledger_api_v1_ledger_identity_service_pb.GetLedgerIdentityResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_GetLedgerIdentityRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetLedgerIdentityRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_GetLedgerIdentityResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetLedgerIdentityResponse,
  },
};

exports.LedgerIdentityServiceClient = grpc.makeGenericClientConstructor(LedgerIdentityServiceService);
