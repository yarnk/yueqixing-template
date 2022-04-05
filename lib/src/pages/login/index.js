"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const _utils_1 = require("@utils");
const user = require("@utils/user");
require("./index.scss");
const taro_ui_1 = require("taro-ui");

class Login extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {};
        this.accountLogin = () => {
            taro_1.default.navigateTo({
                url: "/pages/login/account/index"
            }).then();
        };
        this.wxLogin = () => {
            taro_1.default.getUserProfile({
                desc: '登录认证',
                success: e => {
                    console.log('e', e);
                    if (e.userInfo == undefined) {
                        (0, _utils_1.setGlobalData)('hasLogin', false);
                        (0, _utils_1.showErrorToast)('微信登录失败');
                        return;
                    }
                    user.checkLogin().catch(() => {
                        console.log('登录成功');
                        user.loginByWechatMini(e.userInfo).then(() => {
                            (0, _utils_1.setGlobalData)('hasLogin', true);
                            taro_1.default.navigateBack({
                                delta: 1
                            }).then();
                        }).catch(() => {
                            (0, _utils_1.setGlobalData)('hasLogin', false);
                            (0, _utils_1.showErrorToast)('微信登录失败');
                        });
                    });
                }
            });
        };
    }
    render() {
        return (react_1.default.createElement(components_1.View, null,
            react_1.default.createElement(components_1.View, { className: "login-box" },
                react_1.default.createElement(taro_ui_1.AtButton, { className: "wechat-login-btn", onClick: this.wxLogin }, "\u5FAE\u4FE1\u5FEB\u901F\u767B\u5F55"),
                react_1.default.createElement(taro_ui_1.AtButton, { type: "primary", className: "account-login-btn", onClick: this.accountLogin }, "\u8D26\u53F7\u5BC6\u7801\u767B\u5F55"))));
    }
}
exports.default = Login;
// # sourceMappingURL=index.js.map
