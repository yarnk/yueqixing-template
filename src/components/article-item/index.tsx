import React, { Component } from "react";
import { Image, Navigator, Text, View } from "@tarojs/components";
import ArticleItemHeader from "@components/article-item-header";
import ArticleListBottom from "@components/article-list-bottom";
import { AtIcon, AtTag } from "taro-ui";
import "./index.scss";
import { HOST } from "../../constants/service";
import Taro from "@tarojs/taro";

export default class ArticleItem extends Component<any, any> {
  state: {
    item: {
      content: "",
      author: {
        avatar: "",
        nickname: ""
      },
      images: [],
      imageStyle: {
        width: "100%",
        height: "100%"
      }
    }
  }

  coverImages(item) {
    let arr = [];
    console.log("ITEM",item);
    if (item.images instanceof Array){
      return item;
    }
    if (item.images != undefined && item.images != "") {
      console.log("解析图片1",item.images);
      arr = item.images.split(",");
    }
    item.images = arr;
    return item;
  }

  getWidth = () => {
    Taro.onWindowResize(res => {
      console.log("onWindowResizeonWindowResizeonWindowResizeonWindowResizeonWindowResizeonWindowResize", res);
    });
  }

  render() {
    let { item } = this.props;
    item = this.coverImages(item);
    return (
      <View>
        <View className="article-item">
          <ArticleItemHeader
            id={item.author.id}
            avatar={item.author.avatar}
            nickname={item.author.nickname}
            time={item.created_at}
            location={item.location}
            distance={item.distance}
          />
          <Navigator className="article-body" url={`/pages/article/index?id=${item.id}`}>
            <Text userSelect className="article-content">{item.content}</Text>
            <View
              style={{ width:"100%" }}
              className={`${item.images.length < 3 ? "no-warp" : "images"}`}
            >
              {item.images && item.images instanceof Array && item.images.map((img, index) => {
                return (
                  <Image
                    mode={item.images.length == 1 ? "aspectFit" : "aspectFill"}
                    lazyLoad
                    key={index}
                    src={HOST +  img}
                    className={`${
                      item.images.length == 1 ? "one-img" : "img-view"
                    }`}
                  />
                );
              })}
            </View>
          </Navigator>
          {item.location && <AtTag size="small" className="location-tag">
            <View className="tag-content">
              <AtIcon size={15} customStyle={{ marginRight: "5px" }} value="iconfont icon-dingwei" />
              <Text style={{ fontSize: "14px" }}>
                {item.location}
                {item.distance && " | " + item.distance}
              </Text>
            </View>
          </AtTag>}
          <ArticleListBottom item={item} />
        </View>

      </View>
    );
  }
};
