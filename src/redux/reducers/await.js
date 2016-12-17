import {reducer as awaitReducer} from 'redux-await';
import {AWAIT_RESET} from '../actions/awaitAction';

export default function await(state = {statuses: [], errors: []}, action) {
    const {statuses, errors} = awaitReducer(state, action);
    if (action.type === AWAIT_RESET) {
        action.items.forEach(item => {
            statuses[item] = null;
            errors[item] = null;
        })
    }
    return {statuses, errors};
}