import {createStore, applyMiddleware, compose} from 'redux';
import {middleware as awaitMiddleware} from 'redux-await';
import thunkMiddleware from 'redux-thunk';
import rootReducers from '../reducers/index';

export default function configureStore(initialState) {
    var store = createStore(
        rootReducers,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware, awaitMiddleware),
            global.reduxNativeDevTools ? global.reduxNativeDevTools(/*options*/) : nope => nope
        )
    );
    if (global.reduxNativeDevTools) {
        global.reduxNativeDevTools.updateStore(store);
    }
    return store;
}