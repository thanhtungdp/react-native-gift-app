import React, {Component, PropTypes} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {Actions} from 'react-native-router-flux';
import {getOrders} from '../../redux/actions/orderAction';
import {CustomView, Navbar, TextFont, TextStatus, TotalPrice} from '../../components';
import {ProductHorizontal} from '../product-item';
import {totalPrice} from '../../utils/cart';

const products = [
    {
        id: 1,
        name: 'Bánh nhân đậu xánh sửa',
        featuredImage: require('../../assets/products/cake-1.png'),
        price: 3000,
        success: true
    },
    {
        id: 2,
        name: 'Socala đậu phộng',
        featuredImage: require('../../assets/products/cake-2.png'),
        price: 3000,
        processing: true
    },
    {
        id: 3,
        name: 'Gấu teddy beer',
        featuredImage: require('../../assets/products/cake-3.png'),
        price: 3000,
        shipping: true
    },
    {id: 4, name: 'Áo thun ngắn tay', featuredImage: require('../../assets/products/cake-4.png'), price: 3000},
    {id: 5, name: 'Hoa vô thường', featuredImage: require('../../assets/products/cake-5.png'), price: 3000},
    {id: 6, name: 'Siêu bánh bộ 3', featuredImage: require('../../assets/products/cake-6.png'), price: 3000}
];

@connect(state => ({
    orders: state.order.lists.data
}), dispatch => bindActionCreators({getOrders}, dispatch))
export default class OrderLists extends Component {
    renderNavbar() {
        return <Navbar>
            Orders
        </Navbar>
    }

    handleOrderView(order){
        Actions.orderView({orderId: order.id});
    }

    componentDidMount(){
        this.props.getOrders();
    }

    render() {
        return <CustomView flex={1}>
            {this.renderNavbar()}
            <CustomView paddingTop={15} paddingBottom={5} paddingLeft={21} paddingRight={21}>
                <TotalPrice price={totalPrice(this.props.orders, true)}/>
            </CustomView>
            <CustomView component={ScrollView} flex={1} paddingLeft={21} paddingRight={21}>
                {this.props.orders.map(order => <TouchableOpacity key={order.id} onPress={() => this.handleOrderView(order)}>
                    <ProductHorizontal alignLeft {...order}>
                        <CustomView flexDirection="row">
                            <TextFont fontSize={10} color="#B5A9A8">20/12/2015</TextFont>
                            <CustomView width={20}/>
                            <TextStatus fontSize={10} processing={order.processing} shipping={order.shipping}
                                        success={order.success}>
                                Đang xử lý
                            </TextStatus>
                        </CustomView>
                    </ProductHorizontal>
                </TouchableOpacity>
                )}
            </CustomView>
        </CustomView>
    }
}
OrderLists.propTypes = {}

