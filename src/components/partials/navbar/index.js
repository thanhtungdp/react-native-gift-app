import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import CustomView from '../custom-view';
import {TextFont} from '../../text';
import {PRIMARY_COLOR} from '../../../config';

export default class Navbar extends Component {
    actionPop() {
        Actions.pop();
    }

    renderIcon(iconCustom, onPressIcon = () => {}, style= {}) {
        return <TouchableOpacity style={{width: 40, alignItems: 'flex-start',  backgroundColor: 'transparent', ...style}} onPress={onPressIcon}>
            {React.cloneElement(iconCustom, {
                color: this.props.primaryColor,
                size: 30
            })}
        </TouchableOpacity>
    }

    renderIconLeft() {
        let iconLeft = <Icon name="angle-left"/>;
        if (this.props.iconLeft) {
            iconLeft = this.props.iconLeft;
        }
        return this.renderIcon(iconLeft, this.props.onPressLeft ? this.props.onPressLeft : this.actionPop);
    }

    renderIconRight(){
        let iconRight = this.props.iconRight;
        if(iconRight) return this.renderIcon(iconRight, this.props.onPressRight, {alignItems: 'center', position: 'relative', right: -10});
        return <CustomView width={40}/>;
    }

    render() {
        return <CustomView height={56} paddingTop={20} paddingLeft={21} paddingRight={21}>
            <CustomView flex={1} flexDirection="row" alignItems="center" justifyContent="space-between">
                {this.renderIconLeft()}
                <CustomView height={36} paddingBottom={9} borderBottomWidth={3} borderColor={this.props.primaryColor}>
                    <TextFont fontSize={17}>{this.props.children}</TextFont>
                </CustomView>
                {this.renderIconRight()}
            </CustomView>
        </CustomView>
    }
}

Navbar.defaultProps = {
    primaryColor: PRIMARY_COLOR
}

Navbar.propTypes = {
    iconLeft: PropTypes.any,
    onPressLeft: PropTypes.func,
    iconRight: PropTypes.any,
    onPressRight: PropTypes.func,
    primaryColor: PropTypes.string
}
