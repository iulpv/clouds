import {useEffect} from "react";
import {sendRequest} from "../functions";


export function useGetInfo(setInfo : Function, next : number) {
    useEffect(() => {
            sendRequest(`https://d5dntuvm58qq5d8kvmk1.apigw.yandexcloud.net/info`, 'GET')
                .then(res => res.json())
                .then(json => {
                    setInfo({version: json["backend_version"], replica: json["start_number"]})
                })
                .catch(error => {
                    console.log(error);
                })
        }, [next]);
}