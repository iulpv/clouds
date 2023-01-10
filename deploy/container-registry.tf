resource "yandex_container_registry" "default" {
  name      = "default"
  folder_id = local.folder_id
}

resource "yandex_container_repository" "joke_api_repository" {
  name = "${yandex_container_registry.default.id}/joke-api"
}

output "JOKE_API_REPOSITORY_NAME" {
  value = "cr.yandex/${yandex_container_repository.joke_api_repository.name}"
}