#!/usr/bin/env bash

command -v git || { echo >&2 "Command 'git' not found -> please install it"; exit 1; }
command -v docker || { echo >&2 "Command 'docker' not found -> please install it"; exit 1; }

BUILD_GIT_DIRTY=""

if [[ -z "$(git status --porcelain)" ]]; then
  # OK to continue as-is
  true
else
  echo "WARNING: The repository directory is not clean:"
  git status
  BUILD_GIT_DIRTY="-dirty"
fi

readonly BUILD_DATE="$(date -u +"%Y%m%dT%H%M%SZ")"
readonly BUILD_GIT_COMMIT="$(git rev-parse --short HEAD)"
readonly BUILD_VER="$BUILD_DATE-$BUILD_GIT_COMMIT$BUILD_GIT_DIRTY"

readonly DOCKER_FULL_TAG_PREFIX="$DOCKER_ORG/$DOCKER_REPO"
readonly DOCKER_FULL_TAG="$DOCKER_FULL_TAG_PREFIX:$DOCKER_IMAGE_BASE-$BUILD_VER"