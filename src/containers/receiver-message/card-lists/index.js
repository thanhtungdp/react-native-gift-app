import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, ListView, Image, ListViewDataSource} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomView, TextFont} from '../../../components';
import {removeProduct} from '../../../redux/actions/cartAction';

const cards = [
    {id: 1, name: 'Bánh nhân đậu xánh sửa', featuredImage: require('../../../assets/products/cake-1.png'), price: 3000},
    {id: 2, name: 'Socala đậu phộng', featuredImage: require('../../../assets/products/cake-2.png'), active: true, price: 3000},
    {id: 3, name: 'Gấu teddy beer', featuredImage: require('../../../assets/products/cake-3.png'), price: 3000},
    {id: 4, name: 'Áo thun ngắn tay', featuredImage: require('../../../assets/products/cake-4.png'), price: 3000},
    {id: 5, name: 'Hoa vô thường', featuredImage: require('../../../assets/products/cake-5.png'), price: 3000},
]

const CARD_HEIGHT = 170;
const CARD_WIDTH = 200;

export default class CardLists extends Component {
    constructor() {
        super(...arguments);
        const dataListView = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            data: dataListView.cloneWithRows(cards)
        }
    }

    renderCard(card) {
        return <CustomView marginRight={10} width={CARD_WIDTH} height={CARD_HEIGHT} position="relative">
            <CustomView component={Image} width={CARD_WIDTH} height={CARD_HEIGHT} source={card.featuredImage} resizeMode="cover"/>
            {card.active &&
            <CustomView position="absolute"
                        top={0} left={0} right={0} bottom={0}
                        backgroundColor="rgba(0,0,0,.32)"
                        alignItems="center"
                        justifyContent="center"
            >
                <TextFont color="#ffffff" marginTop={-20}>Choose</TextFont>
                <Icon name="check-circle" size={30} color="#ffffff"/>
            </CustomView>}
        </CustomView>
    }

    render() {
        return <CustomView marginTop={10} height={CARD_HEIGHT}>
            <TextFont color={!this.props.textInfo ? '#d4d4d4' : '#656464'}><Icon name="id-card-o"/> Select card gift</TextFont>
            <ListView
                style={{flex: 1, marginTop: 10}}
                dataSource={this.state.data}
                initialListSize={4}
                renderRow={this.renderCard}
                horizontal
            >
            </ListView>
        </CustomView>
    }
}
CardLists.propTypes = {
    textInfo: PropTypes.bool
}