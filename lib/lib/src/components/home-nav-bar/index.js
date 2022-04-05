"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const taro_ui_1 = require("taro-ui");
require("./index.scss");

class HomeNavBar extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            userInfo: {},
            clicked: false,
            location: '广州市',
            nav_bar_style: {
                height: `${this.getStatusBarHeight() + 50}px`,
                paddingTop: `${this.getStatusBarHeight() - 8}px`,
            },
        };
        this.canJumpToChoose = () => true;
    }
    getStatusBarHeight() {
        var _a;
        return ((_a = taro_1.default.getSystemInfoSync()) === null || _a === void 0 ? void 0 : _a.statusBarHeight) || 80;
    }
    subString(str) {
        if (str && str.length >= 10) {
            return str.substring(0, 10);
        }
        else
            return str;
    }
    handleAvatarClick() {
        taro_1.default.navigateTo({ url: "/pages/user/index" });
    }
    render() {
        const { userInfo } = this.props;
        const { nav_bar_style } = this.state;
        return (react_1.default.createElement(components_1.Block, null, react_1.default.createElement(components_1.View, { style: nav_bar_style, className: "home-nav-bar" }, react_1.default.createElement(components_1.Image, { onClick: this.handleAvatarClick, className: "avatar-my", src: userInfo.avatar }), react_1.default.createElement(components_1.Navigator, { url: "/pages/search/index", className: "input" }, react_1.default.createElement(taro_ui_1.AtIcon, { className: "icon", size: "18", color: "#666", value: "search" }), react_1.default.createElement(components_1.Text, { className: "txt" }, "\u641C\u70B9\u597D\u73A9\u7684 100+"))), react_1.default.createElement(components_1.View, { style: nav_bar_style }), react_1.default.createElement(components_1.View, null)));
    }
}
exports.default = HomeNavBar;
// # sourceMappingURL=index.js.map
