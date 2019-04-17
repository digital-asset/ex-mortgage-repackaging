// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('grpc');
var com_digitalasset_ledger_api_v1_ledger_configuration_service_pb = require('../../../../../com/digitalasset/ledger/api/v1/ledger_configuration_service_pb.js');
var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

function serialize_com_digitalasset_ledger_api_v1_GetLedgerConfigurationRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetLedgerConfigurationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetLedgerConfigurationRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetLedgerConfigurationResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetLedgerConfigurationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetLedgerConfigurationResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// LedgerConfigurationService allows clients to subscribe to changes of the ledger configuration.
var LedgerConfigurationServiceService = exports.LedgerConfigurationServiceService = {
  // GetLedgerConfiguration returns the latest configuraiton as the first response, and publishes configuration updates in the same stream.
  getLedgerConfiguration: {
    path: '/com.digitalasset.ledger.api.v1.LedgerConfigurationService/GetLedgerConfiguration',
    requestStream: false,
    responseStream: true,
    requestType: com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationRequest,
    responseType: com_digitalasset_ledger_api_v1_ledger_configuration_service_pb.GetLedgerConfigurationResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_GetLedgerConfigurationRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetLedgerConfigurationRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_GetLedgerConfigurationResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetLedgerConfigurationResponse,
  },
};

exports.LedgerConfigurationServiceClient = grpc.makeGenericClientConstructor(LedgerConfigurationServiceService);
