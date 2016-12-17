import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import CardLists from './card-lists';
import {CustomView, Navbar, Input, Button, ButtonCard} from '../../components';
import {updateKeyInformationReceive} from '../../redux/actions/cartAction';

@connect(state => ({
    receiverInfo: state.cart.receiverInfo
}), dispatch => bindActionCreators({updateKeyInformationReceive}, dispatch))
export default class ReceiverMessage extends Component {

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
            2. Message for love
        </Navbar>
    }

    handleComplete(){
        Actions.summaryInfo();
    }

    render() {
        return <CustomView flex={1}>
            {this.renderNavbar()}
            <CustomView paddingLeft={21} paddingRight={21} paddingTop={20}>
                <Input marginTop={5} height={200} iconName="envelope-o" multiline label="Message for love" {...this.getPropsInput('message')}/>
                <CardLists/>
                <Button onPress={this.handleComplete} marginTop={31} gradient width="auto">
                    Next step checkout <Icon name="check-circle"/>
                </Button>
            </CustomView>
        </CustomView>
    }
}
ReceiverMessage.propTypes = {}

