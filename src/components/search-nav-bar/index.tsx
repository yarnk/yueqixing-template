import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { Block, Text, View } from "@tarojs/components";
import { AtIcon, AtTabs, AtTabsPane } from "taro-ui";
import './index.scss';

export default class SearchNavBar extends Component<any, any> {
  state = {
    clicked: false,
    current: 0,
    nav_bar_style: {
      height: `${this.getStatusBarHeight() + 50}px`,
      paddingTop: `${this.getStatusBarHeight() - 8}px`,
    },
  }

  handleClick (value) {
    this.setState({
      current: value
    });
  }

  getStatusBarHeight() {
    return Taro.getSystemInfoSync()?.statusBarHeight || 80;
  }

  canJumpToChoose = () => true


  render() {
    const tabList = [{ title: '新车' },{ title: '新国标' }, { title: '电摩' },{ title: '自行车' }];
    const { nav_bar_style,current }  = this.state;
    return (
      <Block>
        <View
          style={nav_bar_style}
          className="search-nav-bar"
        >
          <AtTabs className="nav-tabs" current={current} tabList={tabList} onClick={this.handleClick.bind(this)} />
        </View>
        <View style={nav_bar_style} />
      </Block>
  );
  }

}
