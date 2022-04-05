import React,{ Component } from "react";
import { View } from "@tarojs/components";
import ArticleItem from "@components/article-item";
import "./index.scss";
import { AtLoadMore } from "taro-ui";

export default class ArticleList extends Component<any, any> {
  state: {
    moreStatus: 'more',
    article_list: []
  }
  getArticleList = (cate) =>{
    console.log("cate",cate);
  }
  handleClick () {
    // 开始加载
    this.setState({
      moreStatus: 'loading'
    });
    // 模拟异步请求数据
    setTimeout(() => {
      // 没有更多了
      this.setState({
        moreStatus: 'noMore'
      });
    }, 2000);
  }

  render() {
    const { article_list } =  this.props;
    return (
      <View>
        <View className="article-list">
          {
            article_list && article_list.map(item => {
              if (!item.id){
                return;
              }
              return(
                <View key={item.id}>
                    <ArticleItem item={item} />
                </View>
              );
            })
          }
        </View>
        <AtLoadMore onClick={this.handleClick}/>
      </View>
    );
  }
};
