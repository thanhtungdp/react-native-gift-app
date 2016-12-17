import React, {Component, PropTypes} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CardLists from '../receiver-message/card-lists';
import {ProductHorizontal as ProductItem} from '../product-item';
import {CustomView, Navbar, TextInfo, TextFont, TextStatus, TotalPrice} from '../../components';
import {totalPrice} from '../../utils/cart';
import {getOrder} from '../../redux/actions/orderAction';


const products = [
    {id: 1, name: 'Bánh nhân đậu xánh sửa', featuredImage: require('../../assets/products/cake-1.png'), price: 3000},
    {id: 2, name: 'Socala đậu phộng', featuredImage: require('../../assets/products/cake-2.png'), price: 3000},
    {id: 3, name: 'Gấu teddy beer', featuredImage: require('../../assets/products/cake-3.png'), price: 3000},
    {id: 4, name: 'Áo thun ngắn tay', featuredImage: require('../../assets/products/cake-4.png'), price: 3000},
    {id: 5, name: 'Hoa vô thường', featuredImage: require('../../assets/products/cake-5.png'), price: 3000},
    {id: 6, name: 'Siêu bánh bộ 3', featuredImage: require('../../assets/products/cake-6.png'), price: 3000}
]

@connect(state => {
    const {name, products, receiverInfo, cardInfo} = state.order.currentOrder;
    return {
        name, products, receiverInfo, cardInfo
    }
}, dispatch => bindActionCreators({getOrder}, dispatch))
export default class OrderView extends Component {
    renderNavbar(){
        return <Navbar>
            Order view
        </Navbar>
    }

    componentDidMount(){
        this.props.getOrder(this.props.orderId)
    }

    render() {
        const {name, phone, address ,message} = this.props.receiverInfo;
        return <CustomView flex={1}>
            {this.renderNavbar()}
            <CustomView paddingTop={10} paddingBottom={10} flexDirection="row" justifyContent="center" alignItems="center">
                <TextFont fontSize={10} color="#B5A9A8">20/12/2015</TextFont>
                <CustomView width={20}/>
                <TextStatus fontSize={10} success={true}/>
            </CustomView>
            <CustomView component={ScrollView} flex={1} paddingLeft={21} paddingRight={21} paddingTop={10}>
                <TextInfo iconName="user" label="Fullname">{name}</TextInfo>
                <TextInfo iconName="phone" marginTop={10} label="Phone">{phone}</TextInfo>
                <TextInfo iconName="map-marker" marginTop={10} label="Address">{address}</TextInfo>
                <CustomView height={1} backgroundColor="#eeeeee" marginTop={20} marginBottom={20}/>
                <TextInfo iconName="envelope-o" label="Message">{message}</TextInfo>
                <CardLists textInfo/>
                <TextInfo marginTop={10} iconName="gift" label="Gifts"/>
                {this.props.products.map((product, index) => <ProductItem key={index} {...product}/>)}
                <TotalPrice price={totalPrice(this.props.products, true)}/>
            </CustomView>
        </CustomView>
    }
}
OrderView.propTypes = {}

