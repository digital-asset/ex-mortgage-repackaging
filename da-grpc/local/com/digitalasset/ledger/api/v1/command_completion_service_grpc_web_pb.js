/**
 * @fileoverview gRPC-Web generated client stub for com.digitalasset.ledger.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var com_digitalasset_ledger_api_v1_completion_pb = require('../../../../../com/digitalasset/ledger/api/v1/completion_pb.js')

var com_digitalasset_ledger_api_v1_ledger_offset_pb = require('../../../../../com/digitalasset/ledger/api/v1/ledger_offset_pb.js')

var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.com = {};
proto.com.digitalasset = {};
proto.com.digitalasset.ledger = {};
proto.com.digitalasset.ledger.api = {};
proto.com.digitalasset.ledger.api.v1 = require('./command_completion_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.digitalasset.ledger.api.v1.CommandCompletionServiceClient =
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
proto.com.digitalasset.ledger.api.v1.CommandCompletionServicePromiseClient =
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
 *   !proto.com.digitalasset.ledger.api.v1.CompletionStreamRequest,
 *   !proto.com.digitalasset.ledger.api.v1.CompletionStreamResponse>}
 */
const methodInfo_CommandCompletionService_CompletionStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.CompletionStreamResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.CompletionStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.CompletionStreamResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.CompletionStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.CompletionStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.CommandCompletionServiceClient.prototype.completionStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.CommandCompletionService/CompletionStream',
      request,
      metadata || {},
      methodInfo_CommandCompletionService_CompletionStream);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.CompletionStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.CompletionStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.CommandCompletionServicePromiseClient.prototype.completionStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.CommandCompletionService/CompletionStream',
      request,
      metadata || {},
      methodInfo_CommandCompletionService_CompletionStream);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.digitalasset.ledger.api.v1.CompletionEndRequest,
 *   !proto.com.digitalasset.ledger.api.v1.CompletionEndResponse>}
 */
const methodInfo_CommandCompletionService_CompletionEnd = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.CompletionEndResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.CompletionEndRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.CompletionEndResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.CompletionEndRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.digitalasset.ledger.api.v1.CompletionEndResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.CompletionEndResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.CommandCompletionServiceClient.prototype.completionEnd =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.CommandCompletionService/CompletionEnd',
      request,
      metadata || {},
      methodInfo_CommandCompletionService_CompletionEnd,
      callback);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.CompletionEndRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.digitalasset.ledger.api.v1.CompletionEndResponse>}
 *     A native promise that resolves to the response
 */
proto.com.digitalasset.ledger.api.v1.CommandCompletionServicePromiseClient.prototype.completionEnd =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.CommandCompletionService/CompletionEnd',
      request,
      metadata || {},
      methodInfo_CommandCompletionService_CompletionEnd);
};


module.exports = proto.com.digitalasset.ledger.api.v1;

