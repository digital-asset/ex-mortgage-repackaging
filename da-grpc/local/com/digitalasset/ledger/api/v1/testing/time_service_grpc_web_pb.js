/**
 * @fileoverview gRPC-Web generated client stub for com.digitalasset.ledger.api.v1.testing
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.com = {};
proto.com.digitalasset = {};
proto.com.digitalasset.ledger = {};
proto.com.digitalasset.ledger.api = {};
proto.com.digitalasset.ledger.api.v1 = {};
proto.com.digitalasset.ledger.api.v1.testing = require('./time_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.digitalasset.ledger.api.v1.testing.TimeServiceClient =
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
proto.com.digitalasset.ledger.api.v1.testing.TimeServicePromiseClient =
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
 *   !proto.com.digitalasset.ledger.api.v1.testing.GetTimeRequest,
 *   !proto.com.digitalasset.ledger.api.v1.testing.GetTimeResponse>}
 */
const methodInfo_TimeService_GetTime = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.testing.GetTimeResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.testing.GetTimeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.testing.GetTimeResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.testing.GetTimeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.testing.GetTimeResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.testing.TimeServiceClient.prototype.getTime =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.testing.TimeService/GetTime',
      request,
      metadata || {},
      methodInfo_TimeService_GetTime);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.testing.GetTimeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.testing.GetTimeResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.testing.TimeServicePromiseClient.prototype.getTime =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.testing.TimeService/GetTime',
      request,
      metadata || {},
      methodInfo_TimeService_GetTime);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.digitalasset.ledger.api.v1.testing.SetTimeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_TimeService_SetTime = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.com.digitalasset.ledger.api.v1.testing.SetTimeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.testing.SetTimeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.testing.TimeServiceClient.prototype.setTime =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.testing.TimeService/SetTime',
      request,
      metadata || {},
      methodInfo_TimeService_SetTime,
      callback);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.testing.SetTimeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.com.digitalasset.ledger.api.v1.testing.TimeServicePromiseClient.prototype.setTime =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.testing.TimeService/SetTime',
      request,
      metadata || {},
      methodInfo_TimeService_SetTime);
};


module.exports = proto.com.digitalasset.ledger.api.v1.testing;

