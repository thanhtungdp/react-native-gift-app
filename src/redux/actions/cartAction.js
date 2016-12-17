export const ADD_PRODUCT = 'CART/add-product';
export const REMOVE_PRODUCT = 'CART/remove-product';
export const UPDATE_KEY_INFORMATION_RECEIVE = 'CART/update-key-information-receive';
export const UPDATE_KEY_PAYMENT_CARD_INFO = 'CART/update-key-payment-info';

export function addProduct(product){
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function removeProduct(productCartId){
    return {
        type: REMOVE_PRODUCT,
        productCartId
    }
}

export function updateKeyInformationReceive(key, value){
    return {
        type: UPDATE_KEY_INFORMATION_RECEIVE,
        key,
        value
    }
}

export function updateKeyPaymentCardInfo(key, value){
    return {
        type: UPDATE_KEY_PAYMENT_CARD_INFO,
        key,
        value
    }
}

export default {
    addProduct,
    removeProduct,
    updateKeyInformationReceive,
    updateKeyPaymentCardInfo
}