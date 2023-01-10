from pydantic import BaseSettings


class Settings(BaseSettings):
    version: str = '0'
    joke_database_document_api_endpoint: str
    region: str = 're-central1'
    aws_access_key_id: str
    aws_private_key: str
