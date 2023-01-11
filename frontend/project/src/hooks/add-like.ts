import {useEffect} from "react";
import {sendRequest} from "../functions";
import {JokeType, path} from "../components/main-page";

export function useAddLike(joke_id: string | undefined, like: number, setJoke: Function, joke: JokeType | null) {
    useEffect(() => {
        if (like > 0) {
            sendRequest(`${path}/joke/${joke_id}/like`, 'POST')
                .then(res => res.json())
                .then(json => {setJoke({...joke, likes: json["likes"]})})
                .catch(error => {
                    console.log(error);
                })
        }
    }, [like]);
}

