import {useEffect} from "react";
import {sendRequest} from "../functions";
import {JokeType} from "../components/main-page";

export function useAddDislike(joke_id: string | undefined, dislike: number, setJoke: Function, joke: JokeType | null) {
    useEffect(() => {
        if (dislike > 0) {
            sendRequest(`https://d5dntuvm58qq5d8kvmk1.apigw.yandexcloud.net/joke/${joke_id}/dislike`, 'POST')
                .then(res => res.json())
                .then(json => {setJoke({...joke, dislikes: json["dislikes"]})})
                .catch(error => {
                    console.log(error);
                })
        }
    }, [dislike]);
}

