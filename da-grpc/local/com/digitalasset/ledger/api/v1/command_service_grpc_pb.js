// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('grpc');
var com_digitalasset_ledger_api_v1_command_service_pb = require('../../../../../com/digitalasset/ledger/api/v1/command_service_pb.js');
var com_digitalasset_ledger_api_v1_commands_pb = require('../../../../../com/digitalasset/ledger/api/v1/commands_pb.js');
var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_com_digitalasset_ledger_api_v1_SubmitAndWaitRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_command_service_pb.SubmitAndWaitRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.SubmitAndWaitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_SubmitAndWaitRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_command_service_pb.SubmitAndWaitRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Command Service is able to correlate submitted commands with completion data, identify timeouts, and return contextual
// information with each tracking result. This supports the implementation of stateless clients.
var CommandServiceService = exports.CommandServiceService = {
  // Submits a single composite command and waits for its result.
  // Returns RESOURCE_EXHAUSTED if the number of in-flight commands reached the maximum (if a limit is configured).
  // Propagates the gRPC error of failed submissions including DAML interpretation errors.
  submitAndWait: {
    path: '/com.digitalasset.ledger.api.v1.CommandService/SubmitAndWait',
    requestStream: false,
    responseStream: false,
    requestType: com_digitalasset_ledger_api_v1_command_service_pb.SubmitAndWaitRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_SubmitAndWaitRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_SubmitAndWaitRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.CommandServiceClient = grpc.makeGenericClientConstructor(CommandServiceService);
