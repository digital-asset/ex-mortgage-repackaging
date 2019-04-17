import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  GetTimeRequest,
  GetTimeResponse,
  SetTimeRequest} from './time_service_pb';

export class TimeServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getTime(
    request: GetTimeRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GetTimeResponse>;

  setTime(
    request: SetTimeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class TimeServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getTime(
    request: GetTimeRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<GetTimeResponse>;

  setTime(
    request: SetTimeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

