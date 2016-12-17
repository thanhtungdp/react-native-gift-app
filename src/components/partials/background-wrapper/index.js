import React, {Component, PropTypes} from 'react';
import {
    View, Image, Dimensions, TouchableOpacity, Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {getStyleFromProps, getPlatformValue} from '../../../utils';

const window = Dimensions.get('window');

export default class BackgroundWrapper extends Component {
    renderImageBackground() {
        const style = [
            styleWrapper.containerImage,
            getStyleFromProps(['paddingTop'], this.props)
        ]
        return <Image source={require('../../../assets/images/background-main.png')} style={style}>
            {this.props.children}
        </Image>
    }

    renderViewBackground() {
        const style = [
            styleWrapper.containerView,
            getStyleFromProps(['paddingTop'], this.props)
        ]
        return <View style={style}>
            {this.props.children}
        </View>
    }

    render() {
        if (this.props.transparent) return this.renderViewBackground();
        else return this.renderImageBackground();
    }
}

BackgroundWrapper.propTypes = {
    iconLeft: PropTypes.string,
    onPressIcon: PropTypes.func,
    paddingTop: PropTypes.number
}

const styleWrapper = {
    containerImage: {
        width: window.width,
        height: window.height,
        resizeMode: getPlatformValue('android', 'cover', 'contain'),
        paddingTop: getPlatformValue('android', 5, 22),
    },
    containerView: {
        flex: 1,
        paddingTop: getPlatformValue('android', 5, 22),
    },
    icon: {
        marginLeft: 10,
        position: 'relative',
        top: 6,
        opacity: .8,
        backgroundColor: 'transparent'
    }
}