#!/bin/sh
set -e # Stop script from running if there are any errors

docker push ${IMAGE}:${GIT_VERSION}

ssh root@138.197.195.221 \ 'source ~/.zshrc; cd scripts; bash nearvice-api-deploy.sh'