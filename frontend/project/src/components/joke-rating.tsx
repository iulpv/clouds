import React, {useState} from "react";
import {JokeProps} from "./joke";
import './joke-raiting.css'
import {useAddDislike} from "../hooks/add-dislike";
import {useAddLike} from "../hooks/add-like";
function JokeRating({joke, setJoke} : JokeProps & {setJoke : Function}) {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    useAddDislike(joke?.joke_id, dislike, setJoke, joke)
    useAddLike(joke?.joke_id, like, setJoke, joke)
    return (
        <div className="rating">
            <div className="like">
            <button className="add-like" onClick={() => setLike(like + 1)}>&#9829;</button>
            <div>{joke?.likes}</div>
            </div>
            <div className="dislike">
            <button className="add-dislike" onClick={() => setDislike(dislike + 1)}>&#215;</button>
            <div>{joke?.dislikes}</div>
            </div>
        </div>
    );
}

export default JokeRating;