/**
 * @fileoverview gRPC-Web generated client stub for com.digitalasset.ledger.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js')

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')
const proto = {};
proto.com = {};
proto.com.digitalasset = {};
proto.com.digitalasset.ledger = {};
proto.com.digitalasset.ledger.api = {};
proto.com.digitalasset.ledger.api.v1 = require('./ledger_configuration_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.digitalasset.ledger.api.v1.LedgerConfigurationServiceClient =
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
proto.com.digitalasset.ledger.api.v1.LedgerConfigurationServicePromiseClient =
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
 *   !proto.com.digitalasset.ledger.api.v1.GetLedgerConfigurationRequest,
 *   !proto.com.digitalasset.ledger.api.v1.GetLedgerConfigurationResponse>}
 */
const methodInfo_LedgerConfigurationService_GetLedgerConfiguration = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.GetLedgerConfigurationResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.GetLedgerConfigurationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.GetLedgerConfigurationResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetLedgerConfigurationRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetLedgerConfigurationResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.LedgerConfigurationServiceClient.prototype.getLedgerConfiguration =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.LedgerConfigurationService/GetLedgerConfiguration',
      request,
      metadata || {},
      methodInfo_LedgerConfigurationService_GetLedgerConfiguration);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetLedgerConfigurationRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetLedgerConfigurationResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.LedgerConfigurationServicePromiseClient.prototype.getLedgerConfiguration =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.LedgerConfigurationService/GetLedgerConfiguration',
      request,
      metadata || {},
      methodInfo_LedgerConfigurationService_GetLedgerConfiguration);
};


module.exports = proto.com.digitalasset.ledger.api.v1;

