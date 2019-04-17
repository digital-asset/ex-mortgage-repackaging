// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2019 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
//
'use strict';
var grpc = require('grpc');
var com_digitalasset_ledger_api_v1_package_service_pb = require('../../../../../com/digitalasset/ledger/api/v1/package_service_pb.js');
var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js');

function serialize_com_digitalasset_ledger_api_v1_GetPackageRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_package_service_pb.GetPackageRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetPackageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetPackageRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_package_service_pb.GetPackageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetPackageResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_package_service_pb.GetPackageResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetPackageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetPackageResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_package_service_pb.GetPackageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetPackageStatusRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetPackageStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetPackageStatusRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_GetPackageStatusResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.GetPackageStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_GetPackageStatusResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_ListPackagesRequest(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesRequest)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.ListPackagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_ListPackagesRequest(buffer_arg) {
  return com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_digitalasset_ledger_api_v1_ListPackagesResponse(arg) {
  if (!(arg instanceof com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesResponse)) {
    throw new Error('Expected argument of type com.digitalasset.ledger.api.v1.ListPackagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_digitalasset_ledger_api_v1_ListPackagesResponse(buffer_arg) {
  return com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Allows clients to query the DAML LF packages that are supported by the server.
var PackageServiceService = exports.PackageServiceService = {
  // Returns the identifiers of all supported packages.
  listPackages: {
    path: '/com.digitalasset.ledger.api.v1.PackageService/ListPackages',
    requestStream: false,
    responseStream: false,
    requestType: com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesRequest,
    responseType: com_digitalasset_ledger_api_v1_package_service_pb.ListPackagesResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_ListPackagesRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_ListPackagesRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_ListPackagesResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_ListPackagesResponse,
  },
  // Returns the contents of a single package, or a NOT_FOUND error if the requested package is unknown.
  getPackage: {
    path: '/com.digitalasset.ledger.api.v1.PackageService/GetPackage',
    requestStream: false,
    responseStream: false,
    requestType: com_digitalasset_ledger_api_v1_package_service_pb.GetPackageRequest,
    responseType: com_digitalasset_ledger_api_v1_package_service_pb.GetPackageResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_GetPackageRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetPackageRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_GetPackageResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetPackageResponse,
  },
  // Returns the status of a single package.
  getPackageStatus: {
    path: '/com.digitalasset.ledger.api.v1.PackageService/GetPackageStatus',
    requestStream: false,
    responseStream: false,
    requestType: com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusRequest,
    responseType: com_digitalasset_ledger_api_v1_package_service_pb.GetPackageStatusResponse,
    requestSerialize: serialize_com_digitalasset_ledger_api_v1_GetPackageStatusRequest,
    requestDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetPackageStatusRequest,
    responseSerialize: serialize_com_digitalasset_ledger_api_v1_GetPackageStatusResponse,
    responseDeserialize: deserialize_com_digitalasset_ledger_api_v1_GetPackageStatusResponse,
  },
};

exports.PackageServiceClient = grpc.makeGenericClientConstructor(PackageServiceService);
