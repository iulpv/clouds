import React, {useState} from "react";
import './add-joke.css'
import {usePostJoke} from "../hooks/post-joke";
import App from "./App";


export type UserJoke = {
    title : string,
    body : string
}

function AddJoke() {

    const [data, setData] = useState<UserJoke>({title: "", body: ""})
    const [send, setSend] = useState<boolean>(false)
    usePostJoke(data, send)
    if (send)
        return <App/>
    return (
        <form className="add-joke" onSubmit={(event) => {event.preventDefault(); setSend(!send)}}>
            <label>
                Название
           <input className="title" type="text" lang="ru" onChange={(event) => setData({...data, title: event.target.value.toString()})}/></label>
            <label>
                Шутка
            <input className="body-joke" type="text" onChange={(event) => setData({...data, body: event.target.value.toString()})}></input>
        </label>
            <input type="submit"/>
        </form>
    );
}

export default AddJoke;