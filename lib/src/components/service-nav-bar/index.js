"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const taro_ui_1 = require("taro-ui");
require("./index.scss");

class ServiceNavBar extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            clicked: false,
            location: '广州市',
            nav_bar_style: {
                height: `${this.getStatusBarHeight() + 50}px`,
                paddingTop: `${this.getStatusBarHeight() - 8}px`,
            },
        };
        this.canJumpToChoose = () => true;
        // 选择定位
        this.chooseLocation = () => {
            const than = this;
            if (!this.canJumpToChoose())
                return;
            taro_1.default.authorize({
                scope: 'scope.userLocation',
                success: function () {
                    // 用户已经同意小程序使用定位功能，后续调用 Taro.chooseLocation 接口不会弹窗询问
                    taro_1.default.chooseLocation({
                        success(ret) {
                            const _position = Object.assign(Object.assign({}, ret), { location: ret.name });
                            than.setState({ location: (_position.name ? _position.name : _position.address) });
                            console.log(_position);
                        }
                    });
                },
                fail: function (err) {
                    var _a;
                    if (((_a = err === null || err === void 0 ? void 0 : err.errMsg) === null || _a === void 0 ? void 0 : _a.indexOf('auth deny')) > -1) {
                        taro_1.default.showToast({ title: '请在小程序页面右上角 - 更多 - 设置里允许小程序使用定位权限~' }).then();
                    }
                }
            });
        };
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
    render() {
        const { nav_bar_style, clicked, location } = this.state;
        return (react_1.default.createElement(components_1.Block, null,
            react_1.default.createElement(components_1.View, { style: nav_bar_style, className: "service-nav-bar" },
                react_1.default.createElement(components_1.View, { className: "nav-address", onClick: this.chooseLocation },
                    react_1.default.createElement(taro_ui_1.AtIcon, { value: "map-pin", size: "small" }),
                    react_1.default.createElement(components_1.Text, null, this.subString(location)),
                    react_1.default.createElement(taro_ui_1.AtIcon, { value: clicked ? "chevron-up" : "chevron-down", size: 10 }))),
            react_1.default.createElement(components_1.View, { style: nav_bar_style })));
    }
}
exports.default = ServiceNavBar;
// # sourceMappingURL=index.js.map
