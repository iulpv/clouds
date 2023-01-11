import {sendRequest} from "../functions";
import {useEffect} from "react";
import {path} from "../components/main-page";

export function useGetJoke(setJoke : Function, isShow : boolean, next : number) {
        useEffect(() => {
            if (next > 0) {
                sendRequest(`${path}/joke`, 'GET')
                    .then(res => res.json())
                    .then(resJSON => {
                        setJoke({
                            "joke_id": resJSON["joke_id"],
                            "title": resJSON["title"],
                            "body": resJSON["body"],
                            "likes": resJSON["likes"],
                            "dislikes": resJSON["dislikes"],
                            "backend_version": resJSON["backend_version"],
                            "start_number": resJSON["start_number"]
                        })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }, [isShow, next]);
}

