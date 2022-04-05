import React, { Component } from "react";
import Taro from "@tarojs/taro";
import * as images from '../../static/images/index';
import './index.scss';
import UserHome from "@components/user-layout/user-home";
import { setGlobalData } from "@utils";
import { logout } from "../../api/login";
import { View,Text } from "@tarojs/components";
import { AtButton, AtFab, AtList, AtListItem, AtTabBar } from "taro-ui";
import {getUserInfoApi} from "../../api/user";

export default class UserCenter extends Component<any, any> {

  state = {
    userInfo: {
      avatar: images.avatar,
      nickname: '未登录',
    },
    currentUserTab: -1,
    hasLogin: false
  }
  toLogin = () => {
    Taro.navigateTo({ url: '/pages/login/index' }).then();
  }

  handleClick = () => {

  }
  handleContactClick = () => {
  }
  handleIntoClick  = () =>{
    Taro.navigateTo({ url:"/pages/user/into/index" }).then();
  }
  handleTabClick = (index) =>{
    this.setState({ currentUserTab: index });
  }

  componentDidShow() {
    console.log('获取用户信息');
    // 获取用户的登录信息
    getUserInfoApi().then(res=>{
      console.log("更新用户信息");
      // @ts-ignore
      Taro.setStorageSync('user_info', res.result);
      this.setState({
        // @ts-ignore
        userInfo: res.result,
        hasLogin: true
      });
    });
  }


  handelLogout = () => {
    let than = this;
    Taro.showModal({
      title: '',
      confirmColor: '#b4282d',
      content: '退出登录？',
      success: function (res) {
        if (!res.confirm) {
          return;
        }
        logout().then(() => {
          setGlobalData('hasLogin', false);
          Taro.removeStorageSync('token');
          Taro.removeStorageSync('user_info');
          Taro.reLaunch({
            url: '/pages/home/index'
          }).then(() => {
            than.setState({ hasLogin: false });
          });
        });

      }
    }).then();
  }


  render() {
    const { userInfo, hasLogin, currentUserTab } = this.state;
    return (
      <View style={{ backgroundColor: '#dedede',paddingBottom: "20px" }}>
          <UserHome userInfo={userInfo} />
          <AtTabBar
            className="user-tab-bar"
            selectedColor="#f66b20"
            tabList={[
              { title: '我的创作', iconType: 'edit' },
              { title: '我的收藏', iconType: 'star',selectedIconType:'star-2' },
              { title: '互动消息', iconType: 'message' },
              { title: '系统通知', iconType: 'bell', text: '100', max: 99 }
            ]}
            onClick={this.handleTabClick.bind(this)}
            current={currentUserTab}
          />
          <AtList className="menu-list">
            <AtListItem title="账号管理" extraText="绑定管理" arrow="right"  onClick={this.handleClick} />
            <AtListItem title="安全中心" extraText="修改密码" arrow="right" onClick={this.handleClick} />
            <AtListItem title="地址管理" arrow="right" />
            <AtListItem title="历史浏览" />
          </AtList>
          <AtList className="menu-list">
            <AtListItem title="入驻申请" arrow="right" onClick={this.handleIntoClick} />
          </AtList>

          <AtList className="menu-list">
            <AtListItem title="问题反馈"  />
            <AtListItem title="更多帮助" onClick={this.handleClick} />
            <AtListItem title="设置" arrow="right" />
            <View className="contact">
              <AtButton className="contact-btn" openType="contact">联系客服</AtButton>
            </View>
          </AtList>
          <View>
            {
              hasLogin && <AtButton className="logout-btn" onClick={this.handelLogout}>退出登录</AtButton>
            }
          </View>
      </View>
    );
  }
}
