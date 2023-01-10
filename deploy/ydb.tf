locals {
  database_name = "joke-database"
}

resource "yandex_ydb_database_serverless" "joke_database" {
  name      = local.database_name
  folder_id = local.folder_id
}

output "JOKE_DATABASE_DOCUMENT_API_ENDPOINT" {
  value = yandex_ydb_database_serverless.joke_database.document_api_endpoint
}

output "JOKE_DATABASE_PATH" {
  value = yandex_ydb_database_serverless.joke_database.database_path
}