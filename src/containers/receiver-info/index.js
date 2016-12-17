import React, {Component, PropTypes} from 'react';
import {View, Text, DatePickerIOS} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {autobind} from 'core-decorators';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker'
import {CustomView, Navbar, Input, InputDateTime, Button} from '../../components';
import {updateKeyInformationReceive} from '../../redux/actions/cartAction';

@connect(state => ({
    receiverInfo: state.cart.receiverInfo
}), dispatch => bindActionCreators({updateKeyInformationReceive}, dispatch))
export default class ReceiverInfo extends Component {
    state = {
        date: '2016-05-15'
    }

    @autobind
    handleChangeDate(date){
        console.log(date);
        this.setState({date});
    }

    handleChangeInputForm(key, value) {
        this.props.updateKeyInformationReceive(key, value);
    }

    getPropsInput(key) {
        return {
            onChange: this.handleChangeInputForm.bind(this, key),
            value: this.props.receiverInfo[key]
        }
    }

    renderNavbar() {
        return <Navbar>
            1. Receiver info
        </Navbar>
    }

    handleComplete(){
        Actions.receiverMessage();
    }

    render() {
        return <CustomView flex={1}>
            {this.renderNavbar()}
            <CustomView paddingLeft={21} paddingRight={21} paddingTop={20}>
                <Input iconName="user" label="Full name" {...this.getPropsInput('name')}/>
                <Input marginTop={31} iconName="phone" label="Phone" {...this.getPropsInput('phone')}/>
                <Input marginTop={31} iconName="map-marker" height={60} multiline label="Address" {...this.getPropsInput('address')}/>
                <InputDateTime marginTop={31} iconName="calendar" label="Time give gift" {...this.getPropsInput('time')}/>
                <Button onPress={this.handleComplete} marginTop={31} gradient width="auto">
                    Complete info <Icon name="check-circle"/>
                </Button>
            </CustomView>
        </CustomView>
    }
}
ReceiverInfo.propTypes = {}

