/**
 * @fileoverview gRPC-Web generated client stub for com.digitalasset.ledger.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js')
const proto = {};
proto.com = {};
proto.com.digitalasset = {};
proto.com.digitalasset.ledger = {};
proto.com.digitalasset.ledger.api = {};
proto.com.digitalasset.ledger.api.v1 = require('./package_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.digitalasset.ledger.api.v1.PackageServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.digitalasset.ledger.api.v1.PackageServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.digitalasset.ledger.api.v1.ListPackagesRequest,
 *   !proto.com.digitalasset.ledger.api.v1.ListPackagesResponse>}
 */
const methodInfo_PackageService_ListPackages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.ListPackagesResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.ListPackagesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.ListPackagesResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.ListPackagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.digitalasset.ledger.api.v1.ListPackagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.ListPackagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.PackageServiceClient.prototype.listPackages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.PackageService/ListPackages',
      request,
      metadata || {},
      methodInfo_PackageService_ListPackages,
      callback);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.ListPackagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.digitalasset.ledger.api.v1.ListPackagesResponse>}
 *     A native promise that resolves to the response
 */
proto.com.digitalasset.ledger.api.v1.PackageServicePromiseClient.prototype.listPackages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.PackageService/ListPackages',
      request,
      metadata || {},
      methodInfo_PackageService_ListPackages);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.digitalasset.ledger.api.v1.GetPackageRequest,
 *   !proto.com.digitalasset.ledger.api.v1.GetPackageResponse>}
 */
const methodInfo_PackageService_GetPackage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.GetPackageResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.GetPackageRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.GetPackageResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetPackageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.digitalasset.ledger.api.v1.GetPackageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetPackageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.PackageServiceClient.prototype.getPackage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.PackageService/GetPackage',
      request,
      metadata || {},
      methodInfo_PackageService_GetPackage,
      callback);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetPackageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.digitalasset.ledger.api.v1.GetPackageResponse>}
 *     A native promise that resolves to the response
 */
proto.com.digitalasset.ledger.api.v1.PackageServicePromiseClient.prototype.getPackage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.PackageService/GetPackage',
      request,
      metadata || {},
      methodInfo_PackageService_GetPackage);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.digitalasset.ledger.api.v1.GetPackageStatusRequest,
 *   !proto.com.digitalasset.ledger.api.v1.GetPackageStatusResponse>}
 */
const methodInfo_PackageService_GetPackageStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.GetPackageStatusResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.GetPackageStatusRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.GetPackageStatusResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetPackageStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.digitalasset.ledger.api.v1.GetPackageStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetPackageStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.PackageServiceClient.prototype.getPackageStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.PackageService/GetPackageStatus',
      request,
      metadata || {},
      methodInfo_PackageService_GetPackageStatus,
      callback);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetPackageStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.digitalasset.ledger.api.v1.GetPackageStatusResponse>}
 *     A native promise that resolves to the response
 */
proto.com.digitalasset.ledger.api.v1.PackageServicePromiseClient.prototype.getPackageStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.PackageService/GetPackageStatus',
      request,
      metadata || {},
      methodInfo_PackageService_GetPackageStatus);
};


module.exports = proto.com.digitalasset.ledger.api.v1;

