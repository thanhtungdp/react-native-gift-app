import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {
    Launch, CategoryLists, CategoryProducts, ProductView,
    ReceiverInfo, ReceiverMessage,
    SummaryInfo, SummaryCart,
    Checkout, CheckoutSuccess,
    OrderLists, OrderView
} from './containers';

export default class App extends Component {
    render() {
        return <Router>
            <Scene key="launch" initial component={Launch} hideNavBar/>
            <Scene key="categoryLists" component={CategoryLists} hideNavBar/>
            <Scene key="categoryProducts" duration={300} component={CategoryProducts} hideNavBar/>
            <Scene key="productView" component={ProductView} hideNavBar/>
            <Scene key="receiverInfo"  component={ReceiverInfo} hideNavBar/>
            <Scene key="receiverMessage" component={ReceiverMessage} hideNavBar/>
            <Scene key="summaryInfo" component={SummaryInfo} hideNavBar/>
            <Scene key="summaryCart" component={SummaryCart} hideNavBar/>
            <Scene key="checkout" component={Checkout} hideNavBar/>
            <Scene key="checkoutSuccess" component={CheckoutSuccess} hideNavBar/>
            <Scene key="orderLists" component={OrderLists} hideNavBar/>
            <Scene key="orderView" component={OrderView} hideNavBar/>
        </Router>
    }

}