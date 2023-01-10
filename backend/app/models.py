from pydantic import BaseModel


class Joke(BaseModel):
    joke_id: str
    title: str
    body: str
    likes: int
    dislikes: int
