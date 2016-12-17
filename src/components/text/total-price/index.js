import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomView} from '../../partials';
import {PRIMARY_COLOR} from '../../../config';
import TextFont from '../text-font';

export default class TotalPrice extends Component {
    render() {
        return <CustomView
            borderRadius={8}
            backgroundColor="transparent"
            paddingTop={17}
            paddingBottom={17}
            paddingLeft={19}
            paddingRight={19}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderWidth={2}
            borderColor={PRIMARY_COLOR}
            {...this.props}
        >
                <TextFont>
                    <Icon name="credit-card"/> Total price
                </TextFont>
                <TextFont fontSize={20}>
                    {this.props.price}
                </TextFont>
        </CustomView>
    }
}
TotalPrice.propTypes = {
    price: PropTypes.any
}
