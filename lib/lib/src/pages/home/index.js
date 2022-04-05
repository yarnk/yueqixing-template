"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const taro_ui_1 = require("taro-ui");
const images = require("../../static/images/index");
require("./index.scss");
const home_nav_bar_1 = require("@components/home-nav-bar");
const taro_1 = require("@tarojs/taro");

class HomePage extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            userInfo: {},
            article_num: 100,
            article_list: [
                {
                    id: 1,
                    image: '',
                    author_nick: '雅迪车主',
                    title: '雅迪DE8驾驶体验，原来可以这么',
                    plush_time: '2小时前',
                    view_num: 12139,
                    like_num: 12139,
                    liked: true
                }, {
                    id: 2,
                    image: '',
                    author_nick: '小牛车主',
                    title: '大佬们好，请问我这个轮胎换什么花纹防滑效果好一些，最近路滑要送孩子上学。',
                    plush_time: '14小时前',
                    view_num: 12345,
                    like_num: 241,
                    liked: false
                },
                {
                    id: 3,
                    image: '',
                    author_nick: '无敌009',
                    title: '009电池充电站，在这里外卖小哥能跑续航一整天！',
                    plush_time: '1天前',
                    view_num: 52123,
                    like_num: 23,
                    liked: true
                },
                {
                    id: 4,
                    image: '',
                    author_nick: '台铃勇士',
                    title: '台铃后刹异响，换个碟刹算是违法改装吗？',
                    plush_time: '2022-01-01',
                    view_num: 12139,
                    like_num: 24,
                    liked: false
                },
            ],
            tab_list: [],
            category_list: [
                { id: 1, title: '活动' },
                { id: 2, title: '关注' },
                { id: 3, title: '附近' },
                { id: 4, title: '测评' },
                { id: 5, title: '安全骑行' },
                { id: 6, title: '玩车' },
                { id: 7, title: '广州' },
                { id: 8, title: '新车' }
            ],
            current_tab: 1,
        };
    }
    componentDidShow() {
        let userInfo = taro_1.default.getStorageSync('user_info');
        if (userInfo) {
            this.setState({ userInfo: { avatar: userInfo.avatar } });
        }
    }
    forTabs() {
        // 获取后台分类数据
        // 遍历成tab
    }
    switchTab(index) {
        console.log(index);
        this.setState({
            current_tab: index,
        });
    }
    toPublish() {
        taro_1.default.navigateTo({ url: "/pages/article/publish/index" });
    }
    render() {
        const { article_list, tab_list, current_tab, userInfo } = this.state;
        return (react_1.default.createElement(components_1.View, null, react_1.default.createElement(home_nav_bar_1.default, { userInfo: userInfo }), react_1.default.createElement(components_1.View, null, react_1.default.createElement(taro_ui_1.AtTabs, { scroll: true, current: current_tab, tabList: tab_list, onClick: this.switchTab.bind(this) })), react_1.default.createElement(components_1.Swiper, { className: "home-banner", indicatorColor: "#999999", indicatorActiveColor: "#333", circular: true, indicatorDots: true, autoplay: true }, react_1.default.createElement(components_1.SwiperItem, null, react_1.default.createElement(components_1.Image, { mode: "scaleToFill", src: images.banner1 })), react_1.default.createElement(components_1.SwiperItem, null, react_1.default.createElement(components_1.Image, { mode: "scaleToFill", src: images.banner2 })), react_1.default.createElement(components_1.SwiperItem, null, react_1.default.createElement(components_1.Image, { mode: "scaleToFill", src: images.banner3 }))), react_1.default.createElement(taro_ui_1.AtFab, { onClick: this.toPublish, className: "publish-article-btn" }, react_1.default.createElement(taro_ui_1.AtIcon, { className: "at-fab__icon", value: "add" })), react_1.default.createElement(taro_ui_1.AtTabsPane, { current: current_tab, index: 0 }, react_1.default.createElement(components_1.View, { className: "article-list" }, article_list && article_list.map(item => {
            return react_1.default.createElement(components_1.View, { key: item.id, className: "article-item" }, react_1.default.createElement(components_1.View, { className: "author-header " }, react_1.default.createElement(components_1.View, { className: "left-col" }, react_1.default.createElement(components_1.Image, { className: "avatar", src: images.avatar }), react_1.default.createElement(components_1.View, { className: "text-col" }, react_1.default.createElement(components_1.Text, { className: "nickname" }, item.author_nick), react_1.default.createElement(components_1.Text, { className: "date" }, item.plush_time))), react_1.default.createElement(components_1.View, { className: "right-col" }, react_1.default.createElement(taro_ui_1.AtButton, { size: "small", className: "flow-btn" }, react_1.default.createElement(taro_ui_1.AtIcon, { size: "12", value: "add" }), "\u5173\u6CE8"))), react_1.default.createElement(components_1.Navigator, { className: "article-body", key: item.id, url: `/pages/article/index?id=${item.id}` }, react_1.default.createElement(components_1.Text, { className: "txt" }, item.title), react_1.default.createElement(components_1.Image, { mode: "bottom left", className: "image", src: images.articleImg })), react_1.default.createElement(components_1.View, { className: "article-footer" }, react_1.default.createElement(components_1.Text, { className: "left" }, "\u6D4F\u89C8", item.view_num, "\u6B21"), react_1.default.createElement(components_1.View, { className: "right" }, react_1.default.createElement(components_1.View, null, react_1.default.createElement(taro_ui_1.AtIcon, { value: "message" }), item.like_num), react_1.default.createElement(components_1.View, null, react_1.default.createElement(taro_ui_1.AtIcon, { color: item.liked ? 'red' : '', value: item.liked ? 'heart-2' : 'heart' }), item.like_num), react_1.default.createElement(components_1.View, null, react_1.default.createElement(taro_ui_1.AtIcon, { value: "share" })))));
        }))), react_1.default.createElement(taro_ui_1.AtTabsPane, { current: current_tab, index: 1 }, react_1.default.createElement(components_1.View, { style: "padding: 100px 50px;background-color: #FAFBFC;text-align: center;" }, "\u6807\u7B7E\u9875\u4E00\u7684\u5185\u5BB9"))));
    }
}
exports.default = HomePage;
// # sourceMappingURL=index.js.map
