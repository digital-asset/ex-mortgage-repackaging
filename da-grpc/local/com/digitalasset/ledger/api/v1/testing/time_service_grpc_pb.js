// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('grpc');
var com_digitalasset_ledger_api_v1_testing_time_service_pb = require('../../../../../../com/digitalasset/ledger/api/v1/testing/time_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_com_digitalasset_ledger_api_v1_testing_GetTimeRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.testing.GetTimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_testing_GetTimeRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_testing_GetTimeResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.testing.GetTimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_testing_GetTimeResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_testing_SetTimeRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_testing_time_service_pb.SetTimeRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.testing.SetTimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_testing_SetTimeRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_testing_time_service_pb.SetTimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Optional service, exposed for testing static time scenarios.
var TimeServiceService = exports.TimeServiceService = {
  // Returns a stream of time updates.
  // Always returns at least one response, where the first one is the current time.
  // Subsequent responses are emitted whenever the ledger server's time is updated.
  getTime: {
    path: '/com.digitalasset.ledger.api.v1.testing.TimeService/GetTime',
    requestStream: false,
    responseStream: true,
    requestType: com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeRequest,
    responseType: com_digitalasset_ledger_api_v1_testing_time_service_pb.GetTimeResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_testing_GetTimeRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_testing_GetTimeRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_testing_GetTimeResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_testing_GetTimeResponse,
  },
  // Allows clients to change the ledger's clock in an atomic get-and-set operation.
  setTime: {
    path: '/com.digitalasset.ledger.api.v1.testing.TimeService/SetTime',
    requestStream: false,
    responseStream: false,
    requestType: com_digitalasset_ledger_api_v1_testing_time_service_pb.SetTimeRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_testing_SetTimeRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_testing_SetTimeRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.TimeServiceClient = grpc.makeGenericClientConstructor(TimeServiceService);
