// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('grpc');
var com_digitalasset_ledger_api_v1_testing_reset_service_pb = require('../../../../../../com/digitalasset/ledger/api/v1/testing/reset_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_com_digitalasset_ledger_api_v1_testing_ResetRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_testing_reset_service_pb.ResetRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.testing.ResetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_testing_ResetRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_testing_reset_service_pb.ResetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to reset the ledger state. The goal here is to be able to reset the state in a way
// that's much faster compared to restarting the whole ledger application (be it a sandbox
// or the real ledger server).
//
// Note that _all_ state present in the ledger implementation will be reset, most importantly
// including the ledger id. This means that clients will have to re-fetch the ledger id
// from the identity service after hitting this endpoint.
//
// The semantics are as follows:
// * When the reset service returns the reset is initiated, but not completed;
// * While the reset is performed, the ledger will not accept new requests. In fact we guarantee
//   that ledger stops accepting new requests by the time the response to Reset is delivered;
// * In-flight requests might be aborted, we make no guarantees on when or how quickly this
//   happens;
// * The ledger might be unavailable for a period of time before the reset is complete.
//
// Given the above, the recommended mode of operation for clients of the reset endpoint is to
// call it, then call the ledger identity endpoint in a retry loop that will tolerate a brief
// window when the ledger is down, and resume operation as soon as the new ledger id is delivered.
//
// Note that this service will be available on the sandbox and might be available in some other testing
// environments, but will _never_ be available in production.
var ResetServiceService = exports.ResetServiceService = {
  // Resets the ledger state. Note that loaded DARs won't be removed -- this only rolls back the
  // ledger to genesis.
  reset: {
    path: '/com.digitalasset.ledger.api.v1.testing.ResetService/Reset',
    requestStream: false,
    responseStream: false,
    requestType: com_digitalasset_ledger_api_v1_testing_reset_service_pb.ResetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_testing_ResetRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_testing_ResetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ResetServiceClient = grpc.makeGenericClientConstructor(ResetServiceService);
