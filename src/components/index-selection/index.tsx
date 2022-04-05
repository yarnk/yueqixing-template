import { View } from "@tarojs/components";
import React, { Component } from "react";
import { AtIndexes, AtSearchBar } from "taro-ui";

export default class IndexSelection extends Component<any, any> {
  onClick(item) {
    console.log(item);
  }

  scrollIntoView = (key) => {
    console.log("key", key);
  }

  handleActionClick(key) {
    this.scrollIntoView && this.scrollIntoView(key);
  }

  handleChange(val) {
    console.log('change:', val);
  }

  render() {
    const list = [{
      title: 'A',
      key: 'A',
      items: [
        {
          'name': '爱玛'
          // 此处可加其他业务字段
        }]
    },
      {
        title: 'B',
        key: 'B',
        items: [
          {
            'name': '宝马'
          },
          {
            'name': '宝骏'
          }]
      },
      {
        title: 'L',
        key: 'L',
        items: [
          {
            'name': '绿源'
          }]
      },
      {
        title: 'C',
        key: 'C',
        items: [
          {
            'name': '朝阳'
          }]
      },
      {
        title: 'T',
        key: 'T',
        items: [
          {
            'name': '台铃'
          }]
      },
      {
        title: 'X',
        key: 'X',
        items: [
          {
            'name': '新日'
          }, {
            'name': '小牛电动'
          }, {
            'name': '小刀'
          }, {
            'name': '小鸟'
          }]
      },
      {
        title: 'Y',
        key: 'Y',
        items: [
          {
            'name': '雅迪'
          }]
      },
      {
        title: 'Z',
        key: 'Z',
        items: [
          {
            'name': '尊尚'
          }]
      }
    ];
    return (
      <View style="height:100vh">
        <AtIndexes
          list={list}
          onClick={this.onClick.bind(this)}
        >
          <View>
            <AtSearchBar placeholder="搜车" onActionClick={this.handleActionClick.bind(this)}
              onChange={this.handleChange.bind(this)} value=""
            />
          </View>
        </AtIndexes>
      </View>
    );
  }
}
