"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const app = require("@utils/app");
require("./index.scss");
const app_1 = require("@utils/app");

class UserHome extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            userInfo: {}
        };
        this.handleAvatarClick = () => {
            if (!(0, app_1.isLogin)()) {
                (0, app_1.navigateToLogin)();
            }
        };
        this.handleOrder = (tab) => {
            try {
                taro_1.default.setStorageSync('tab', tab);
            }
            catch (e) {
            }
            app.navigateToCheck('/pages/user/order/index');
        };
        this.handlePowerClick = (child) => {
            if (child.url && child.type !== 'about') {
                app.navigateToCheck(child.url);
            }
            else {
                taro_1.default.navigateTo({ url: child.url });
            }
        };
    }
    render() {
        const { userInfo } = this.props;
        return (react_1.default.createElement(components_1.View, { className: "layout-my" },
            react_1.default.createElement(components_1.View, { style: { backgroundImage: `none` } },
                react_1.default.createElement(components_1.View, { className: "header-my center" },
                    react_1.default.createElement(components_1.Image, { onClick: this.handleAvatarClick, className: "avatar-my", src: userInfo.avatar }),
                    react_1.default.createElement(components_1.View, { className: "nickname" }, userInfo.nickname)))));
    }
}
exports.default = UserHome;
// # sourceMappingURL=index.js.map
