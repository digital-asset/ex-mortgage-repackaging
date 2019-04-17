```bash
npm install -g grpc-tools
npm install -g ts-protoc-gen
npm install -g grpc-ts-protoc-gen
npm install -g protoc-gen-grpc-web
npm install -g google-protobuf
npm install -g grpc-web

# we need to be in that directory
cd da-grpc

# gen local
grpc_tools_node_protoc \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  --plugin=protoc-gen-grpc-ts=`which protoc-gen-grpc-ts` \
  --plugin=protoc-gen-ts=`which protoc-gen-ts` \
  -I proto \
  --js_out=import_style=commonjs,binary:local \
  --ts_out=local \
  --grpc_out=local \
  --grpc-ts_out=local \
  $(find proto -name "*.proto")

# gen web
grpc_tools_node_protoc \
  --plugin=protoc-gen-grpc-web=`which protoc-gen-grpc-web` \
  -I proto \
  --js_out=import_style=commonjs,binary:local \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:local \
  $(find proto -name "*.proto")

# manualy fix _web.d.ts imports
