import React, {Component, PropTypes} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import CardLists from '../receiver-message/card-lists';
import {CustomView, Navbar, TextInfo} from '../../components';
import {ProductHorizontal as ProductItem} from '../product-item';

@connect(state => ({
    receiverInfo: state.cart.receiverInfo,
    products: state.cart.products
}))
export default class SummaryInfo extends Component {
    handleSummaryCart(){
        Actions.checkout();
    }

    renderNavbar(){
        return <Navbar iconRight={<Icon name="caret-right"/>} onPressRight={this.handleSummaryCart}>
            3. Confirm Info
        </Navbar>
    }
    render() {
        const {name, phone, address ,message} = this.props.receiverInfo;
        return <CustomView flex={1}>
            {this.renderNavbar()}
            <CustomView component={ScrollView} flex={1} paddingLeft={21} paddingRight={21} paddingTop={10}>
                <TextInfo label="Fullname" iconName="user">{name}</TextInfo>
                <TextInfo marginTop={10} label="Phone" iconName="phone">{phone}</TextInfo>
                <TextInfo marginTop={10} label="Address" iconName="map-marker">{address}</TextInfo>
                <CustomView height={1} backgroundColor="#eeeeee" marginTop={20} marginBottom={20}/>
                <TextInfo label="Message" iconName="envelope-o">{message}</TextInfo>
                <CardLists textInfo/>
                <TextInfo marginTop={10} iconName="gift" label="Gifts"/>
                {this.props.products.map(product => <ProductItem key={product.productCartId} {...product}/>)}
            </CustomView>
        </CustomView>
    }
}
SummaryInfo.propTypes = {}

