#!/bin/sh
set -e # Stop script from running if there are any errors

IMAGE="codenity/nearvice-app"                             # Docker image

# Build and tag image
docker build -t ${IMAGE}:dev .
docker tag ${IMAGE}:dev ${IMAGE}:latest