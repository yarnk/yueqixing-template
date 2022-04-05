import React, { Component } from "react";
import { Image, Navigator, Text, View } from "@tarojs/components";
import ArticleListBottom from "@components/article-list-bottom";
import ArticleItemHeader from "@components/article-item-header";
import { AtIcon, AtTag } from "taro-ui";
import ArticleComment from "@components/article-comment";
import "./index.scss";
import { HOST } from "../../constants/service";
import Taro from "@tarojs/taro";

export default class ArticleDetail extends Component<any, any> {
  state: {
    item: {},

  }
  onImageClick = (val) =>{
    const { images } = this.props.article;
    console.log("图片被点击",val,images);
    let imgArr = [];
    images.map(item=>{
      // @ts-ignore
      imgArr.push(HOST + item);
    });
    return () =>{
      Taro.previewImage({
        urls: imgArr,
        current: HOST + val
      });
    };

  }
  coverImages(item){
    let arr = [];
    console.log("DETAIL",item.images);
    if (item.images != undefined && item.images != ""){
      console.log("解析图片1");
      arr = item.images.split(",");
    }
    item.images = arr;
    return item;
  }
  render() {
    let { article } = this.props;
    article = this.coverImages(article);
    return (
      <View>
        <View className="article-item">
          <ArticleItemHeader id={article.author.id} avatar={article.author.avatar} nickname={article.author.nickname} time={article.created_at} />
          <View className="article-body">
            <Text  userSelect className="article-content">{article.content}</Text>
            <View
              style={{ width:"100%" }}
              className={`${article.images.length < 3 ? "no-warp" : "images"}`}
            >
              {article.images && article.images instanceof Array && article.images.map((img, index) => {
                return (
                  <Image
                    mode={article.images.length == 1 ? "aspectFit" : "aspectFill"}
                    lazyLoad
                    onClick={this.onImageClick(img)}
                    key={index}
                    src={HOST +  img}
                    className={`${
                      article.images.length == 1 ? "one-img" : "img-view"
                    }`}
                  />
                );
              })}
            </View>
          </View>
          {article.location && <AtTag size="small" className="location-tag">
            <View className="tag-content">
              <AtIcon size={15} customStyle={{ marginRight: "5px" }} value="iconfont icon-dingwei" />
              <Text style={{ fontSize:"14px" }}>
                {article.location}
                {article.distance && " | " + article.distance }
              </Text>
            </View>
          </AtTag>}
          <ArticleListBottom item={article} />
        </View>
        <ArticleComment />
      </View>
    );
  }
};
