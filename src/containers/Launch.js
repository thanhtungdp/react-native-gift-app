import React, {Component} from 'react';
import {Alert, ActivityIndicator} from 'react-native';
import {bindActionCreators} from 'redux';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {CustomView, Logo, Flower, TextFont, Button, BackgroundWrapper} from '../components';
import {reduxAwait} from '../utils';
import {getPlatformValue} from '../utils';
import {authAction} from '../redux/actions';

Animatable.initializeRegistryWithDefinitions({
    pulseBig: {
        0: {
            scale: 1,
        },
        0.5: {
            scale: 1.2,
        },
        1: {
            scale: 1,
        },
    }
})

export default class Launch extends Component {
    handleToCategoryLists() {
        Actions.categoryLists();
    }

    render2() {
        return <CustomView flex={1} backgroundColor="transparent">
            <CustomView position="absolute" top={0} left={0} right={0} bottom={0}>
                <Animatable.View animation="pulseBig" easing="ease-out" duration={4000} iterationCount="infinite">
                <BackgroundWrapper/>
                </Animatable.View>
            </CustomView>
            <Animatable.View animation="pulse" easing="ease-out" duration={4000} iterationCount="infinite">
            <Flower/>
            </Animatable.View>
            <Animatable.View style={{marginTop: 124}} animation="shake" easing="ease-in" duration={15000}
                             iterationCount="infinite">
                <Logo/>
            </Animatable.View>
            <CustomView alignItems="center">
                <Animatable.Text
                    style={{
                        textAlign: 'center',
                        fontSize: 30,
                        lineHeight: getPlatformValue('ios', 29, 40),
                        width: 200,
                        marginTop: 50
                    }}
                    animation="pulse" easing="ease-out" duration={2000} iterationCount="infinite"
                >
                    <TextFont fontSize={30}>
                        Gift for love
                    </TextFont>
                </Animatable.Text>
            </CustomView>
            <CustomView marginTop={64} flexDirection="column" alignItems="center">
                <Button onPress={this.handleToCategoryLists}>
                    Hello {'\n'} <Icon name="gift"/> Tap to give gift
                </Button>
            </CustomView>
            <CustomView
                position="absolute"
                left={0}
                right={0}
                bottom={15}
                alignItems="center"
            >
                <TextFont width={272} textAlign="center" fontSize={17}>
                    Make your love more happy
                </TextFont>
            </CustomView>
        </CustomView>
    }
}