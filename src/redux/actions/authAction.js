import {AsyncStorage} from 'react-native';
import {AWAIT_MARKER} from 'redux-await';
import {AuthApi} from '../../api';

export const AUTH_SET_AUTHENTICATION = 'AUTH/set-authentication';
export const AUTH_GET_USER_FROM_TOKEN = 'AUTH/get-user-from-token';
export const AUTH_LOGOUT = 'AUTH/logout';

export function authUpdateToken(token, user = {}) {
    return dispatch => {
        AsyncStorage.setItem('@GiftApp:auth_token', token);
        dispatch({
            type: AUTH_SET_AUTHENTICATION,
            token,
            user
        });
    }
}

export function authGetMe(){
    return {
        type: AUTH_GET_USER_FROM_TOKEN,
        AWAIT_MARKER,
        payload: {
            getUserFromToken: AuthApi.getUserMe()
        }
    }
}

export function authLogout() {
    return dispatch => {
        AsyncStorage.removeItem('@GiftApp:auth_token');
        dispatch({
            type: AUTH_LOGOUT
        })
    }
}

export default {
    authUpdateToken, authGetMe, authLogout
}