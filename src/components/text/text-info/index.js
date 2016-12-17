import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import {CustomView} from '../../partials';
import TextFont from '../text-font';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TextInfo extends Component {
    static propTypes = {
        label: PropTypes.string,
        iconName: PropTypes.string
    }

    render() {
        return <CustomView {...this.props}>
            <TextFont fontSize={13} color="#656464">
                {this.props.iconName && <Icon name={this.props.iconName}/>} {this.props.label}
            </TextFont>
            {this.props.children && <TextFont fontSize={16} marginTop={0} color="#333333">{this.props.children}</TextFont>}
        </CustomView>
    }
}
