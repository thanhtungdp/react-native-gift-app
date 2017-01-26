import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import {Font} from 'exponent';
import {BackgroundWrapper, CustomView, TextFont} from './components';
import Routes from './routes';
import Root from './redux/Root';
import NotificationToast from './containers/notification-toast'

export default class App extends Component {
    state = {
        fontLoaded: false,
    }

    renderLoading() {
        return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator/>
            <Text style={{marginTop: 20, backgroundColor: 'transparent'}}>Loading font, image, please wait ...</Text>
        </View>
    }

    render() {
        return <BackgroundWrapper paddingTop={0}>
            <Root>
                {!this.state.fontLoaded && this.renderLoading()}
                {this.state.fontLoaded && <Routes/>}
                {this.state.fontLoaded && <NotificationToast/>}
            </Root>

        </BackgroundWrapper>
    }

    async componentDidMount() {
        await Font.loadAsync({
            'VNF Quicksands': require('./assets/fonts/VNFQuicksand-Bold.ttf')
        });
        this.setState({fontLoaded: true});
    }
}