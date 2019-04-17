// package: com.digitalasset.ledger.api.v1
// file: com/digitalasset/ledger/api/v1/command_completion_service.proto

import * as GRPC from "grpc";
import * as com_digitalasset_ledger_api_v1_command_completion_service_pb from "../../../../../com/digitalasset/ledger/api/v1/command_completion_service_pb";

export = CommandCompletionService;
declare namespace CommandCompletionService {
  class CommandCompletionServiceClient extends GRPC.Client {
    completionStream(request: com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamRequest, metadata: GRPC.Metadata, options: Partial<GRPC.CallOptions>): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamResponse>;
    completionStream(request: com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamRequest, options: Partial<GRPC.CallOptions>): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamResponse>;
    completionStream(request: com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamRequest, metadata: GRPC.Metadata ): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamResponse>;
    completionStream(request: com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamRequest): GRPC.ClientReadableStream<com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamResponse>;
    completionEnd(request: com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndRequest, options: Partial<GRPC.CallOptions>, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndResponse>): GRPC.ClientUnaryCall;
    completionEnd(request: com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndRequest, options: Partial<GRPC.CallOptions>, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndResponse>): GRPC.ClientUnaryCall;
    completionEnd(request: com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndRequest, metadata: GRPC.Metadata, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndResponse>): GRPC.ClientUnaryCall;
    completionEnd(request: com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndRequest, callback: GRPC.requestCallback<com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndResponse>): GRPC.ClientUnaryCall;
  }

  namespace MethodImplTypes {
    type completionStream = GRPC.handleServerStreamingCall<com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamRequest, com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamResponse>;
    type completionEnd = GRPC.handleUnaryCall<com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndRequest, com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndResponse>;
  }
  interface MethodImpls {
    completionStream: MethodImplTypes.completionStream;
    completionEnd: MethodImplTypes.completionEnd;
  }
  interface CommandCompletionServiceService extends GRPC.ServiceDefinition<MethodImpls> {
    completionStream: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamRequest, com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionStreamResponse>;
    completionEnd: GRPC.MethodDefinition<com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndRequest, com_digitalasset_ledger_api_v1_command_completion_service_pb.CompletionEndResponse>;
  }

}
