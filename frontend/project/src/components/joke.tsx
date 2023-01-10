import React from "react";
import './joke.css'
import {JokeType} from "./App";

export type JokeProps = {
    joke : JokeType | null
}
function Joke({joke} : JokeProps) {
    return (
        <div className="Joke">
            <div className="body">{joke?.body}</div>
        </div>
    );
}

export default Joke;