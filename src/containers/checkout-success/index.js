import React, {Component, PropTypes} from 'react';
import {
    View, Text, Image, StyleSheet, Animated, InteractionManager
} from 'react-native';
import {autobind} from 'core-decorators';
import {
    CustomView, ThankYou, Flower, TextFont, Button
} from '../../components';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getPlatformValue} from '../../utils';

export default class CheckoutSuccess extends Component {
    state = {
        textAnimate: new Animated.Value(0),
        flowerAnimate: new Animated.Value(0)
    }

    @autobind
    handleToCategory() {
        Actions.popTo('categoryLists', {title: 'Category'});
    }

    handleToOrderView(){
        Actions.orderView();
    }

    componentDidMount(){
        Animated.parallel([
            Animated.timing(this.state.textAnimate, {
                toValue: 1,
                duration: 800
            }),
            Animated.timing(this.state.flowerAnimate, {
                toValue: 1,
                duration: 600
            }),
        ]).start()
    }

    render() {
        return <CustomView flex={1} backgroundColor="transparent">
            <Animated.View style={{position:'relative', top: this.state.flowerAnimate.interpolate({
                inputRange: [0, 1],
                outputRange: [-84, 0]
            })}}>
                <Flower/>
            </Animated.View>
            <Animated.View style={{opacity: this.state.textAnimate}}>
                <ThankYou marginTop={199}/>
            </Animated.View>
            <Animated.View style={{position:'relative', top: this.state.textAnimate.interpolate({
                inputRange: [0, 1],
                outputRange: [695, 0]
            })}}>
                <View style={{alignItems: 'center'}}>
                    <TextFont
                        textAlign="center"
                        fontSize={30}
                        lineHeight={getPlatformValue('ios', 29, 40)}
                        width={300}
                        marginTop={47}
                    >
                        Checkout successfully
                    </TextFont>
                </View>
                <CustomView paddingLeft={50} paddingRight={50} marginTop={57}>
                    <TextFont textAlign="center">
                        We will complete send gift to your love ^_^
                    </TextFont>
                </CustomView>
                <CustomView flexDirection="column" alignItems="center">
                    <Button gradient marginTop={30} onPress={this.handleToOrderView}>
                        <Icon name="address-card-o" size={20}/> Review order
                    </Button>
                    <Button marginTop={20} borderWidth={0} onPress={this.handleToCategory}>
                        <Icon name="home" size={20}/> Go back home
                    </Button>
                </CustomView>
            </Animated.View>
        </CustomView>
    }
}

CheckoutSuccess.propTypes = {
    disableInteractionCheck: PropTypes.bool
}