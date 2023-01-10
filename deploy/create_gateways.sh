#!/bin/sh

terraform apply -target=yandex_api_gateway.joke_api_gateway
terraform apply -target=yandex_api_gateway.joke_website_gateway
