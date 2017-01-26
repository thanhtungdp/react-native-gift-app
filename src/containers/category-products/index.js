import React, {Component, PropTypes} from 'react';
import {View, Text, ScrollView, ActivityIndicator, Dimensions} from 'react-native';
import {autobind} from 'core-decorators';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux';
import {CustomView, BackgroundWrapper} from '../../components';

import CategoryHeaderParallax from './category-header-parallax';
import {ProductVertical as ProductItem} from '../product-item';
import {addProduct} from '../../redux/actions/cartAction';
import {addNotification} from '../../redux/actions/notificationAction';

const window = Dimensions.get('window');

const MAX_ITEMS_FIRST_LOAD = 4

@connect((state) => ({
    products: state.product.lists.data
}), dispatch => bindActionCreators({addProduct, addNotification}, dispatch))
export default class CategoryProducts extends Component {
    state = {
        rendered: true,
        maxItems: MAX_ITEMS_FIRST_LOAD
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({rendered: true});

        }, 400)
    }

    getProductsEven() {
        return this.props.products.slice(0, this.state.maxItems).filter((product, index) => {
            if (index % 2 === 0) return true
        })
    }

    getProductsOdd() {
        return this.props.products.slice(0, this.state.maxItems).filter((product, index) => {
            if (index % 2 !== 0) return true
        })
    }

    renderProductColumn(products) {
        return <CustomView width={159}>
            {products.map(product => <ProductItem
                {...product}
                key={product._id}
                onPress={() => this.handleToProduct(product)}
                onAdd={() => this.handleAddProduct(product)}
            />)}
        </CustomView>
    }

    handleToProduct(product){
        Actions.productView({product});
    }

    handleAddProduct(product){
        this.props.addNotification('success', `Add ${product.name} to cart`)
        this.props.addProduct(product);
    }

    @autobind
    handleScroll(e) {
        var windowHeight = window.height,
            height = e.nativeEvent.contentSize.height,
            offset = e.nativeEvent.contentOffset.y;
        if (windowHeight + offset >= height - 100) {
            if (this.state.maxItems <= this.props.products.length) {
                this.setState({
                    maxItems: this.state.maxItems + MAX_ITEMS_FIRST_LOAD
                })
            }
        }
    }

    render() {
        const {category} = this.props;
        const backgroundUrl = category.secondaryFeaturedImage ? category.secondaryFeaturedImage : category.featuredImage;
        return <CategoryHeaderParallax
            backgroundUrl={backgroundUrl}
            title={category.name}
            onScroll={this.handleScroll}
        >
            {!this.state.rendered && <CustomView justifyContent="center">
                <ActivityIndicator/>
            </CustomView>}
            {this.state.rendered && <CustomView
                paddingLeft={21}
                paddingRight={21}
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="space-between"
                paddingTop={20}
                backgroundColor="#f3f3f3"
            >
                {this.renderProductColumn(this.getProductsEven())}
                {this.renderProductColumn(this.getProductsOdd())}
            </CustomView>}
        </CategoryHeaderParallax>
    }
}
CategoryProducts.propTypes = {}

