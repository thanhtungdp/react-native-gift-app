import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import {BackgroundWrapper} from './components';
// import {
//     Launch, CategoryLists, CategoryProducts, ProductView,
//     ReceiverInfo, ReceiverMessage,
//     SummaryInfo, SummaryCart,
//     Checkout, CheckoutSuccess,
//     OrderLists, OrderView
// } from './containers';
import { Font } from 'exponent';

export default class App extends Component {
    render() {
        return <View>
            <Text>Hello man</Text>
        </View>
    }
}
App.propTypes = {}