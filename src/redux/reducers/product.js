import {GET_PRODUCTS, GET_CURRENT_PRODUCT} from '../actions/productAction';
import update from 'react/lib/update';

const intitalState = {
    lists: {
        data: [],
        pagination: []
    },
    currentProduct: {}
}

export default function createReducer(state = intitalState, action){
    switch (action.type){
        case GET_PRODUCTS:
            return getProducts(state, action);
        case GET_CURRENT_PRODUCT:
            return getCurrentProduct(state, action)
        default:
            return state;
    }
}

export function getProducts(state, action){
    return update(state, {
        lists: {
            $set: action.payload.getProducts
        }
    })
}

export function getCurrentProduct(state, action){
    const product = state.lists.data.find((c) => c._id === action.productId);
    if(product){
        return update(state, {
            currentProduct: {
                $set: product
            }
        });
    }
    return state;
}