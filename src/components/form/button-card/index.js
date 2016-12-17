import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../button';
import {CustomView} from '../../partials';
import {TextFont} from '../../text';
import {PRIMARY_COLOR} from '../../../config';

@connect((state) => ({
    totalItems: state.cart.products.length
}))
export default class ButtonCard extends Component {
    static propTypes = {
        totalItems: PropTypes.number
    }

    static defaultProps = {
        totalItems: 0
    }

    render() {
        return <Button borderColor="transparent" width={45} paddingTop={0} paddingLeft={0} paddingRight={0} paddingBottom={0}
                       onPress={this.props.onPress} isText={false}>
            <CustomView flexDirection="row">
                <Icon name="shopping-cart" color={PRIMARY_COLOR} size={20}/>
                <CustomView position="relative" left={5} borderColor={PRIMARY_COLOR} alignItems="center"
                            justifyContent="center" borderRadius={10} borderWidth={1} width={13} height={13}>
                    <TextFont fontSize={10}>{this.props.totalItems}</TextFont>
                </CustomView>
            </CustomView>
        </Button>
    }
}
/*
 <CustomView flexDirection="row" alignItems="center">
 <TextFont fontSize={20} color={PRIMARY_COLOR}>
 {'d'}
 <Icon name="shopping-cart" size={20}/>
 </TextFont>

 </CustomView>
 */
/*
 <CustomView position="relative" left={5} borderColor={PRIMARY_COLOR} alignItems="center" justifyContent="center" borderRadius={10} borderWidth={1} width={13} height={13}>
 <TextFont fontSize={10}>{this.props.totalItems}</TextFont>
 </CustomView>
 */
ButtonCard.propTypes = {}
