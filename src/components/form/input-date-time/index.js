import React, {Component, PropTypes} from 'react';
import {View, Text, Modal, DatePickerIOS} from 'react-native';
import {autobind} from 'core-decorators';
import * as Animatable from 'react-native-animatable';
import Input from '../input';
import Button from '../button';
import {CustomView} from '../../partials';
import {TextFont} from '../../text';

export default class InputDateTime extends Component {
    static propTypes = {
        value: PropTypes.any
    }

    static defaultProps = {
        value: new Date()
    }

    state = {
        showModal: false
    }

    @autobind
    hideModal() {
        this.setState({showModal: false})
    }

    @autobind
    handleFocus() {
        this.setState({showModal: true})
    }

    @autobind
    handleChangeDate(date) {
        this.props.onChange(date);
    }

    render() {
        return <CustomView>
            <Input {...this.props} value={this.props.value.toString()} onFocus={this.handleFocus} noTextInput/>
            <Modal transparent={true} visible={this.state.showModal}>
                <CustomView flex={1} backgroundColor="rgba(0,0,0,.3)">
                    <Animatable.View animation="fadeInUp" easing="ease-in" duration={300} style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
                        <CustomView flex={1} height={270} backgroundColor="#ffffff">
                            <CustomView flexDirection="row" justifyContent="space-between">
                                <Button borderColor="transparent" width="auto" onPress={this.hideModal}>Cancel</Button>
                                <Button borderColor="transparent" width="auto" onPress={this.hideModal}>Confirm</Button>
                            </CustomView>
                            <DatePickerIOS date={this.props.value} onDateChange={this.handleChangeDate}/>
                        </CustomView>
                    </Animatable.View>
                </CustomView>
            </Modal>
        </CustomView>
    }
}
