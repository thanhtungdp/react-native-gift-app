import {GET_CATEGORIES, GET_CURRENT_CATEGORY} from '../actions/categoryAction';
import update from 'react/lib/update';

const intitalState = {
    lists: {
        data: [],
        pagination: []
    },
    currentCategory: {

    }
}


export default function createReducer(state = intitalState, action){
    switch (action.type){
        case GET_CATEGORIES:
            return getCategories(state, action);
        case GET_CURRENT_CATEGORY:
            return getCurrentCategory(state, action)
        default:
            return state;
    }
}

/**
 * Get categories from payload
 * @param state
 * @param action
 * @returns {*}
 */
export function getCategories(state, action){
    return update(state, {
        lists: {
            $set: action.payload.getCategories
        }
    })
}

/**
 * Get current category to display category product
 * @param state
 * @param action
 * @returns {*}
 */
export function getCurrentCategory(state, action){
    const category = state.lists.data.find((c) => c._id === action.categoryId);
    if(category){
        return update(state, {
            currentCategory: {
                $set: category
            }
        });
    }
    return state;
}