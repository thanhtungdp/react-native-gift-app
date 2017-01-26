import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Animatable from 'react-native-animatable'
import {View, Text} from 'react-native';
import {CustomView, TextFont} from '../../components';
import {addNotification} from '../../redux/actions/notificationAction';

@connect(state => ({
    notifications: state.notification
}), dispatch => bindActionCreators({addNotification}, dispatch))
export default class NotificationToast extends Component {
    render() {
        return <CustomView position="absolute" bottom={0} left={0} right={0}>
            {this.props.notifications.map(notification => <Animatable.View key={notification.id} animation="fadeIn">
                <CustomView
                    paddingTop={10} paddingBottom={10} paddingLeft={20} paddingRight={20}
                    backgroundColor="#2ecc71"
                >
                    <TextFont color="#ffffff">{notification.message}</TextFont>
                </CustomView>
            </Animatable.View>)}
        </CustomView>
    }
}
NotificationToast.propTypes = {}
