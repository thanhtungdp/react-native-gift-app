import React, {PureComponent, PropTypes} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomView, TextFont, Button} from '../../../components';

export default class ProductItem extends PureComponent {
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
        return <CustomView
            flexDirection="column"
            marginBottom={15}
            backgroundColor="#ffffff"
            borderRadius={8}
        >
            <TouchableOpacity onPress={this.props.onPress}>
                <CustomView
                    component={Image}
                    source={this.props.featuredImage}
                    position="relative"
                    width={159}
                    resizeMode="cover"/>
            </TouchableOpacity>

            <CustomView paddingLeft={6} paddingRight={6} paddingTop={8} paddingBottom={8}>
                <TextFont onPress={this.props.onPress} lineHeight={15} letterSpacing={-0.34}>
                    {this.props.name}
                </TextFont>
                <CustomView marginTop={5} flexDirection="row" justifyContent="space-between">
                    <TextFont color="#7c7c7c">
                        <Icon name="usd"/> {this.props.price}
                    </TextFont>
                    <Button width="auto" borderColor="transparent" paddingLeft={0} paddingRight={0} paddingTop={0}
                            paddingBottom={0}>
                        <Icon name="cart-plus" color="#7c7c7c" size={18}/>
                    </Button>
                </CustomView>
            </CustomView>
        </CustomView>
    }
}
/*
 <Button width="auto" paddingLeft={0} paddingRight={0} paddingTop={0} paddingBottom={0}>
 <Icon name="cart-plus" size={18}/>
 </Button>
 */
ProductItem.propTypes = {
    featuredImage: PropTypes.any,
    name: PropTypes.string,
    price: PropTypes.number,
    onPress: PropTypes.func
}

