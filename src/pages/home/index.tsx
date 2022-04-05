import React, { Component } from "react";
import { Image, Swiper, SwiperItem, View } from '@tarojs/components';
import { AtFab, AtIcon, AtTabs, AtTabsPane } from "taro-ui";
import * as images from '../../static/images/index';
import HomeNavBar from "@components/home-nav-bar";
import Taro from "@tarojs/taro";
import ArticleList from "@components/article-list";
import { getArticleListApi } from "../../api/article";
import { navigateToCheck } from "@utils/app";
import './index.scss';


export default class HomePage extends Component<any, any> {
  state = {
    userInfo: {},
    article_num: 100,
    article_query: {
      limit: 10,
      start_at: '',
      end_at: '',
      next_index: '',
      cate_id: null,
      keywords: ''
    },
    tab_list: [],
    category_list: [
      { id: 1, title: '活动' },
      { id: 2, title: '关注' },
      { id: 3, title: '热点' },
      { id: 4, title: '附近' },
      { id: 5, title: '测评' },
      { id: 6, title: '安全骑行' },
      { id: 16, title: '玩车' },
      { id: 7, title: '广州' },
      { id: 8, title: '新车' }],
    current_tab: 1,
    article_list: []
  }

  componentDidShow() {
    const { article_query } = this.state;
    this.forTabs();
    let userInfo = Taro.getStorageSync('user_info');
    if (userInfo) {
      this.setState({ userInfo: { avatar: userInfo.avatar } });
    }
    // 获取对应分类的文章
    getArticleListApi(article_query).then(res => {
      article_query.next_index = "";
      this.setState({
        // @ts-ignore
        article_list: res.result.items,
        article_query
      });
    });

  }

  forTabs() {
    const { current_tab, article_query } = this.state;
    // 获取后台分类数据
    let tabs = [{}];
    tabs = [];
    this.state.category_list.map((cate, index) => {
      if (current_tab === index) {
        // @ts-ignore
        article_query.cate_id = cate.id;
        this.setState({ article_query });
      }
      tabs.push({ title: cate.title });
    });
    this.setState({
      tab_list: tabs
    });
    // 遍历成tab
  }

  switchTab = (index, env) => {
    console.log(index, env);
    const { category_list, article_query } = this.state;
    this.setState({
      current_tab: index,
    });
    let curr = category_list[index];
    // @ts-ignore
    article_query.cate_id = curr.id;
    // 获取对应分类的文章
    getArticleListApi(article_query).then(res => {
      article_query.next_index = "";
      console.log("res", res, curr, article_query);
      this.setState({
        // @ts-ignore
        article_list: res.result.items,
        article_query
      });
    });
  }

  showMore = () => {

  }

  toPublish() {
    navigateToCheck("/pages/article/publish/index");
  }

  render() {
    const { article_list, tab_list, current_tab, userInfo } = this.state;
    return (
      <View>
        <HomeNavBar userInfo={userInfo} />
        <View>
          <AtTabs scroll current={current_tab} tabList={tab_list} onClick={this.switchTab.bind(this)} />
        </View>
        <Swiper
          className="home-banner"
          indicatorColor="#999999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <Image mode="scaleToFill" src={images.banner1} />
          </SwiperItem>
          <SwiperItem>
            <Image mode="scaleToFill" src={images.banner2} />
          </SwiperItem>
          <SwiperItem>
            <Image mode="scaleToFill" src={images.banner3} />
          </SwiperItem>
        </Swiper>
        <AtFab onClick={this.toPublish} className="publish-article-btn">
          <AtIcon className="at-fab__icon" value="add" />
        </AtFab>
        <View>
          <AtTabsPane current={current_tab} index={current_tab}>
            <ArticleList article_list={article_list} />
          </AtTabsPane>
        </View>
      </View>
    );
  }
}
