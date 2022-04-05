import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { setGlobalData, showErrorToast } from '@utils';
import * as user from '@utils/user';
import "./index.scss";
import { AtButton } from "taro-ui";

class Login extends Component {

  state={}

  accountLogin = () => {
    Taro.navigateTo({
      url: "/pages/login/account/index"
    }).then();
  }

  wxLogin = () => {
    Taro.getUserProfile({
      desc: '登录认证',
      success: e => {
        console.log('e', e);
        if (e.userInfo == undefined) {
          setGlobalData('hasLogin', false);
          showErrorToast('微信登录失败');
          return;
        }
        user.checkLogin().catch(() => {
          console.log('登录成功');
          user.loginByWechatMini(e.userInfo).then(() => {
            setGlobalData('hasLogin', true);
            Taro.navigateBack({
              delta: 1
            }).then();
          }).catch(() => {
            setGlobalData('hasLogin', false);
            showErrorToast('微信登录失败');
          });
        });
      }
    });
  }

  render() {
    return (
      <View>
        <View className="login-box">
          <AtButton className="wechat-login-btn" onClick={this.wxLogin}>微信快速登录</AtButton>
          {/* <AtButton type="primary" className="account-login-btn" onClick={this.accountLogin}>账号密码登录</AtButton>*/}
        </View>
      </View>
    );
  }
}
export default Login;
