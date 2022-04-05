import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { Block, Image, Navigator, Text, View } from "@tarojs/components";
import { AtAvatar, AtIcon } from "taro-ui";
import './index.scss';

export default class HomeNavBar extends Component<any, any> {
  state = {
    userInfo:{},
    clicked: false,
    location: '广州市',
    nav_bar_style: {
      height: `${this.getStatusBarHeight() + 50}px`,
      paddingTop: `${this.getStatusBarHeight() - 8}px`,
    },
  }

  getStatusBarHeight() {
    return Taro.getSystemInfoSync()?.statusBarHeight || 80;
  }

  canJumpToChoose = () => true

  subString(str){
    if (str && str.length >= 10){
      return  str.substring(0,10);
    }
    else return str;
  }
  handleAvatarClick = () => {
    Taro.switchTab({ url:"/pages/user/index" });
  }

  render() {
    const { userInfo } = this.props;
    const { nav_bar_style }  = this.state;
    return (
      <Block>
        <View style={nav_bar_style} className="home-nav-bar">
          <Image onClick={this.handleAvatarClick} className="avatar-my" src={userInfo.avatar} />
          <Navigator  url="/pages/search/index" className="input">
            <AtIcon className="icon" size="18" color="#666" value="search" />
            <Text className="txt">搜点好玩的 100+</Text>
          </Navigator>
        </View>
        <View style={nav_bar_style} />
        <View />
      </Block>
  );
  }

}
