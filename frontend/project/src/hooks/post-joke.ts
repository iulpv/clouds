import {makeRequest} from "../functions";
import {useEffect} from "react";
import {UserJoke} from "../components/add-joke";

export function usePostJoke(body : UserJoke, send : boolean) {
    useEffect(() => {
        if (send) {
            makeRequest(`https://d5dntuvm58qq5d8kvmk1.apigw.yandexcloud.net/joke?title=${body.title}&body=${body.body}`, 'POST')
                .then(res => res.json())
                .then(resJSON => {
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [send]);
}

