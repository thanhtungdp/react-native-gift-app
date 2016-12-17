import {GiftApi} from '../../api';
import {AWAIT_MARKER} from 'redux-await';

export const GET_ORDERS = 'ORDERS/get-orders';
export const GET_ORDER = 'ORDERS/get-order';

export function getOrders(...args){
    return {
        type: GET_ORDERS,
        AWAIT_MARKER,
        payload: {
            getOrders: GiftApi.getOrders(...args)
        }
    }
}

export function getOrder(orderId) {
    return {
        type: GET_ORDER,
        AWAIT_MARKER,
        payload: {
            getOrder: GiftApi.getOrder(orderId)
        }
    }
}

export default {getOrders, getOrder}