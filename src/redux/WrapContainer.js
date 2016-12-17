import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {categoryAction} from '../redux/actions';

@connect((state) => ({}), dispatch => bindActionCreators(categoryAction, dispatch))
export default class WrapContainer extends Component {
    componentDidMount(){
        this.props.getCategories();
    }

    render() {
        return <View style={{flex: 1}}>
            {this.props.children}
        </View>
    }
}
WrapContainer.propTypes = {}