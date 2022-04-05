import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import * as app from '@utils/app';
import './index.scss';
import { AtIcon } from "taro-ui";
import { isLogin, navigateToLogin } from "@utils/app";

export default class UserHome extends Component<any, any> {
  state = {
    userInfo: {}
  }
  handleAvatarClick =() =>{
    if (!isLogin()){
      navigateToLogin();
    }
  }
  handleOrder = (tab) => {
    try {
      Taro.setStorageSync('tab', tab);
    } catch (e) {
    }
    app.navigateToCheck('/pages/user/order/index');
  }

  handlePowerClick = (child) => {
    if (child.url && child.type !== 'about') {
      app.navigateToCheck(child.url);
    } else {
      Taro.navigateTo({ url: child.url });
    }
  }

  render() {
    const { userInfo } = this.props;
    return (
      <View className="layout-my">
        <View
          style={{ backgroundImage:  `none` }}
        >
          <View className="header-my center">
            <Image onClick={this.handleAvatarClick} className="avatar-my" src={userInfo.avatar} />
            <View className="nickname">
              {userInfo.nickname}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
