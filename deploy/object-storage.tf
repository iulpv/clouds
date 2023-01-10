locals {
  website_bucket_name = "joke-website"
}

resource "yandex_storage_bucket" "joke_website_bucket" {
  bucket     = local.website_bucket_name
  access_key = yandex_iam_service_account_static_access_key.sa_static_key.access_key
  secret_key = yandex_iam_service_account_static_access_key.sa_static_key.secret_key
}

output "JOKE_WEBSITE_BUCKET" {
  value = yandex_storage_bucket.joke_website_bucket.bucket
}