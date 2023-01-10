import uvicorn
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Joke api"}


@app.get("/joke")
async def get_joke():
    return {}

@app.post("/joke")
async def say_hello(name: str):
    return {}

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)