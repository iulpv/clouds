export function sendRequest(path: string, method: string) {

    return fetch(path, {
        method: method,
        headers: {
            'Accept': 'application/json',
        }
    })
        .then(response => {return response})
}