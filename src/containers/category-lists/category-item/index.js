import React, {PureComponent, PropTypes} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {CustomView, TextFont} from '../../../components';

export default class CategoryItem extends PureComponent {
    getPropsSizeView() {
        if (this.props.horizontal) {
            return {
                height: 47,
                width: 333
            }
        }
        else {
            return {
                width: 156,
                heiht: 156
            }
        }
    }

    render() {
        return <CustomView
            component={Image}
            source={{uri: this.props.featuredImage}}
            position="relative"
            marginBottom={21}
            resizeMode="cover"
            backgroundColor="#eeeeee"
            borderRadius={8}
            height={156}
            {...this.getPropsSizeView()}
        >
            <CustomView flex={1} component={TouchableOpacity} onPress={this.props.onPress}>
                <CustomView position="absolute" backgroundColor="rgba(0,0,0,.15)" top={0} bottom={0} left={0} right={0}>
                    <CustomView alignItems="center" position="absolute" left={0} right={0} bottom={12}
                                backgroundColor="transparent">
                        <TextFont color="#ffffff" fontSize={17}>
                            {this.props.name}
                        </TextFont>
                    </CustomView>
                </CustomView>
            </CustomView>
        </CustomView>
    }
}

CategoryItem.propTypes = {
    featuredImage: PropTypes.any,
    name: PropTypes.string,
    onPress: PropTypes.func
}
