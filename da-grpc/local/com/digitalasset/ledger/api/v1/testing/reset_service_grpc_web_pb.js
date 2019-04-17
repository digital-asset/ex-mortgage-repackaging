/**
 * @fileoverview gRPC-Web generated client stub for com.digitalasset.ledger.api.v1.testing
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.com = {};
proto.com.digitalasset = {};
proto.com.digitalasset.ledger = {};
proto.com.digitalasset.ledger.api = {};
proto.com.digitalasset.ledger.api.v1 = {};
proto.com.digitalasset.ledger.api.v1.testing = require('./reset_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.digitalasset.ledger.api.v1.testing.ResetServiceClient =
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
proto.com.digitalasset.ledger.api.v1.testing.ResetServicePromiseClient =
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
 *   !proto.com.digitalasset.ledger.api.v1.testing.ResetRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ResetService_Reset = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.com.digitalasset.ledger.api.v1.testing.ResetRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.testing.ResetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.testing.ResetServiceClient.prototype.reset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.testing.ResetService/Reset',
      request,
      metadata || {},
      methodInfo_ResetService_Reset,
      callback);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.testing.ResetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.com.digitalasset.ledger.api.v1.testing.ResetServicePromiseClient.prototype.reset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.testing.ResetService/Reset',
      request,
      metadata || {},
      methodInfo_ResetService_Reset);
};


module.exports = proto.com.digitalasset.ledger.api.v1.testing;

