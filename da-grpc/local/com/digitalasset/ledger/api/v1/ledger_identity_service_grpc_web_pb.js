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
proto.com.digitalasset.ledger.api.v1 = require('./ledger_identity_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.digitalasset.ledger.api.v1.LedgerIdentityServiceClient =
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
proto.com.digitalasset.ledger.api.v1.LedgerIdentityServicePromiseClient =
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
 *   !proto.com.digitalasset.ledger.api.v1.GetLedgerIdentityRequest,
 *   !proto.com.digitalasset.ledger.api.v1.GetLedgerIdentityResponse>}
 */
const methodInfo_LedgerIdentityService_GetLedgerIdentity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.GetLedgerIdentityResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.GetLedgerIdentityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.GetLedgerIdentityResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetLedgerIdentityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.digitalasset.ledger.api.v1.GetLedgerIdentityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetLedgerIdentityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.LedgerIdentityServiceClient.prototype.getLedgerIdentity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.LedgerIdentityService/GetLedgerIdentity',
      request,
      metadata || {},
      methodInfo_LedgerIdentityService_GetLedgerIdentity,
      callback);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetLedgerIdentityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.digitalasset.ledger.api.v1.GetLedgerIdentityResponse>}
 *     A native promise that resolves to the response
 */
proto.com.digitalasset.ledger.api.v1.LedgerIdentityServicePromiseClient.prototype.getLedgerIdentity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.LedgerIdentityService/GetLedgerIdentity',
      request,
      metadata || {},
      methodInfo_LedgerIdentityService_GetLedgerIdentity);
};


module.exports = proto.com.digitalasset.ledger.api.v1;

