from pydantic import BaseSettings


class Settings(BaseSettings):
    joke_database_document_api_endpoint: str
    region: str = 're-central1'
    aws_access_key_id: str
    aws_private_key: str
