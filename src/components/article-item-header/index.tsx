import React, { Component } from "react";
import { Image, Text, View } from "@tarojs/components";
import { AtButton, AtIcon } from "taro-ui";
import { diffDate } from "@utils/time-util";
import "./index.scss";
import Taro from "@tarojs/taro";
import { delArticleApi } from "../../api/article";


export default class ArticleItemHeader extends Component<any, any> {


  render() {
    const { id,avatar,nickname,time } = this.props;
    return (
      <View>
          <View className="article-header">
            <View className="left-col">
              <Image className="avatar" src={avatar} />
              <View className="text-col">
                <Text className="nickname">{nickname}</Text>
                <View className="date">
                  <Text>{diffDate(time)}</Text>
                </View>
              </View>
            </View>
            <View className="right-col">
              {
                Taro.getStorageSync("user_info").id && Taro.getStorageSync("user_info").id == id ?
                <AtButton size="small" className="flow-btn"><AtIcon size="12" value="add" />关注</AtButton> : undefined
              }
            </View>
          </View>
      </View>
    );
  }
};
