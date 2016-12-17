import {AsyncStorage} from 'react-native';

var defaultHeaders = new Headers()
defaultHeaders.append('Content-Type','application/json');

const getHeaders = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('@GiftApp:auth_token').then(token => {
            console.log(token)
            if (token) {
                defaultHeaders.append("Authorization", 'JWT ' + token);
            }
            resolve(defaultHeaders);
        }).catch(() => {
            resolve(defaultHeaders);
        });
    })
}


export function postFetch(url, data, props) {
    return new Promise((resolve, reject) => {
        getHeaders().then(headers => {
            var attributes = {
                headers,
                method: 'POST',
                body: JSON.stringify(data),
                ...props
            }
            resolve(fetch(url, attributes).then(res => res.json()));
        });
    })
}

export function putFetch(url, data, props) {
    return new Promise((resolve, reject) => {
        getHeaders().then(headers => {
            var attributes = {
                headers,
                method: 'PUT',
                body: JSON.stringify(data),
                ...props
            }
            resolve(fetch(url, attributes).then(res => res.json()));
        });
    })
}

export function getFetch(url, data, props) {
    return new Promise((resolve, reject) => {
        console.log(url);
        getHeaders().then(headers => {
            var attributes = {
                ...props,
                method: 'GET',
                headers: headers,
            }
            resolve(fetch(url, attributes).then(data => data.json()))
        });
    })
}

export function deleteFetch(url, data, props) {
    let attributes = Object.assign({
        headers: getHeaders()
    }, props);

    return qwest.delete(url, data, attributes).then((xhr, res) => {
        return new Promise((resolve, reject) => {
            try {
                resolve(res);
            }
            catch (e) {
                reject(e.getMessage());
            }
        });
    });
}