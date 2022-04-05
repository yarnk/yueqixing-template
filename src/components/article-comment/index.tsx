import React,{ Component } from "react";
import { Text, View } from "@tarojs/components";
import { AtAvatar, AtIcon } from "taro-ui";
import "./index.scss";

export default class ArticleComment extends Component<any, any>{

  render() {
    return (
      <View className="article-comment">
        <Text className="a-title">评论列表</Text>
        <View>
          <View className="a-head">
            <AtAvatar circle />
            <Text>昵称</Text>
          </View>
          <View>
            评论内容，很好很精彩！
          </View>
          <View>
            <Text>01-10 18:40</Text>
            <Text>回复</Text>
            <View>
              <AtIcon value="iconfont icon-dianzan" />
              {0}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
