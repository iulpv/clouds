import {useEffect} from "react";
import {makeRequest} from "../functions";
import {JokeType} from "../components/App";

export function useAddLike(joke_id: string | undefined, like: number, setJoke: Function, joke: JokeType | null) {
    useEffect(() => {
        if (like > 0) {
            makeRequest(`https://d5dntuvm58qq5d8kvmk1.apigw.yandexcloud.net/joke/${joke_id}/like`, 'POST')
                .then(res => res.json())
                .then(json => {setJoke({...joke, likes: json["likes"]})})
                .catch(error => {
                    console.log(error);
                })
        }
    }, [like]);
}
