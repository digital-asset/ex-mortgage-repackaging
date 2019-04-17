.PHONY: build clean devstart frontend-build grpc-build populate start stop

# linux docker hack: 172.17.0.1 points to localhost from within a container
SANDBOX_HOST ?= '172.17.0.1:7600'
RESTARTER_HOST ?= '172.17.0.1:8888'

REQUIRED_NODE_VERSION = v8.12.0

ifeq (, $(shell which node))
$(error "Node.js cannot be found. Please install version $(REQUIRED_NODE_VERSION)")
endif
ifneq ($(REQUIRED_NODE_VERSION), $(shell node -v))
$(error "Please change Node.js version to $(REQUIRED_NODE_VERSION)")
endif
ifeq (, $(shell which yarn))
$(error "Yarn cannot be found. It can be installed with 'npm install -g yarn'")
endif

build: frontend-build

clean:
	$(MAKE) -C frontend clean
	$(MAKE) -C da-grpc clean

devstart: grpc-build
	$(MAKE) -C frontend start

frontend-build: grpc-build
	$(MAKE) -C frontend build

grpc-build:
	$(MAKE) -C da-grpc build

populate: grpc-build
	$(MAKE) -C frontend populate

start: build
	da compile
	$(MAKE) -C docker build

stop:
	docker-compose -f docker/docker-compose.yml down 
