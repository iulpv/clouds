#!/bin/sh

terraform apply -target=yandex_iam_service_account.joke_service_account
terraform apply -target=yandex_ydb_database_serverless.joke_database
terraform apply -target=yandex_container_registry.default
terraform apply -target=yandex_container_repository.joke_api_repository
terraform apply -target=yandex_iam_service_account_static_access_key.sa_static_key
terraform apply -target=yandex_storage_bucket.joke_website_bucket
yc container registry configure-docker
yc sls container create --name joke-api-container --folder-id ${FOLDER_ID}
echo AWS_PRIVATE_KEY && terraform output -raw AWS_PRIVATE_KEY
