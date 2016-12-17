import React, {Component, PropTypes} from 'react';
import {View, Text, Easing, Image, Dimensions, Animated} from 'react-native';
import {autobind} from 'core-decorators';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import {CustomView, Navbar, TextFont, ButtonCard, Button} from '../../../components';
import ParallaxScrollView from '../../../components/partials/parallax-scroll-view';

const window = Dimensions.get('window');

const FILTER_BAR_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 127;

export default class CategoryHeaderParallax extends Component {
    static propTypes = {
        backgroundUrl: PropTypes.string,
        title: PropTypes.string
    }

    state = {
        filterBarFixed: false,
        _filterBarTop: new Animated.Value(0)
    }

    @autobind
    handleScroll(e) {
        const contentOffsetMax = PARALLAX_HEADER_HEIGHT + FILTER_BAR_HEIGHT;
        if (e.nativeEvent.contentOffset.y > contentOffsetMax) {
            if (!this.state.filterBarFixed) {
                this.setState({filterBarFixed: true})
                Animated.timing(this.state._filterBarTop, {
                    toValue: 1,
                    duration: 500,
                }).start(() => {
                    console.log('animated');
                });
            }
        }
        else {
            if (this.state.filterBarFixed) {
                this.setState({filterBarFixed: false})
                Animated.timing(this.state._filterBarTop, {
                    toValue: 0,
                    duration: 200
                }).start();
            }
        }
        this.props.onScroll(e);
    }

    handleContinue() {
        Actions.summaryCart();
    }

    handleOpenCart() {
        Actions.summaryCart();
    }

    renderNavbar() {
        return <CustomView position="absolute" backgroundColor="transparent" top={0} left={0} right={0}>
            <Navbar primaryColor="#ffffff"/>
        </CustomView>
    }

    renderTitle() {
        return <CustomView position="relative" flex={1}>
            <CustomView position="absolute" alignItems="center" left={0} right={0} bottom={31}>
                <TextFont color="#ffffff" fontSize={25}>
                    {this.props.title}
                </TextFont>
            </CustomView>
        </CustomView>
    }

    @autobind
    renderFilterBar(fixed = false) {
        let styles = {
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingLeft: 21,
            paddingRight: 21,
            paddingTop: 10,
            paddingBottom: 10,
            height: FILTER_BAR_HEIGHT,
            alignItems: 'center',
            backgroundColor: '#f3f3f3'
        }
        if (fixed) {
            styles = {
                ...styles,
                position: 'absolute',
                left: 0,
                paddingTop: 20,
                right: 0
            }
        }
        return <Animated.View
            style={{
                ...styles,
                top: this.state._filterBarTop.interpolate({
                    inputRange: [0, 1],
                    outputRange: [this.state.filterBarFixed ? -FILTER_BAR_HEIGHT : 0, 0]
                })
            }}
        >
            <ButtonCard onPress={this.handleOpenCart}/>
            <CustomView flex={1} alignItems="center">
                <TextFont>Gifts</TextFont>
            </CustomView>
            <Button onPress={this.handleContinue} gradient width={64} paddingTop={3} paddingBottom={6} isText={false}>
                <CustomView flexDirection="row" alignItems="center">
                    <TextFont color="#ffffff" fontSize={14}>
                        Next {' '}
                    </TextFont>
                    <Icon color="#ffffff" style={{position: 'relative', top: 2}} name="caret-right" size={18}/>
                </CustomView>
            </Button>
        </Animated.View>
    }

    @autobind
    renderForeground() {
        return <CustomView flex={1}>
            {this.renderTitle()}
            {this.renderNavbar()}
        </CustomView>
    }

    render() {
        return <CustomView flex={1}>
            <ParallaxScrollView
                style={{flex: 1, overflow: 'hidden'}}
                backgroundColor="#f3f3f3"
                renderStickyCustom={() => this.state.filterBarFixed ? this.renderFilterBar(true) : null}
                renderBackground={() => <Image
                    source={{uri: this.props.backgroundUrl, width: window.width, height: 171}}/>}
                renderForeground={this.renderForeground}
                parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT}
                onScroll={this.handleScroll}
            >
                {this.renderFilterBar()}
                {this.props.children}
            </ParallaxScrollView>
        </CustomView>
    }
}

/*
 <CustomView flex={1}>
 <ParallaxScrollView
 style={{flex: 1, overflow: 'hidden'}}
 backgroundColor="#f3f3f3"
 renderBackground={() => <Image
 source={{uri: this.props.backgroundUrl, width: window.width, height: 171}}/>}
 renderForeground={this.renderForeground}
 renderStickyCustom={() => this.state.filterBarFixed ? this.renderFilterBar(true) : null}
 parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT}
 scrollViewProps={{style: {backgroundColor: 'red'}}}
 onScroll={this.handleScroll}
 >
 {this.renderFilterBar()}
 {this.props.children}
 </ParallaxScrollView>
 </CustomView>
 */