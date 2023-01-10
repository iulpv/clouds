terraform {
  required_providers {
    yandex = {
      source = "yandex-cloud/yandex"
    }
  }
  required_version = ">= 0.13"
}

provider "yandex" {
  zone = "re-central1-a"
  token = local.token
  cloud_id = local.cloud_id
  folder_id = local.folder_id
}

locals {
    token = ""
    cloud_id = ""
    folder_id = ""
}