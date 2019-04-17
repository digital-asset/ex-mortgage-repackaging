// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('grpc');
var com_digitalasset_ledger_api_v1_command_completion_service_pb = require('../../../../../com/digitalasset/ledger/api/v1/command_completion_service_pb.js');
var com_digitalasset_ledger_api_v1_completion_pb = require('../../../../../com/digitalasset/ledger/api/v1/completion_pb.js');
var com_digitalasset_ledger_api_v1_ledger_offset_pb = require('../../../../../com/digitalasset/ledger/api/v1/ledger_offset_pb.js');
var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_com_digitalasset_ledger_api_v1_CompletionEndRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.CompletionEndRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_CompletionEndRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_CompletionEndResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.CompletionEndResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_CompletionEndResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_CompletionStreamRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.CompletionStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_CompletionStreamRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_CompletionStreamResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.CompletionStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_CompletionStreamResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Allows clients to observe the status of their submissions.
// Commands may be submitted via the Command Submission Service.
// The on-ledger effects of their submissions are disclosed by the Transaction Service.
// Commands may fail in 4 distinct manners:
// 1) INVALID_PARAMETER gRPC error on malformed payloads and missing required fields.
// 2) Failure communicated in the gRPC error.
// 3) Failure communicated in a Completion.
// 4) A Checkpoint with record_time > command mrt arrives through the Completion Stream, and the command's Completion was not visible before. In this case the command is lost.
// Clients that do not receive a successful completion about their submission MUST NOT assume that it was successful.
// Clients SHOULD subscribe to the CompletionStream before starting to submit commands to prevent race conditions.
//
// Interprocess tracing of command submissions may be achieved via Zipkin by filling out the trace_context field.
// The server will return a child context of the submitted one, (or a new one if the context was missing) on both the Completion and Transaction streams.
var CommandCompletionServiceService = exports.CommandCompletionServiceService = {
  // Subscribe to command completion events.
  completionStream: {
    path: '/com.digitalasset.ledger.api.v1.CommandCompletionService/CompletionStream',
    requestStream: false,
    responseStream: true,
    requestType: com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamRequest,
    responseType: com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_CompletionStreamRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_CompletionStreamRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_CompletionStreamResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_CompletionStreamResponse,
  },
  // Returns the offset after the latest completion.
  completionEnd: {
    path: '/com.digitalasset.ledger.api.v1.CommandCompletionService/CompletionEnd',
    requestStream: false,
    responseStream: false,
    requestType: com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndRequest,
    responseType: com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_CompletionEndRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_CompletionEndRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_CompletionEndResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_CompletionEndResponse,
  },
};

exports.CommandCompletionServiceClient = grpc.makeGenericClientConstructor(CommandCompletionServiceService);
