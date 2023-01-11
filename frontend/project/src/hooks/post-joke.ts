import {sendRequest} from "../functions";
import {useEffect} from "react";
import {UserJoke} from "../components/add-joke";
import {path} from "../components/main-page";

export function usePostJoke(joke : UserJoke, send : boolean) {
    useEffect(() => {
        if (send && joke.body.length > 0 && joke.title.length > 0) {
            sendRequest(`${path}/joke?title=${joke.title}&body=${joke.body}`, 'POST')
                .then(res => res.json())
                .catch(error => {
                    console.log(error);
                })
        }
    }, [send]);
}

