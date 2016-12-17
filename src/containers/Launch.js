import React, {Component} from 'react';
import {Alert, ActivityIndicator} from 'react-native';
import {autobind} from 'core-decorators';
import {bindActionCreators} from 'redux';
import {Facebook} from 'exponent';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {CustomView, Logo, Flower, TextFont, Button, BackgroundWrapper} from '../components';
import {reduxAwait} from '../utils';
import {getPlatformValue} from '../utils';
import {FACEBOOK_APP_ID} from '../config';
import {AuthApi} from '../api';
import {authAction} from '../redux/actions';

const LOGIN_PENDING = 'login peding';
const LOGIN_FAIL = 'login fail';
const LOGIN_SUCCESS = 'login success';

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
const TextFontAnimate = Animatable.createAnimatableComponent(TextFont);
const FlowerAnimate = Animatable.createAnimatableComponent(Flower);

@reduxAwait(state => {
    return {
        auth: state.auth
    }
}, dispatch => bindActionCreators(authAction, dispatch))
export default class Launch extends Component {
    state = {
        loginStatus: LOGIN_PENDING
    }

    @autobind
    async handleLoginFacebook() {
        const {type, token} = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
            permissions: ['public_profile', 'email']
        });
        if(type === 'success'){
            this.setState({loginStatus: LOGIN_PENDING});
            const userRes = await AuthApi.authLogin(token);
            this.updateUser(userRes, userRes.token, userRes.user)
        }
    }

    handleToCategoryLists(){
        Actions.categoryLists();
    }

    updateUser(userRes, token, user){
        if(userRes.success === false){
            this.setState({loginStatus: LOGIN_FAIL})
        }else{
            this.setState({loginStatus: LOGIN_SUCCESS});
            this.props.authUpdateToken(token, user);
        }
    }

    async getUserMe(){
        this.setState({loginStatus: LOGIN_PENDING});
        const userRes = await AuthApi.getUserMe();
        this.updateUser(userRes, userRes.token, userRes);
    }

    componentDidMount(){
        this.getUserMe();
    }

    renderButtonLogin(){
        const {auth:{user}} = this.props;
        let componentDisplay = null;
        switch (this.state.loginStatus){
            case LOGIN_PENDING:
                componentDisplay = <ActivityIndicator/>;
                break;
            case LOGIN_SUCCESS:
                componentDisplay = <Button onPress={this.handleToCategoryLists}>
                    Hello {user.fullName} {'\n'} <Icon name="gift"/> Tap to give gift
                </Button>
                break;
            default:
                componentDisplay = <Button  onPress={this.handleLoginFacebook}>
                    <Icon name="facebook"/> Login with facebook
                </Button>
        }
        return <CustomView marginTop={64} flexDirection="column" alignItems="center">
            {componentDisplay}
            {this.state.loginStatus === LOGIN_FAIL && <TextFont marginTop={5}>Đăng nhập thất bại, vui lòng đăng nhập lại</TextFont>}
            {this.state.loginStatus === LOGIN_PENDING && <TextFont marginTop={5}>Các bạn chờ trong giây lát nhé ^_^</TextFont>}
        </CustomView>
    }

    render() {
        return <CustomView flex={1} backgroundColor="transparent">
            <CustomView position="absolute" top={0} left={0} right={0} bottom={0}>
                <Animatable.View animation="pulseBig" easing="ease-out" duration={4000} iterationCount="infinite">
                    <BackgroundWrapper/>
                </Animatable.View>
            </CustomView>
            <Animatable.View animation="pulse" easing="ease-out" duration={4000} iterationCount="infinite">
                <Flower/>
            </Animatable.View>
            <Animatable.View style={{marginTop: 124}} animation="shake" easing="ease-in" duration={15000} iterationCount="infinite">
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
            {this.renderButtonLogin()}
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