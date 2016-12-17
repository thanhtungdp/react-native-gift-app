import React, {Component, PropTypes} from 'react';
import {Text} from 'react-native';
import {getStyleFromProps} from '../../../utils';
import {PRIMARY_COLOR} from '../../../config';

export default class TextFont extends Component {
    render() {
        const style = getStyleFromProps(
            [
                'fontFamily','textAlign','fontSize', 'lineHeight', 'letterSpacing',
                'width','height','fontWeight','color','marginTop'
            ],
            this.props
        );
        return <Text {...this.props} style={style}>
            {this.props.children}
        </Text>
    }
}

TextFont.defaultProps = {
    fontFamily: 'VNF Quicksands',
    fontWeight: '400',
    fontSize: 14,
    color: PRIMARY_COLOR
}

TextFont.propTypes = {
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.number,
    marginTop: PropTypes.number,
    color: PropTypes.string
}

