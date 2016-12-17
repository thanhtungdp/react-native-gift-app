import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import WrapContainer from './WrapContainer';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <WrapContainer>
                    {this.props.children}
                </WrapContainer>
            </Provider>
        )
    }
}