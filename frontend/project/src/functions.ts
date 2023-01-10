export function makeRequest(path: string, method: string, body?: BodyInit | null | undefined) {

    return fetch(path, {
        method: method,
        headers: {
            'Accept': 'application/json',
        },
        body: body,
    })
        .then(response => {return response})
}