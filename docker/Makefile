.PHONY: build

build:
	[ -d target ] || mkdir target
	cp -r ../scripts scripts
	cp ../target/mortgage-repackaging.dar target/mortgage-repackaging.dar
	docker-compose up -d --build
