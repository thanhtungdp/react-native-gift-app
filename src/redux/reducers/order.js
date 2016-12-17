import {GET_ORDERS, GET_ORDER} from '../../redux/actions/orderAction';
import update from 'react/lib/update';

const initialState = {
    lists: {
        data: [],
        pagination: {}
    },
    currentOrder: {
        name: '',
        products: [],
        receiverInfo: {},
        cardInfo: {},
    }
}

export default function createReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
            return getOrders(state, action);
        case GET_ORDER:
            return getOrder(state, action);
        default:
            return state;
    }
}

export function getOrders(state, action) {
    return update(state, {
        lists: {
            data: {
                $set: action.payload.getOrders.data
            },
            pagination: {
                $set: action.payload.getOrders.pagination
            }
        }
    })
}

export function getOrder(state, action) {
    return update(state, {
        currentOrder: {
            $set: action.payload.getOrder
        }
    })
}