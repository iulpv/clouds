#!/bin/sh

version=$(cat version.txt | awk -F. -v OFS=. '{$NF += 1 ; print}')
echo $version > version.txt

docker buildx build --platform linux/amd64 -f ./Dockerfile -t ${JOKE_API_REPOSITORY_NAME}:${version} .
docker push ${JOKE_API_REPOSITORY_NAME}:${version}

yc sls container revisions deploy \
  --folder-id ${FOLDER_ID} \
  --container-id ${JOKE_API_CONTAINER_ID} \
  --memory 512M \
  --cores 1 \
  --execution-timeout 5s \
  --concurrency 4 \
  --environment AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID},AWS_PRIVATE_KEY=${AWS_SECRET_ACCESS_KEY},JOKE_DATABASE_DOCUMENT_API_ENDPOINT=${JOKE_DATABASE_DOCUMENT_API_ENDPOINT},VERSION=${version} \
  --service-account-id ${JOKE_SERVICE_ACCOUNT_ID} \
  --image ${JOKE_API_REPOSITORY_NAME}:${version}
