import React, {Component, PropTypes} from 'react';
import {View, Text, TextInput, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getStyleFromProps, cleanProps} from '../../../utils';
import {TextFont} from '../../text';
import {CustomView} from '../../partials';

// Distance label top with input container default
const LABEL_DEFAULT_TOP = 15;
const LABEL_DEFAULT_TOP_FOCUS = 0;

// Label size when animated
const LABEL_FONT_SIZE = 13;
const LABEL_FONT_SIZE_FOCUS = 14;

const LABEL_HEIGHT_WITH_INPUT = 17;
const INPUT_MULTIPLE_HEIGHT = 100;
const INPUT_DEFAULT_HEIGHT = 34;

export default class Input extends Component {
    state = {
        _labelPositionTop: new Animated.Value(LABEL_DEFAULT_TOP),
        _labelFontSize: new Animated.Value(14)
    }

    handleFocus() {
        Animated.timing(this.state._labelPositionTop, {
            toValue: LABEL_DEFAULT_TOP_FOCUS,
            duration: 300,
        }).start();
        Animated.timing(this.state._labelFontSize, {
            toValue: LABEL_FONT_SIZE_FOCUS,
            duration: 300,
        }).start();
        if (this.props.onFocus) this.props.onFocus();
    }

    handleBlur() {
        if (!this.props.value) {
            Animated.timing(this.state._labelPositionTop, {
                toValue: LABEL_DEFAULT_TOP,
                duration: 300,
            }).start();
            Animated.timing(this.state._labelFontSize, {
                toValue: LABEL_FONT_SIZE,
                duration: 400,
            }).start();
        }
    }

    componentDidMount() {
        if (this.props.value) {
            Animated.timing(this.state._labelPositionTop, {
                toValue: LABEL_DEFAULT_TOP_FOCUS,
                duration: 300,
            }).start();
            Animated.timing(this.state._labelFontSize, {
                toValue: LABEL_FONT_SIZE_FOCUS,
                duration: 300,
            }).start();
        }
    }

    renderLabel() {
        const styleLabelContainer = {
            ...styleInput.labelContainer,
            top: this.state._labelPositionTop
        }
        const styleLabel = {
            ...styleInput.label,
            fontSize: this.state._labelFontSize
        }
        return <Animated.View style={styleLabelContainer}>
            <TextFont>
                <Animated.Text style={styleLabel}>
                    {this.props.iconName && <Icon name={this.props.iconName}/>} {this.props.label}
                </Animated.Text>
            </TextFont>
        </Animated.View>
    }

    renderInputText() {
        let style = styleInput.input;
        if (this.props.multiline) {
            style = {
                ...style,
                height: this.props.height ? this.props.height : INPUT_MULTIPLE_HEIGHT
            }
        }
        if (this.props.noTextInput) {
            return <CustomView
                style={cleanProps(['color', 'fontSize', 'fontFamily'], {...style, marginTop: 100, paddingTop: 5})}
                component={TouchableOpacity}
                backgroundColor="transparent"
                paddingTop={10}
                onPress={this.handleFocus.bind(this)}
                animationType={"slide"}
            >
                <TextFont color="#333333">{this.props.value}</TextFont>
            </CustomView>
        }
        return <TextInput
            value={this.props.value}
            style={style}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onChangeText={this.props.onChange}
            secureTextEntry={this.props.secureTextEntry}
            multiline={this.props.multiline}
            underlineColorAndroid='rgba(0,0,0,0)'
        />
    }

    renderLabelInputCombine() {
        let styleInputContainer = {
            ...styleInput.inputContainer,
            ...getStyleFromProps(['marginTop', 'height'], this.props),
        };
        if (this.props.multiline) {
            const heightInputContainer = this.props.height
                ? this.props.height + LABEL_HEIGHT_WITH_INPUT
                : INPUT_MULTIPLE_HEIGHT + LABEL_HEIGHT_WITH_INPUT
            styleInputContainer = {
                ...styleInputContainer,
                height: heightInputContainer
            }
        }
        return <View style={styleInputContainer}>
            {this.renderLabel()}
            {this.renderInputText()}
            {this.renderLineWhite()}
        </View>
    }

    renderLineWhite() {
        return <View style={styleInput.lineWhite}></View>
    }

    renderInputWithIcon() {
        return <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <View style={{width: 40}}>
                {React.cloneElement(this.props.icon, {
                    color: '#333333',
                    size: 25
                })}
            </View>
            <View style={{flex: 1}}>
                {this.renderLabelInputCombine()}
            </View>
        </View>
    }


    render() {
        if (this.props.icon) return this.renderInputWithIcon();
        return this.renderLabelInputCombine();
    }
}

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    secureTextEntry: PropTypes.bool,
    multiline: PropTypes.bool,
    marginTop: PropTypes.number,
    noTextInput: PropTypes.bool
}

const styleInput = {
    inputContainer: {
        position: 'relative',
        height: INPUT_DEFAULT_HEIGHT + LABEL_HEIGHT_WITH_INPUT,
        justifyContent: 'flex-end',
    },
    labelContainer: {
        position: 'absolute',
        top: 100
    },
    label: {
        color: '#d4d4d4',
        fontSize: 13,
        letterSpacing: 0.9
    },
    lineWhite: {
        height: 2,
        backgroundColor: '#333333',
        opacity: .2
    },
    input: {
        height: INPUT_DEFAULT_HEIGHT,
        color: '#333333',
        borderWidth: 0,
        borderColor: 'transparent',
        fontSize: 20,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        fontFamily: 'VNF Quicksands'
    }
};
