"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const taro_1 = require("@tarojs/taro");
const images = require("../../static/images/index");
require("./index.scss");
const user_home_1 = require("@components/user-layout/user-home");
const _utils_1 = require("@utils");
const login_1 = require("../../api/login");
const components_1 = require("@tarojs/components");
const taro_ui_1 = require("taro-ui");

class UserCenter extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            userInfo: {
                avatar: images.avatar,
                nickname: '未登录',
            },
            currentUserTab: -1,
            hasLogin: false
        };
        this.toLogin = () => {
            taro_1.default.navigateTo({ url: '/pages/login/index' }).then();
        };
        this.handleClick = () => {
        };
        this.handleContactClick = () => {
        };
        this.handleIntoClick = () => {
            taro_1.default.navigateTo({ url: "/pages/user/into/index" }).then();
        };
        this.handleTabClick = (index) => {
            this.setState({ currentUserTab: index });
        };
        this.handelLogout = () => {
            let than = this;
            taro_1.default.showModal({
                title: '',
                confirmColor: '#b4282d',
                content: '退出登录？',
                success: function (res) {
                    if (!res.confirm) {
                        return;
                    }
                    (0, login_1.logout)().then(() => {
                        (0, _utils_1.setGlobalData)('hasLogin', false);
                        taro_1.default.removeStorageSync('token');
                        taro_1.default.removeStorageSync('user_info');
                        taro_1.default.reLaunch({
                            url: '/pages/home/index'
                        }).then(() => {
                            than.setState({ hasLogin: false });
                        });
                    });
                }
            }).then();
        };
    }
    componentDidShow() {
        console.log('获取用户信息');
        // 获取用户的登录信息
        let userInfo = taro_1.default.getStorageSync('user_info');
        if (userInfo != '' && userInfo != null && userInfo != {}) {
            this.setState({
                userInfo: userInfo,
                hasLogin: true
            }, () => {
                // todo 从后台获取用户主页数据
            });
        }
        else {
            this.setState({
                hasLogin: false
            });
        }
    }
    render() {
        const { userInfo, hasLogin, currentUserTab } = this.state;
        return (react_1.default.createElement(components_1.View, { style: { backgroundColor: '#dedede', paddingBottom: "20px" } }, react_1.default.createElement(user_home_1.default, { userInfo: userInfo }), react_1.default.createElement(taro_ui_1.AtTabBar, { className: "user-tab-bar", selectedColor: "#f66b20", tabList: [
                { title: '我的创作', iconType: 'edit' },
                { title: '我的收藏', iconType: 'star', selectedIconType: 'star-2' },
                { title: '互动消息', iconType: 'message' },
                { title: '系统通知', iconType: 'bell', text: '100', max: 99 }
            ], onClick: this.handleTabClick.bind(this), current: currentUserTab }), react_1.default.createElement(taro_ui_1.AtList, { className: "menu-list" }, react_1.default.createElement(taro_ui_1.AtListItem, { title: "\u8D26\u53F7\u7BA1\u7406", extraText: "\u7ED1\u5B9A\u7BA1\u7406", arrow: "right", onClick: this.handleClick }), react_1.default.createElement(taro_ui_1.AtListItem, { title: "\u5B89\u5168\u4E2D\u5FC3", extraText: "\u4FEE\u6539\u5BC6\u7801", arrow: "right", onClick: this.handleClick }), react_1.default.createElement(taro_ui_1.AtListItem, { title: "\u5730\u5740\u7BA1\u7406", arrow: "right" }), react_1.default.createElement(taro_ui_1.AtListItem, { title: "\u5386\u53F2\u6D4F\u89C8" })), react_1.default.createElement(taro_ui_1.AtList, { className: "menu-list" }, react_1.default.createElement(taro_ui_1.AtListItem, { title: "\u5165\u9A7B\u7533\u8BF7", arrow: "right", onClick: this.handleIntoClick })), react_1.default.createElement(taro_ui_1.AtList, { className: "menu-list" }, react_1.default.createElement(taro_ui_1.AtListItem, { title: "\u95EE\u9898\u53CD\u9988" }), react_1.default.createElement(taro_ui_1.AtListItem, { title: "\u66F4\u591A\u5E2E\u52A9", onClick: this.handleClick }), react_1.default.createElement(taro_ui_1.AtListItem, { title: "\u8BBE\u7F6E", arrow: "right" })), react_1.default.createElement(taro_ui_1.AtList, { className: "menu-list" }, react_1.default.createElement(taro_ui_1.AtListItem, { title: "\u95EE\u9898\u53CD\u9988" }), react_1.default.createElement(taro_ui_1.AtListItem, { title: "\u66F4\u591A\u5E2E\u52A9", onClick: this.handleClick }), react_1.default.createElement(taro_ui_1.AtListItem, { title: "\u8BBE\u7F6E", arrow: "right" }), react_1.default.createElement(components_1.View, { className: "contact" }, react_1.default.createElement(taro_ui_1.AtButton, { className: "contact-btn", openType: "contact" }, "\u8054\u7CFB\u5BA2\u670D"))), react_1.default.createElement(components_1.View, null, hasLogin && react_1.default.createElement(taro_ui_1.AtButton, { className: "logout-btn", onClick: this.handelLogout }, "\u9000\u51FA\u767B\u5F55"))));
    }
}
exports.default = UserCenter;
// # sourceMappingURL=index.js.map
