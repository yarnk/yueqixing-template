import React, { Component } from "react";
import { Text, View } from "@tarojs/components";
import { AtButton, AtIcon } from "taro-ui";
import "./index.scss";
import { delArticleApi, likeArticleApi } from "../../api/article";
import Taro from "@tarojs/taro";

export default class ArticleListBottom extends Component<any, any>{
  state={
    item: {}
  }
  onLike = (item) =>{
    return () => {
      item.liked = !item.liked;
      if (!item.likes){
        item.likes = [];
      }
      if (item.liked){
        likeArticleApi({ id:item.id,like:true }).then(res=>{
          if (res.success){
            console.log("点赞");
            item.like_num += 1;
            console.log("setState");
            this.setState(item);
          }
        });
      }else {
        likeArticleApi({ id:item.id,like:false }).then(res=>{
          if (res.success){
            console.log("取消点赞");
            item.like_num -= 1;
            console.log("setState");
            this.setState(item);
          }
        });
      }
    };

  }
  delArticle(id){
    return () =>{
      delArticleApi({ id:id }).then(res=>{
        if (res.success){
          Taro.showToast({ title:"删除成功" });
        }
      });
    };

  }
  render() {
    const { item } = this.props;
    return(<View>
      <View className="article-footer">
        <Text className="left">浏览{item.view_num || 0}次</Text>
        <View className="right">
          <AtButton onClick={this.delArticle(item.id)}>删除</AtButton>
          <View onClick={this.onLike(item)}>
            <AtIcon color={item.liked ? 'red' : ''} value={item.liked ? 'iconfont icon-aixin1' : 'iconfont icon-aixin'} />
            {item.like_num || 0}
          </View>
          <View><AtIcon value="iconfont icon-pinglun" />{item.comment_num || 0}</View>
          <View><AtIcon value="iconfont icon-fenxiang" />{item.share_num || 0}</View>
        </View>
      </View>
    </View>);
  }
}
