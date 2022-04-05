import React,{ Component } from "react";
import { getArticleDetailApi } from "../../api/article";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import ArticleDetail from "@components/article-detail";

export default class ArticleIndex extends Component<any, any>{

  state ={
    article:{
      id:undefined
    }
  }
  instance = getCurrentInstance()
  componentDidShow(){
    // @ts-ignore
    const id = this.instance.router.params.id;
    console.log(id);
     getArticleDetailApi({ id:id }).then(res=>{
       console.log(res);
       // @ts-ignore
       this.setState({ article:res.result });
       Taro.setNavigationBarTitle({
         // @ts-ignore
         title: res.result.title || res.result.content.substring(0)
       });
     });
  }

  render() {
    const { article } = this.state;
    return (
      <view className="at-article">{
        article.id && <ArticleDetail article={article} />
        }
      </view>
    );
  }
}
