import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { Block, Text, View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import './index.scss';

export default class ServiceNavBar extends Component<any, any> {
  state = {
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

  // 选择定位
  chooseLocation = () => {
    const than = this;
    if (!this.canJumpToChoose()) return;
    Taro.authorize({
      scope: 'scope.userLocation',
      success: function () {
        // 用户已经同意小程序使用定位功能，后续调用 Taro.chooseLocation 接口不会弹窗询问
        Taro.chooseLocation({
          success(ret) {
            const _position = {
              ...ret,
              location: ret.name,
            };
            than.setState({ location:(_position.name ? _position.name : _position.address) });
            console.log(_position);
          }
        });
      },
      fail: function (err) {
        if (err?.errMsg?.indexOf('auth deny') > -1) {
          Taro.showToast({ title: '请在小程序页面右上角 - 更多 - 设置里允许小程序使用定位权限~' }).then();
        }
      }
    });
  };
  subString(str){
    if (str && str.length >= 10){
      return  str.substring(0,10);
    }
    else return str;
  }

  render() {
    const { nav_bar_style,clicked,location }  = this.state;
    return (
      <Block>
        <View
          style={nav_bar_style}
          className="service-nav-bar"
        >
          <View className="nav-address" onClick={this.chooseLocation}>
            <AtIcon value="map-pin" size="small" />
            <Text>
              {this.subString(location)}
            </Text>
            <AtIcon value={clicked ?  "chevron-up" : "chevron-down"} size={10} />
          </View>

        </View>
        <View style={nav_bar_style} />
      </Block>
  );
  }

}
