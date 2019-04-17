.PHONY: build clean

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

build: .build.timestamp

# Run only if any source files changed
.build.timestamp: node_modules
	yarn run build
	@touch .build.timestamp

clean:
	rm -rf .build.timestamp dist node_modules

node_modules:
	yarn install
