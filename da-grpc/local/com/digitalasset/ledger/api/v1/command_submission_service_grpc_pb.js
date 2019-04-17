// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('grpc');
var com_digitalasset_ledger_api_v1_command_submission_service_pb = require('../../../../../com/digitalasset/ledger/api/v1/command_submission_service_pb.js');
var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js');
var com_digitalasset_ledger_api_v1_commands_pb = require('../../../../../com/digitalasset/ledger/api/v1/commands_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_com_digitalasset_ledger_api_v1_SubmitRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_command_submission_service_pb.SubmitRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.SubmitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_SubmitRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_command_submission_service_pb.SubmitRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Allows clients to attempt advancing the ledger's state by submitting commands.
// The final states of their submissions are disclosed by the Command Completion Service.
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
var CommandSubmissionServiceService = exports.CommandSubmissionServiceService = {
  // Submit a single composite command.
  submit: {
    path: '/com.digitalasset.ledger.api.v1.CommandSubmissionService/Submit',
    requestStream: false,
    responseStream: false,
    requestType: com_digitalasset_ledger_api_v1_command_submission_service_pb.SubmitRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_SubmitRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_SubmitRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.CommandSubmissionServiceClient = grpc.makeGenericClientConstructor(CommandSubmissionServiceService);
