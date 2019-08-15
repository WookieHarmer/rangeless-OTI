#!/usr/bin/env bash

set -euf -o pipefail
command -v sed || { echo >&2 "Command 'sed' not found -> please install it"; exit 1; }

readonly DOCKER_ORG="ravenops"
readonly DOCKER_REPO="dlvc-ci"
readonly DOCKER_IMAGE_BASE="ubuntu19.04-go1.11.5"

source docker-build-common.sh
readonly DOCKER_FULL_TAG_REGEX="s;(image: )$DOCKER_FULL_TAG_PREFIX:[a-zA-Z0-9.-]+-[a-zA-Z0-9-]+;\1$DOCKER_FULL_TAG;"
readonly DOCKER_WORKFLOW_FULL_TAG_REGEX="s#(uses: docker:\/\/)$DOCKER_FULL_TAG_PREFIX:[a-zA-Z0-9.-]+-[a-zA-Z0-9-]+#\1$DOCKER_FULL_TAG#"

docker build -t "$DOCKER_FULL_TAG" .

for f in docker-compose.yml docker-compose.test.yml .github/workflows/ci_pull_request.yml; do
    echo "Replacing pinned tag in: ${f}"
    if echo $f | grep "workflows"; then
      sed -i.bak -E "$DOCKER_WORKFLOW_FULL_TAG_REGEX" $f
    else
      sed -i.bak -E "$DOCKER_FULL_TAG_REGEX" $f
    fi
    rm ${f}.bak
done

echo "To push to Docker Hub, run: docker push $DOCKER_FULL_TAG"
