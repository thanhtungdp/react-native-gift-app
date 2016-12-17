import React, {Component, PropTypes} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomView, Navbar, TotalPrice} from '../../components';
import {removeProduct} from '../../redux/actions/cartAction';
import {ProductHorizontal as ProductItem} from '../product-item';
import {totalPrice} from '../../utils/cart';

const products = [
    {id: 1, name: 'Bánh nhân đậu xánh sửa', featuredImage: require('../../assets/products/cake-1.png'), price: 3000},
    {id: 2, name: 'Socala đậu phộng', featuredImage: require('../../assets/products/cake-2.png'), price: 3000},
    {id: 3, name: 'Gấu teddy beer', featuredImage: require('../../assets/products/cake-3.png'), price: 3000},
    {id: 4, name: 'Áo thun ngắn tay', featuredImage: require('../../assets/products/cake-4.png'), price: 3000},
    {id: 5, name: 'Hoa vô thường', featuredImage: require('../../assets/products/cake-5.png'), price: 3000},
    {id: 6, name: 'Siêu bánh bộ 3', featuredImage: require('../../assets/products/cake-6.png'), price: 3000}
]

@connect(state => ({
    products: state.cart.products
}), dispatch => bindActionCreators({removeProduct}, dispatch))
export default class SummaryCart extends Component {
    handleSummaryInfo() {
        Actions.receiverInfo();
    }

    handleDelete(product) {
        Alert.alert(
            'Bạn muốn xóa',
            'Bạn có chắc chắn muốn xóa sản phẩm không',
            [
                {text: 'Cancel'},
                {
                    text: 'Ok',
                    onPress: () => {
                        this.props.removeProduct(product.productCartId);
                    }
                }
            ]
        )
    }

    renderNavbar() {
        return <Navbar iconRight={<Icon name="caret-right"/>} onPressRight={this.handleSummaryInfo}>
            Cart - {this.props.products.length}
        </Navbar>
    }

    render() {
        return <CustomView flex={1}>
            {this.renderNavbar()}
            <CustomView marginTop={20} marginBottom={10} paddingLeft={21} paddingRight={21}>
                <TotalPrice price={totalPrice(this.props.products, true)}/>
            </CustomView>
            <CustomView flex={1} paddingLeft={21} paddingRight={21} paddingTop={10} component={ScrollView}>
                {this.props.products.map(product =>
                    <ProductItem
                        showDelete={true}
                        onDelete={() => this.handleDelete(product)}
                        key={product.productCartId}
                        {...product}
                    />
                )}
            </CustomView>
        </CustomView>
    }
}

