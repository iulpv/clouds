locals {
  api_gateway_name = "joke-api-gateway"
}

resource "yandex_api_gateway" "joke_api_gateway" {
  name      = local.api_gateway_name
  folder_id = local.folder_id
  spec      = file("../backend/openapi_backend.yaml")
}

output "JOKE_API_GATEWAY_DOMAIN" {
  value = "https://${yandex_api_gateway.joke_api_gateway.domain}"
}