import update from 'react/lib/update';
import uuid from 'uuid';
import {
    ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_KEY_INFORMATION_RECEIVE, UPDATE_KEY_PAYMENT_CARD_INFO
} from '../actions/cartAction';

const intialState = {
    products: [
    ],
    receiverInfo: {
        name: 'Phan Thanh Tùng',
        phone: '0165 223 7832',
        address: '78 Trần Văn Kỷ, quận Bình THạnh, TP HCM',
        time: new Date(),
        message: 'Cô từ từ đi tới trước mặt anh, ngẩng đầu cùng với ánh mắt cực kỳ thuần khiết nhìn anh, chân thành mà ẩn hàm xin lỗi. Cô khom lưng thật thấp hướng anh bái một cái, cuối cùng cúi đầu nói: “Thật xin lỗi, em không thể cưới một người đàn ông mà em không yêu.”',
    },
    cardInfo: {
        number: '400700000027',
        expires: '01/2016',
        ccv: '123',
        lastName: 'Tung',
        firstName: 'Phan'
    }
}

export default function createReducer(state = intialState, action){
    switch (action.type){
        case ADD_PRODUCT:
            return addProduct(state, action);
        case REMOVE_PRODUCT:
            return removeProduct(state, action);
        case UPDATE_KEY_INFORMATION_RECEIVE:
            return updateKeyInformationReceive(state, action);
        case UPDATE_KEY_PAYMENT_CARD_INFO:
            return updateKeyPaymentCardInfo(state, action);
        default:
            return state;
    }
}

export function addProduct(state, action){
    return update(state, {
        products: {
            $push: [
                {
                    ...action.product,
                    productCartId: uuid.v4()
                }
            ]
        }
    })
}

export function removeProduct(state, action) {
    const productIndex = state.products.findIndex((p) => p.productCartId === action.productCartId);
    if(productIndex < 0) return state;
    return update(state, {
        products: {
            $splice: [[productIndex, 1]]
        }
    })
}

export function updateKeyInformationReceive(state, action){
    return update(state, {
        receiverInfo: {
            [action.key]: {
                $set: action.value
            }
        }
    })
}

export function updateKeyPaymentCardInfo(state, action){
    return update(state, {
        cardInfo: {
            [action.key]: {
                $set: action.value
            }
        }
    })
}