import {postFetch, getFetch, putFetch} from '../utils/fetch';
import {AUTH_API} from '../config';
const url = AUTH_API;

export function getUrl(path) {
    return url + '/auth/' + path;
}

export function authLogin(facebookToken) {
    return postFetch(getUrl(`login`), {social: 'facebook', token: facebookToken});
}

export function getUserMe() {
    return getFetch(getUrl('profile'));
}

export default {
    authLogin,
    getUserMe
}