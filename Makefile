# docker-local-build - Locally build the required Dockerfile and tag it + update the pinned versions in config files
# REQUIRES - Docker + Docker Compose (both come with Docker for Mac)
# Useful if changes are needed in the base image to test CircleCI
.PHONY: docker-local-build
docker-local-build:
	./docker-local-build.sh

# test-clean-docker - take down all test docker-compose containers + volumes to ensure a fully-clean slate
.PHONY: test-clean-docker
test-clean-docker:
	docker-compose -f docker-compose.test.yml down -v

# test-shell - start an interactive shell using `docker-compose` with the same environment as `make test`
# REQUIRES - Docker + Docker Compose (both come with Docker for Mac)
.PHONY: test-shell
test-shell:
	docker-compose -f docker-compose.yml run shell bash

# test - run all tests locally using `docker-compose`
.PHONY: test
test: test-go test-python test-java
# Purposefully left empty, will run all tests

# test-go - run all go tests locally using `docker-compose`
# REQUIRES - Docker + Docker Compose (both come with Docker for Mac)
.PHONY: test-go
test-go: test-clean-docker
	docker-compose -f docker-compose.test.yml up --build --abort-on-container-exit --exit-code-from test-go test-go

# test-python - run all python tests locally using `docker-compose`
.PHONY: test-python
test-python: test-clean-docker
	docker-compose -f docker-compose.test.yml up --build --abort-on-container-exit --exit-code-from test-python test-python

# test-java - run all java tests locally using `docker-compose`
.PHONY: test-java
test-java: test-clean-docker
	docker-compose -f docker-compose.test.yml up --build --abort-on-container-exit --exit-code-from test-java test-java