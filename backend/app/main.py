import uvicorn
from fastapi import FastAPI

from app.db_client import DBClient
from app.models import Joke
from app.settings import Settings

settings = Settings()
app = FastAPI()
db_client = DBClient()


@app.get("/")
async def root():
    return {"message": "Joke api"}


@app.get("/joke")
async def get_joke():
    joke = db_client.get_random_joke()
    return {'joke_id': joke.joke_id,
            'title': joke.title,
            'body': joke.body,
            'likes': joke.likes,
            'dislikes': joke.dislikes,
            'backend_version': settings.version,
            'start_number': db_client.get_start_number()}


@app.post("/joke/{joke_id}/like")
async def set_like_joke(joke_id: str):
    likes = db_client.set_like_or_dislike(joke_id, 'likes')
    return {'likes': likes}


@app.post("/joke/{joke_id}/dislike")
async def set_dislike_joke(joke_id: str):
    dislikes = db_client.set_like_or_dislike(joke_id, 'dislikes')
    return {'dislikes': dislikes}


@app.post("/joke")
async def post_joke(joke: Joke):
    db_client.save_joke(joke)
    return {'joke_id': joke.joke_id,
            'title': joke.title,
            'body': joke.body,
            'likes': joke.likes,
            'dislikes': joke.dislikes,
            'backend_version': settings.version,
            'start_number': db_client.get_start_number()}


if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
