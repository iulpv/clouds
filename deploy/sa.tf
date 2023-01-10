locals {
  sa_name = "api-service-account"
}

resource "yandex_iam_service_account" "joke_service_account" {
  name        =  local.sa_name
}

resource "yandex_iam_service_account_static_access_key" "sa_static_key" {
  service_account_id = yandex_iam_service_account.joke_service_account.id
}

output "JOKE_SERVICE_ACCOUNT_ID" {
  value = yandex_iam_service_account.joke_service_account.id
}

output "AWS_ACCESS_KEY_ID" {
  value = yandex_iam_service_account_static_access_key.sa_static_key.access_key
}

output "AWS_PRIVATE_KEY" {
  value = yandex_iam_service_account_static_access_key.sa_static_key.secret_key
  sensitive = true
}