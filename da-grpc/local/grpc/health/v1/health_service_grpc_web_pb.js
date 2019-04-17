/**
 * @fileoverview gRPC-Web generated client stub for grpc.health.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.grpc = {};
proto.grpc.health = {};
proto.grpc.health.v1 = require('./health_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc.health.v1.HealthClient =
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
proto.grpc.health.v1.HealthPromiseClient =
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
 *   !proto.grpc.health.v1.HealthCheckRequest,
 *   !proto.grpc.health.v1.HealthCheckResponse>}
 */
const methodInfo_Health_Check = new grpc.web.AbstractClientBase.MethodInfo(
  proto.grpc.health.v1.HealthCheckResponse,
  /** @param {!proto.grpc.health.v1.HealthCheckRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc.health.v1.HealthCheckResponse.deserializeBinary
);


/**
 * @param {!proto.grpc.health.v1.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.grpc.health.v1.HealthCheckResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc.health.v1.HealthCheckResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc.health.v1.HealthClient.prototype.check =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc.health.v1.Health/Check',
      request,
      metadata || {},
      methodInfo_Health_Check,
      callback);
};


/**
 * @param {!proto.grpc.health.v1.HealthCheckRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc.health.v1.HealthCheckResponse>}
 *     A native promise that resolves to the response
 */
proto.grpc.health.v1.HealthPromiseClient.prototype.check =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc.health.v1.Health/Check',
      request,
      metadata || {},
      methodInfo_Health_Check);
};


module.exports = proto.grpc.health.v1;

