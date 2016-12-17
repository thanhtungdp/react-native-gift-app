import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {getStyleFromProps} from '../../../utils';

export default class ThankYou extends Component {
    render() {
        const style = [
            logoStyle.imageContainer,
            getStyleFromProps(['marginTop'], this.props)
        ]
        return <View style={style}>
            <Image source={require('../../../assets/images/thank-you.png')} style={logoStyle.image} resizeMode="cover"/>
        </View>
    }
}

/*
 */

ThankYou.propTypes = {
    marginTop: PropTypes.number
}

const logoStyle = StyleSheet.create({
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        width: 232,
        height: 65
    }
})

