import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import {Font} from 'exponent';
import {BackgroundWrapper} from './components';
import Routes from './routes';
import Root from './redux/Root';

export default class App extends Component {
    state = {
        fontLoaded: false,
    }

    renderLoading(){
        return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator/>
            <Text style={{marginTop: 20, backgroundColor: 'transparent'}}>Loading font, image, please wait ...</Text>
        </View>
    }

    render(){
        return <BackgroundWrapper paddingTop={0}>
            {!this.state.fontLoaded && this.renderLoading()}
            {this.state.fontLoaded && <Root>
               <Routes/>
            </Root>}
        </BackgroundWrapper>
    }

    async componentDidMount(){
        await Font.loadAsync({
            'VNF Quicksands': require('./assets/fonts/VNFQuicksand-Bold.ttf')
        });
        this.setState({ fontLoaded: true });
    }
}