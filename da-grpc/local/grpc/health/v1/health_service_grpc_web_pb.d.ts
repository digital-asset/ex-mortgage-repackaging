import * as grpcWeb from 'grpc-web';

import {
  HealthCheckRequest,
  HealthCheckResponse} from './health_service_pb';

export class HealthClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  check(
    request: HealthCheckRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: HealthCheckResponse) => void
  ): grpcWeb.ClientReadableStream<HealthCheckResponse>;

}

export class HealthPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  check(
    request: HealthCheckRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<HealthCheckResponse>;

}

