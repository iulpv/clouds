import {useEffect} from "react";
import {sendRequest} from "../functions";
import {JokeType, path} from "../components/main-page";

export function useAddDislike(joke_id: string | undefined, dislike: number, setJoke: Function, joke: JokeType | null) {
    useEffect(() => {
        if (dislike > 0) {
            sendRequest(`${path}/joke/${joke_id}/dislike`, 'POST')
                .then(res => res.json())
                .then(json => {setJoke({...joke, dislikes: json["dislikes"]})})
                .catch(error => {
                    console.log(error);
                })
        }
    }, [dislike]);
}

