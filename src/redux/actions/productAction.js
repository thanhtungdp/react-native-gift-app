import {AWAIT_MARKER} from 'redux-await';
import {GiftApi} from '../../api';

export const GET_PRODUCTS = 'CATEGORY/get-products';
export const GET_CURRENT_PRODUCT = 'CATEGORY/get-current-product';

export function getProducts(){
    return {
        type: GET_PRODUCTS,
        AWAIT_MARKER,
        payload:{
            getProducts: GiftApi.getProducts()
        }
    }
}

export function getCurrentProducts(productId){
    return{
        type: GET_CURRENT_PRODUCT,
        productId
    }
}

export default {
    getProducts,
    getCurrentProducts
}