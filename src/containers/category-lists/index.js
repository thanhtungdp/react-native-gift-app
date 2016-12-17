import React, {Component, PropTypes} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {autobind} from 'core-decorators';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {productAction} from '../../redux/actions'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Navbar, CustomView, BackgroundWrapper} from '../../components';
import CategoryItem from './category-item';

const images = [
    'http://sv1.upsieutoc.com/2016/12/07/christmas.png',
    'http://sv1.upsieutoc.com/2016/12/07/my-love.png',
    'http://sv1.upsieutoc.com/2016/12/07/birthday.png',
    'http://sv1.upsieutoc.com/2016/12/07/memory.png',
    'http://sv1.upsieutoc.com/2016/12/07/family.png',
    'http://sv1.upsieutoc.com/2016/12/07/teacher.png',
    'http://sv1.upsieutoc.com/2016/12/07/like-gift.png',
];

/*
 http://sv1.upsieutoc.com/2016/12/07/birthday.png
 http://sv1.upsieutoc.com/2016/12/07/christmas.png
 http://sv1.upsieutoc.com/2016/12/07/family.png
 http://sv1.upsieutoc.com/2016/12/07/like-gift.png
 http://sv1.upsieutoc.com/2016/12/07/memory.png
 http://sv1.upsieutoc.com/2016/12/07/my-love.png
 http://sv1.upsieutoc.com/2016/12/07/teacher.png
 */
const categories = [
    {id: 1, featuredImage: images[0], name: "Giáng sinh"},
    {id: 2, featuredImage: images[1], name: "Người yêu"},
    {id: 3, featuredImage: images[2], name: "Sinh nhật"},
    {id: 4, featuredImage: images[3], name: "Kỷ niệm"},
    {id: 5, featuredImage: images[4], name: "Gia đình"},
    {id: 6, featuredImage: images[5], name: "Thầy cô"},
    {id: 7, featuredImage: images[6], name: "Thích thì tặng", horizontal: true},
];

@connect(state => ({
    categories: state.category.lists.data
}), dispatch => bindActionCreators(productAction, dispatch))
export default class CategoryLists extends Component {
    state = {
        mounted: false
    }

    renderNavbar() {
        const navbarProps = {
            iconLeft: <Icon name="wpforms"/>,
            iconRight: <Icon name="user"/>,
            onPressLeft: () => {
                Actions.orderLists();
            }
        }
        return <Navbar {...navbarProps}>
            <Icon name="gift" size={18}/> Categories
        </Navbar>
    }

    @autobind
    handlePressCategory(category) {
        Actions.categoryProducts({category});
        this.props.getProducts(category._id);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({mounted: true})
        }, 320);
    }

    render() {
        return <CustomView flex={1}>
            {this.renderNavbar()}
            <CustomView height={15}/>
            <ScrollView flex={1}>
                <CustomView
                    paddingLeft={21}
                    paddingRight={21}
                    flex={1}
                    flexDirection="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    {this.props.categories.map((category) =>
                        <CategoryItem
                            key={category._id}
                            featuredImage={category.featuredImage}
                            name={category.name}
                            horizontal={category.horizontal}
                            onPress={() => this.handlePressCategory(category)}
                        />
                    )}
                </CustomView>
            </ScrollView>
        </CustomView>
    }
}
CategoryLists.propTypes = {}
