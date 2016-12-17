import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import {getStyleFromProps, cleanProps} from '../../../utils';

const styleKeys = [
    'flex', 'alignItems', 'justifyContent', 'flexDirection', 'flexWrap',
    'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom',
    'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
    'backgroundColor', 'borderColor', 'borderWidth', 'borderRadius',
    'borderTopWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderRightWidth',
    'position', 'top', 'left', 'right', 'bottom',
    'width', 'height', 'zIndex'
]

export default class CustomView extends Component {
    static propTypes = {
        component: PropTypes.any
    }

    measure(...args) {
        return this._refComponent.measure(...args);
    }

    render() {
        const style = getStyleFromProps(styleKeys, this.props);
        const Component = this.props.component ? this.props.component : View;
        return <Component ref={component => this._refComponent = component} {...cleanProps(styleKeys, this.props)} style={style}>
            {this.props.children}
        </Component>
    }
}

