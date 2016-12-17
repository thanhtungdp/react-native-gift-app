import {AWAIT_MARKER} from 'redux-await';
import {GiftApi} from '../../api';

export const GET_CATEGORIES = 'CATEGORY/get-categories';
export const GET_CURRENT_CATEGORY = 'CATEGORY/get-current-category';

export function getCategories(){
    return {
        type: GET_CATEGORIES,
        AWAIT_MARKER,
        payload:{
            getCategories: GiftApi.getCategories()
        }
    }
}

export function getCurrentCategory(categoryId){
    return{
        type: GET_CURRENT_CATEGORY,
        categoryId
    }
}

export default {
    getCategories,
    getCurrentCategory
}