#!/bin/sh
set -e # Stop script from running if there are any errors

IMAGE="codenity/nearvice-app"                             # Docker image

docker push ${IMAGE}:dev

ssh -o StrictHostKeyChecking=no root@138.197.195.221 \ 'source ~/.zshrc; cd scripts; bash nearvice-api-deploy.sh'