import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reducer as awaitReducer} from 'redux-await';
import auth from './auth';
import defaultLoad from './defaultLoad';
import category from './category';
import product from './product';
import cart from './cart';
import order from './order';
import notification from './notification';

export default combineReducers({
    form: formReducer,
    await: awaitReducer,
    defaultLoad,
    auth,
    category,
    product,
    cart,
    order,
    notification
})