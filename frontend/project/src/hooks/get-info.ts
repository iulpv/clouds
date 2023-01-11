import {useEffect} from "react";
import {sendRequest} from "../functions";
import {path} from "../components/main-page";


export function useGetInfo(setInfo : Function, next : number) {
    useEffect(() => {
            sendRequest(`${path}/info`, 'GET')
                .then(res => res.json())
                .then(json => {
                    setInfo({version: json["backend_version"], replica: json["start_number"]})
                })
                .catch(error => {
                    console.log(error);
                })
        }, [next]);
}