import random

import boto3

from models import Joke
from settings import Settings

settings = Settings()


class DBClient:
    def __init__(self):
        self.ydb_client = boto3.resource('dynamodb',
                                         endpoint_url=settings.joke_database_document_api_endpoint,
                                         aws_access_key_id=settings.aws_access_key_id,
                                         aws_secret_access_key=settings.aws_private_key,
                                         region_name=settings.region)

    def init_tables(self):
        try:
            self.ydb_client.create_table(
                TableName='starts',
                KeySchema=[
                    {
                        'AttributeName': 'start_key',
                        'KeyType': 'HASH'
                    },
                ],
                AttributeDefinitions=[
                    {
                        'AttributeName': 'start_key',
                        'AttributeType': 'S'
                    },
                    {
                        'AttributeName': 'count',
                        'AttributeType': 'N'
                    }
                ]
            )
            table = self.ydb_client.Table('starts')
            table.put_item(
                Item={
                    'start_key': '0',
                    'count': 0,
                }
            )

            self.ydb_client.create_table(
                TableName='joke',
                KeySchema=[
                    {
                        'AttributeName': 'joke_id',
                        'KeyType': 'HASH'
                    },
                ],
                AttributeDefinitions=[
                    {
                        'AttributeName': 'joke_id',
                        'AttributeType': 'S'
                    },
                    {
                        'AttributeName': 'title',
                        'AttributeType': 'S'
                    },
                    {
                        'AttributeName': 'body',
                        'AttributeType': 'S'
                    },
                    {
                        'AttributeName': 'likes',
                        'AttributeType': 'N'
                    },
                    {
                        'AttributeName': 'dislikes',
                        'AttributeType': 'N'
                    },
                ]
            )
        except self.ydb_client.meta.client.exceptions.ResourceInUseException:
            print("tables exist")

    def save_joke(self, joke: Joke):
        table = self.ydb_client.Table('joke')
        table.put_item(
            Item={
                'joke_id': joke.joke_id,
                'title': joke.title,
                'body': joke.body,
                'likes': joke.likes,
                'dislikes': joke.dislikes
            }
        )

    def get_start_number(self):
        table = self.ydb_client.Table('starts')
        inc = table.update_item(
            Key={
                'start_key': '0'
            },
            UpdateExpression='ADD count :inc',
            ExpressionAttributeValues={":inc": 1},
            ReturnValues="UPDATED_NEW"
        )
        return inc['Attributes']['count']

    def set_like_or_dislike(self, joke_id: str, tp: str):
        table = self.ydb_client.Table('joke')
        like = table.update_item(
            Key={
                'joke_id': joke_id
            },
            UpdateExpression=f'ADD {tp} :inc',
            ExpressionAttributeValues={":inc": 1},
            ReturnValues="UPDATED_NEW"
        )
        return like['Attributes'][tp]

    def get_random_joke(self):
        table = self.ydb_client.Table('joke')
        response = table.scan()
        data = response['Items']
        while 'LastEvaluatedKey' in response:
            response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
            data.extend(response['Items'])

        data_len = len(data)
        return Joke.parse_obj(data[random.randint(0, data_len - 1)])
