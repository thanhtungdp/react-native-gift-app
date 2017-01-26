import React, {Component, PropTypes} from 'react';
import {ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {updateKeyPaymentCardInfo} from '../../redux/actions/cartAction';
import {CustomView, Navbar, TotalPrice, Input, Button} from '../../components';
import {totalPrice} from '../../utils/cart'

@connect(state => ({
    cardInfo: state.cart.cardInfo,
    products: state.cart.products
}), dispatch => bindActionCreators({updateKeyPaymentCardInfo}, dispatch))
export default class Checkout extends Component {
    handleChangeInputForm(key, value) {
        this.props.updateKeyPaymentCardInfo(key, value);
    }

    getPropsInput(key) {
        return {
            onChange: this.handleChangeInputForm.bind(this, key),
            value: this.props.cardInfo[key]
        }
    }

    renderNavbar() {
        return <Navbar>
            4. Checkout
        </Navbar>
    }

    handleCheckoutSuccess() {
        Actions.checkoutSuccess();
    }

    render() {
        return <CustomView flex={1}>
            {this.renderNavbar()}
            <CustomView component={ScrollView} flex={1} paddingLeft={21} paddingRight={21} paddingTop={20}>
                <TotalPrice marginTop={10} price={totalPrice(this.props.products, true)}/>
                <Input marginTop={19} label="First name" iconName="user-o" {...this.getPropsInput('firstName')}/>
                <Input marginTop={19} label="Last name" iconName="user-o" {...this.getPropsInput('lastName')}/>
                <Input marginTop={19} label="Number" iconName="cc" {...this.getPropsInput('number')}/>
                <CustomView marginTop={19} flexDirection="row">
                    <CustomView flex={1} paddingRight={5}>
                        <Input iconName="calendar-o" label="Expires" {...this.getPropsInput('expires')}/>
                    </CustomView>
                    <CustomView flex={1} paddingLeft={5}>
                        <Input iconName="circle-o" label="CCV" {...this.getPropsInput('ccv')}/>
                    </CustomView>
                </CustomView>
                <Button marginTop={30} onPress={this.handleCheckoutSuccess} gradient width="auto">
                    <Icon name="cc-visa"/> Checkout by VISA
                </Button>
            </CustomView>
        </CustomView>
    }
}
Checkout.propTypes = {}

