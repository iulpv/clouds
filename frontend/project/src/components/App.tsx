import React, {useState} from 'react';
import './App.css';
import {useGetJoke} from "../hooks/get-joke";
import Joke from "./joke";
import JokeRating from "./joke-rating";
import AddJoke from "./add-joke";
import {useGetInfo} from "../hooks/get-info";
import version from '../../package.json'
export type JokeType = {
  "joke_id": string,
  "title": string,
  "body": string,
  "likes": number,
  "dislikes": number,
}
function App() {
  const [joke, setJoke] = useState<JokeType | null>(null)
  const [isShow, setShow] = useState<boolean>(false)
  const [next, setNext] = useState<number>(0)
  const [render, setRender] = useState<boolean>(false)
  const [info, setInfo] = useState({version: "", replica: ""})
  useGetJoke(setJoke, isShow, next)
  useGetInfo(setInfo, next)
  if (render)
    return <AddJoke/>
  return (
      <>
      <header>
        <h1 className="name">База шуток</h1>
        <p>{`Api version: ${info.version}`}</p>
        <p>{`replica: ${info.replica}`}</p>
        <p>{`Frontend version: ${version.version.toString()}`}</p>
      </header>
    <div className="App">
      <button className="show-joke" onClick={() => {setShow(true); setNext(1)}}>Показать шутку</button>
      <button className="add-joke-button" onClick={() => setRender(true)}>Добавить шутку</button>
      {joke === null && isShow && <div>Загрузка...</div>}
      <p className="joke-title">{joke?.title}</p>
      <Joke joke={joke}/>
      <button className="round-button" onClick={() => {setNext(next + 1)}}>&#8658;</button>
      <JokeRating joke={joke} setJoke={setJoke}/>
    </div>
      </>
  );
}

export default App;
