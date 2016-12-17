import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';

const window = Dimensions.get('window');

export default class Flower extends Component {
    render() {
        const style = [
            logoStyle.imageContainer
        ]
        return <View style={style}>
            <Image source={require('../../../assets/images/flower-top.png')} style={logoStyle.image} resizeMode="cover"/>
        </View>
    }
}

Flower.propTypes = {
    marginTop: PropTypes.number
}

const logoStyle = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0
    },
    image: {
        width: window.width,
        height: 130
    }
})

