import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import TextFont from '../text-font';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TextStatus extends Component {
    getColor() {
        if (this.props.success) {
            return '#2ecc71';
        }
        if(this.props.processing){
            return '#f5a623';
        }
        if(this.props.shipping){
            return '#3498db';
        }
        return '#f5a623'
    }

    getText(){
        if(this.props.success) return 'Send successfully to your love';
        if(this.props.shipping) return 'Gift is moving';
        if(this.props.processing) return 'Gift is processing';
        return 'Gift is processing';
    }

    render() {
        return <TextFont fontSize={10} {...this.props} color={this.getColor()}>
            <Icon name="circle"/> {this.getText()}
        </TextFont>
    }
}
TextStatus.propTypes = {
    success: PropTypes.bool,
    processing: PropTypes.bool,
    shipping: PropTypes.bool
}

