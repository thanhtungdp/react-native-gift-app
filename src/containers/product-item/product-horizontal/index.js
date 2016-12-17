import React, {PureComponent, PropTypes} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomView, TextFont, Button} from '../../../components';

export default class ProductHorizontal extends PureComponent {
    state = {
        height: 300
    }

    componentDidMount() {
        setTimeout(() => {
            // this._productItem.measure((x,y,width, height) => {
            //     this.setState({height});
            // });
        }, 0.01)
    }

    render() {
        const {featuredImage, name, price, onPress} = this.props;
        return <CustomView>
            <CustomView
                flexDirection="row"
                paddingTop={23}
                paddingBottom={23}
                alignItems="center"
            >
                <CustomView width={50} height={50} resizeMode="cover" component={Image} source={{uri: featuredImage}}/>
                <CustomView flex={1} alignItems={this.props.alignLeft ? 'flex-start' : 'flex-end'} paddingLeft={20}>
                    <TextFont fontSize={16}>{name}</TextFont>
                    <TextFont color="#7c7c7c"><Icon name="usd"/> {price}</TextFont>
                    {this.props.showDelete &&
                    <Button onPress={this.props.onDelete} width={45} paddingTop={2} paddingBottom={2}>
                        <TextFont fontSize={10}>
                            Xóa
                        </TextFont>
                    </Button>}
                    {this.props.children}
                </CustomView>
            </CustomView>
            <CustomView backgroundColor="#979797" opacity={.28} height={1}/>
        </CustomView>
    }
}
/*
 <Button width="auto" paddingLeft={0} paddingRight={0} paddingTop={0} paddingBottom={0}>
 <Icon name="cart-plus" size={18}/>
 </Button>
 */
ProductHorizontal.propTypes = {
    featuredImage: PropTypes.any,
    name: PropTypes.string,
    price: PropTypes.number,
    onPress: PropTypes.func,
    showDelete: PropTypes.bool,
    onDelete: PropTypes.func,
    alignLeft: PropTypes.bool
}

