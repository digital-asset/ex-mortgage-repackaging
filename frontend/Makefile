.PHONY: clean populate start yarn-upgrade

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

build:
	$(MAKE) yarn-upgrade
	yarn run build

clean:
	rm -rf build node_modules

populate: build
	yarn run populate

start: yarn-upgrade
	yarn start

yarn-upgrade: node_modules
	yarn run upgrade

node_modules:
	yarn install
