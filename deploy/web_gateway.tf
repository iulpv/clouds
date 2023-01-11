locals {
  website_gateway_name = "joke-website-gateway"
}

resource "yandex_api_gateway" "joke_website_gateway" {
  name      = local.website_gateway_name
  folder_id = local.folder_id
  spec      = file("../frontend/openapi_web.yaml")
}

output "JOKE_WEBSITE_GATEWAY_DOMAIN" {
  value = "https://${yandex_api_gateway.joke_website_gateway.domain}"
}