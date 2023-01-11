import {sendRequest} from "../functions";
import {useEffect} from "react";
import {UserJoke} from "../components/add-joke";

export function usePostJoke(joke : UserJoke, send : boolean) {
    useEffect(() => {
        if (send && joke.body.length > 0 && joke.title.length > 0) {
            sendRequest(`https://d5dntuvm58qq5d8kvmk1.apigw.yandexcloud.net/joke?title=${joke.title}&body=${joke.body}`, 'POST')
                .then(res => res.json())
                .catch(error => {
                    console.log(error);
                })
        }
    }, [send]);
}

