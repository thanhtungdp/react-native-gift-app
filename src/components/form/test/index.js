import React, {Component, PropTypes} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Components} from 'exponent';
import {getStyleFromProps} from '../../../utils';
import {TextFont} from '../../text';
import {PRIMARY_COLOR} from '../../../config';

export default class Button extends Component {
    getStyleNormal(){
        let style = {
            ...styleButton.container,
            ...getStyleFromProps(
                [
                    'marginTop', 'flex', 'borderColor', 'borderWidth',
                    'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'
                ],
                this.props
            )
        };
        if (this.props.width && this.props.width !== 'auto') {
            style = {
                ...style,
                width: this.props.width
            }
        }
        return style;
    }

    renderNormalButton() {
        const style = this.getStyleNormal();
        return <TouchableOpacity style={style} onPress={this.props.onPress}>
            {!this.props.isText
                ? this.props.children
                : <TextFont style={styleButton.text}>{this.props.children}</TextFont>
            }
        </TouchableOpacity>
    }

    renderGradientButton() {
        const style = {
            ...this.getStyleNormal(),
            borderWidth: 0
        };
        return <TouchableOpacity onPress={this.props.onPress}>
            <Components.LinearGradient
                colors={['#F67D77', '#EB5C55']}
                style={style}
            >
                {!this.props.isText
                    ? this.props.children
                    : <TextFont style={styleButton.text} color="#ffffff">{this.props.children}</TextFont>
                }
            </Components.LinearGradient>
        </TouchableOpacity>
    }

    checkChildrenIsView(){
        const viewsAnti = ['View','CustomView'];
        if(Array.isArray(this.props.children)) return false;
        if(!this.props.children.type) return false;
        if(viewsAnti.indexOf(this.props.children.type.name) > -1){
            return true
        }
        return false;
    }


    render() {
        if (!this.props.gradient) return this.renderNormalButton();
        return this.renderGradientButton();
    }
}

Button.defaultProps = {
    width: 300,
    isText: true
}

Button.propTypes = {
    marginTop: PropTypes.number,
    width: PropTypes.any,
    flex: PropTypes.number,
    onPress: PropTypes.func,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    gradient: PropTypes.bool,
    gradientProps: PropTypes.object,
    isText: PropTypes.bool
}

const styleButton = {
    container: {
        paddingTop: 9,
        paddingBottom: 13,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'transparent',
        borderRadius: 5,
        alignItems: "center",
        borderWidth: 2,
        borderColor: PRIMARY_COLOR
    },
    text: {
        fontSize: 17,
        textAlign: "center",
        letterSpacing: -0.4
    }
}