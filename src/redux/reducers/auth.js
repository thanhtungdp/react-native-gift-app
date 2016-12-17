import {AsyncStorage} from 'react-native';
import {
    AUTH_SET_AUTHENTICATION,AUTH_GET_USER_FROM_TOKEN, AUTH_LOGOUT
} from '../actions/authAction';

const getInitialState = () => {
    return {
        token: '',
        user: {}
    }
}

export default function createReducer(state = getInitialState(), action) {
    switch (action.type) {
        case AUTH_SET_AUTHENTICATION:
            return {
                ...state,
                token: action.token,
                user: {
                    ...state.user,
                    ...action.user
                }
            }
        case AUTH_GET_USER_FROM_TOKEN:
            return {
                ...state,
                token: action.payload.getUserFromToken.token,
                user: {
                    ...state.user,
                    ...action.payload.getUserFromToken
                }
            }
        case AUTH_LOGOUT:
            return getInitialState();
        default:
            return state;
    }
}