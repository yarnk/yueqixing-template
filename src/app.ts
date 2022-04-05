import { Component } from "react";
import "./app.scss";
import Taro from "@tarojs/taro";
import * as user from "@utils/user";
import { setGlobalData } from "@utils";
import "./assets/icon/iconfont.css";

export default class App extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidShow () {
    user.checkLogin().then(() => {
      console.log('已登录');
      setGlobalData('hasLogin', true);
    }).catch(() => {
      console.log('未登录');
      setGlobalData('hasLogin', false);
    });
  }

  componentDidHide() {
    console.log('componentDidHide ');
  }

  componentDidCatchError() {
    console.log('componentDidCatchError ');
  }

  update = () => {
    if(process.env.TARO_ENV === 'weapp') {
      const updateManager = Taro.getUpdateManager();
      Taro.getUpdateManager().onUpdateReady(function() {
        Taro.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function (res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          }
        }).then();
      });
    }
  }
  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}
