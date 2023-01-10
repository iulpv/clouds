from pydantic import BaseModel


class UserJoke(BaseModel):
    title: str
    body: str


class Joke(BaseModel):
    joke_id: str
    title: str
    body: str
    likes: int
    dislikes: int
