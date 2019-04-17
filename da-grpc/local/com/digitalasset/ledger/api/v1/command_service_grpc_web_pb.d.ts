import * as grpcWeb from 'grpc-web';

import * as com_digitalasset_ledger_api_v1_commands_pb from '../../../../../com/digitalasset/ledger/api/v1/commands_pb';
import * as com_digitalasset_ledger_api_v1_trace_context_pb from '../../../../../com/digitalasset/ledger/api/v1/trace_context_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {SubmitAndWaitRequest} from './command_service_pb';

export class CommandServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  submitAndWait(
    request: SubmitAndWaitRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class CommandServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  submitAndWait(
    request: SubmitAndWaitRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

