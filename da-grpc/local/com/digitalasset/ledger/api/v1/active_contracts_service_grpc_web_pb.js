/**
 * @fileoverview gRPC-Web generated client stub for com.digitalasset.ledger.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var com_digitalasset_ledger_api_v1_event_pb = require('../../../../../com/digitalasset/ledger/api/v1/event_pb.js')

var com_digitalasset_ledger_api_v1_transaction_filter_pb = require('../../../../../com/digitalasset/ledger/api/v1/transaction_filter_pb.js')

var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js')
const proto = {};
proto.com = {};
proto.com.digitalasset = {};
proto.com.digitalasset.ledger = {};
proto.com.digitalasset.ledger.api = {};
proto.com.digitalasset.ledger.api.v1 = require('./active_contracts_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.digitalasset.ledger.api.v1.ActiveContractsServiceClient =
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
proto.com.digitalasset.ledger.api.v1.ActiveContractsServicePromiseClient =
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
 *   !proto.com.digitalasset.ledger.api.v1.GetActiveContractsRequest,
 *   !proto.com.digitalasset.ledger.api.v1.GetActiveContractsResponse>}
 */
const methodInfo_ActiveContractsService_GetActiveContracts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.GetActiveContractsResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.GetActiveContractsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.GetActiveContractsResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetActiveContractsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetActiveContractsResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.ActiveContractsServiceClient.prototype.getActiveContracts =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.ActiveContractsService/GetActiveContracts',
      request,
      metadata || {},
      methodInfo_ActiveContractsService_GetActiveContracts);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetActiveContractsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetActiveContractsResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.ActiveContractsServicePromiseClient.prototype.getActiveContracts =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.ActiveContractsService/GetActiveContracts',
      request,
      metadata || {},
      methodInfo_ActiveContractsService_GetActiveContracts);
};


module.exports = proto.com.digitalasset.ledger.api.v1;

