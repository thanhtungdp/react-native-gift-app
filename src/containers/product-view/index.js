import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import {autobind} from 'core-decorators';
import {Actions} from 'react-native-router-flux';
import Carousel from 'react-native-looped-carousel';
import {addProduct} from '../../redux/actions/cartAction';
import {addNotification} from '../../redux/actions/notificationAction';
import {CustomView, Navbar, TextFont, Button} from '../../components';
import {formatPrice} from '../../utils/cart';

const {width} = Dimensions.get('window');

const CAROUSEL_HEIGHT = 250;

@connect(
    (state) => ({}),
    dispatch => bindActionCreators({addProduct, addNotification}, dispatch)
)
export default class Product extends Component {
    static propTypes = {
        product: PropTypes.shape({
            id: PropTypes.any,
            name: PropTypes.string,
            featuredImageGroup: PropTypes.array,
            description: PropTypes.any
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            size: {width, height: CAROUSEL_HEIGHT},
        };
    }

    @autobind
    handleAddCard(){
        Actions.pop();
        this.props.addProduct(this.props.product);
        this.props.addNotification('success', `Add ${this.props.product.name} to cart`)
    }

    render() {
        const carousels = this.props.product.featuredImageGroup.map(featuredImage => featuredImage.originalUrl);
        const {product} = this.props;
        return <CustomView flex={1}>
            <Carousel
                delay={2000}
                style={this.state.size}
                pageInfoTextStyle={{color: '#ffffff'}}
                autoplay
                pageInfo
            >
                {carousels.map((carousel, index) =>
                    <CustomView
                        key={index}
                        style={this.state.size}
                    >
                        <Image source={{uri: carousel, width, height: CAROUSEL_HEIGHT}} resizeMode="cover"/>
                    </CustomView>
                )}
            </Carousel>
            <CustomView position="absolute" top={0} left={0} right={0}>
                <Navbar primaryColor="#ffffff"/>
            </CustomView>
            <CustomView marginBottom={10} component={ScrollView} paddingLeft={21} paddingRight={21}>
                <TextFont fontSize={18}>
                    {product.name}
                </TextFont>
                <TextFont color="#6B6B6B" fontSize={16}>
                    Ngày nay bánh kem trở thành quá quen thuộc đối với những bữa tiệc sinh nhật, tiệc cưới, đám hỏi,...
                    Vì việc quá quen thuộc nên nhiều người không chú ý đến nguồn gốc ra đời, ý nghĩa hay tại sao nó lại
                    có hình tròn,...
                    {'\n \n'}
                    Sau khi Châu Âu đạt được những thành tựu đặc biệt trong kỹ thuật làm bánh thì chiếc bánh được cải
                    tiến hơn với dạng tròn và phủ đầy kem nhờ sự phát triển trong công nghệ chế tạo
                    Sau khi Châu Âu đạt được những thành tựu đặc biệt trong kỹ thuật làm bánh thì chiếc bánh được cải
                    tiến hơn với dạng tròn và phủ đầy kem nhờ sự phát triển trong công nghệ chế tạo
                    Sau khi Châu Âu đạt được những thành tựu đặc biệt trong kỹ thuật làm bánh thì chiếc bánh được cải
                    tiến hơn với dạng tròn và phủ đầy kem nhờ sự phát triển trong công nghệ chế tạo
                </TextFont>
            </CustomView>
            <CustomView paddingLeft={21} paddingRight={21} paddingBottom={20}>
                <Button onPress={this.handleAddCard} width="auto" gradient>{formatPrice(parseInt(product.price))} - Add to cart</Button>
            </CustomView>
        </CustomView>
    }
}
