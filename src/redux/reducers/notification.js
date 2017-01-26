import {ADD_NOTIFICATION, REMOVE_NOTIFICATION} from '../actions/notificationAction';
import update from 'react/lib/update';

const intialState = [

];

export default function createReducer(state = intialState, action){
    switch (action.type){
        case ADD_NOTIFICATION:
            return addNotification(state, action);
        case REMOVE_NOTIFICATION:
            return removeNotification(state, action);
        default:
            return state;
    }
}

export function addNotification(state, action){
    console.log(action);
    return update(state, {
        $push: [{
            message: action.message,
            id: action.id,
            intent: action.intent
        }]
    })
}

export function removeNotification(state, action){
    const notificationIndex = state.findIndex(nf => nf.id === action.notificationId);
    if(notificationIndex < 0) return state;
    return update(state, {
        $splice: [[notificationIndex, 1]]
    })
}