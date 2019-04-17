/**
 * @fileoverview gRPC-Web generated client stub for com.digitalasset.ledger.api.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var com_digitalasset_ledger_api_v1_ledger_offset_pb = require('../../../../../com/digitalasset/ledger/api/v1/ledger_offset_pb.js')

var com_digitalasset_ledger_api_v1_transaction_filter_pb = require('../../../../../com/digitalasset/ledger/api/v1/transaction_filter_pb.js')

var com_digitalasset_ledger_api_v1_transaction_pb = require('../../../../../com/digitalasset/ledger/api/v1/transaction_pb.js')

var com_digitalasset_ledger_api_v1_trace_context_pb = require('../../../../../com/digitalasset/ledger/api/v1/trace_context_pb.js')
const proto = {};
proto.com = {};
proto.com.digitalasset = {};
proto.com.digitalasset.ledger = {};
proto.com.digitalasset.ledger.api = {};
proto.com.digitalasset.ledger.api.v1 = require('./transaction_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.digitalasset.ledger.api.v1.TransactionServiceClient =
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
proto.com.digitalasset.ledger.api.v1.TransactionServicePromiseClient =
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
 *   !proto.com.digitalasset.ledger.api.v1.GetTransactionsRequest,
 *   !proto.com.digitalasset.ledger.api.v1.GetTransactionsResponse>}
 */
const methodInfo_TransactionService_GetTransactions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.GetTransactionsResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.GetTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.GetTransactionsResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetTransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetTransactionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.TransactionServiceClient.prototype.getTransactions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.TransactionService/GetTransactions',
      request,
      metadata || {},
      methodInfo_TransactionService_GetTransactions);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetTransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetTransactionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.TransactionServicePromiseClient.prototype.getTransactions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.TransactionService/GetTransactions',
      request,
      metadata || {},
      methodInfo_TransactionService_GetTransactions);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.digitalasset.ledger.api.v1.GetTransactionsRequest,
 *   !proto.com.digitalasset.ledger.api.v1.GetTransactionTreesResponse>}
 */
const methodInfo_TransactionService_GetTransactionTrees = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.GetTransactionTreesResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.GetTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.GetTransactionTreesResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetTransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetTransactionTreesResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.TransactionServiceClient.prototype.getTransactionTrees =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.TransactionService/GetTransactionTrees',
      request,
      metadata || {},
      methodInfo_TransactionService_GetTransactionTrees);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetTransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetTransactionTreesResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.TransactionServicePromiseClient.prototype.getTransactionTrees =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.TransactionService/GetTransactionTrees',
      request,
      metadata || {},
      methodInfo_TransactionService_GetTransactionTrees);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.digitalasset.ledger.api.v1.GetTransactionByEventIdRequest,
 *   !proto.com.digitalasset.ledger.api.v1.GetTransactionResponse>}
 */
const methodInfo_TransactionService_GetTransactionByEventId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.GetTransactionResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.GetTransactionByEventIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.GetTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetTransactionByEventIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.digitalasset.ledger.api.v1.GetTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.TransactionServiceClient.prototype.getTransactionByEventId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.TransactionService/GetTransactionByEventId',
      request,
      metadata || {},
      methodInfo_TransactionService_GetTransactionByEventId,
      callback);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetTransactionByEventIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.digitalasset.ledger.api.v1.GetTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.com.digitalasset.ledger.api.v1.TransactionServicePromiseClient.prototype.getTransactionByEventId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.TransactionService/GetTransactionByEventId',
      request,
      metadata || {},
      methodInfo_TransactionService_GetTransactionByEventId);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.digitalasset.ledger.api.v1.GetTransactionByIdRequest,
 *   !proto.com.digitalasset.ledger.api.v1.GetTransactionResponse>}
 */
const methodInfo_TransactionService_GetTransactionById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.GetTransactionResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.GetTransactionByIdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.GetTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetTransactionByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.digitalasset.ledger.api.v1.GetTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.TransactionServiceClient.prototype.getTransactionById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.TransactionService/GetTransactionById',
      request,
      metadata || {},
      methodInfo_TransactionService_GetTransactionById,
      callback);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetTransactionByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.digitalasset.ledger.api.v1.GetTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.com.digitalasset.ledger.api.v1.TransactionServicePromiseClient.prototype.getTransactionById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.TransactionService/GetTransactionById',
      request,
      metadata || {},
      methodInfo_TransactionService_GetTransactionById);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.digitalasset.ledger.api.v1.GetLedgerEndRequest,
 *   !proto.com.digitalasset.ledger.api.v1.GetLedgerEndResponse>}
 */
const methodInfo_TransactionService_GetLedgerEnd = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.digitalasset.ledger.api.v1.GetLedgerEndResponse,
  /** @param {!proto.com.digitalasset.ledger.api.v1.GetLedgerEndRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.digitalasset.ledger.api.v1.GetLedgerEndResponse.deserializeBinary
);


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetLedgerEndRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.digitalasset.ledger.api.v1.GetLedgerEndResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.digitalasset.ledger.api.v1.GetLedgerEndResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.digitalasset.ledger.api.v1.TransactionServiceClient.prototype.getLedgerEnd =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.TransactionService/GetLedgerEnd',
      request,
      metadata || {},
      methodInfo_TransactionService_GetLedgerEnd,
      callback);
};


/**
 * @param {!proto.com.digitalasset.ledger.api.v1.GetLedgerEndRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.digitalasset.ledger.api.v1.GetLedgerEndResponse>}
 *     A native promise that resolves to the response
 */
proto.com.digitalasset.ledger.api.v1.TransactionServicePromiseClient.prototype.getLedgerEnd =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.digitalasset.ledger.api.v1.TransactionService/GetLedgerEnd',
      request,
      metadata || {},
      methodInfo_TransactionService_GetLedgerEnd);
};


module.exports = proto.com.digitalasset.ledger.api.v1;

