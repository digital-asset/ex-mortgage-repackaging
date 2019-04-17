import * as grpcWeb from 'grpc-web';

import * as com_digitalasset_ledger_api_v1_completion_pb from '../../../../../com/digitalasset/ledger/api/v1/completion_pb';
import * as com_digitalasset_ledger_api_v1_ledger_offset_pb from '../../../../../com/digitalasset/ledger/api/v1/ledger_offset_pb';
import * as com_digitalasset_ledger_api_v1_trace_context_pb from '../../../../../com/digitalasset/ledger/api/v1/trace_context_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  CompletionEndRequest,
  CompletionEndResponse,
  CompletionStreamRequest,
  CompletionStreamResponse} from './command_completion_service_pb';

export class CommandCompletionServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  completionStream(
    request: CompletionStreamRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<CompletionStreamResponse>;

  completionEnd(
    request: CompletionEndRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: CompletionEndResponse) => void
  ): grpcWeb.ClientReadableStream<CompletionEndResponse>;

}

export class CommandCompletionServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  completionStream(
    request: CompletionStreamRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<CompletionStreamResponse>;

  completionEnd(
    request: CompletionEndRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<CompletionEndResponse>;

}

