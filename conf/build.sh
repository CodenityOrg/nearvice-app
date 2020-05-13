#!/bin/sh
set -e # Stop script from running if there are any errors

IMAGE="codenity/nearvice-app"                             # Docker image
GIT_VERSION=$(git rev-parse --abbrev-ref HEAD) # Git hash and tags

# Build and tag image
docker build -t ${IMAGE}:${GIT_VERSION} .
docker tag ${IMAGE}:${GIT_VERSION} ${IMAGE}:latest