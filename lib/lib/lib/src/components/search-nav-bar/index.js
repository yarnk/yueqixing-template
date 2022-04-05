"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const taro_ui_1 = require("taro-ui");
require("./index.scss");

class SearchNavBar extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            clicked: false,
            current: 0,
            nav_bar_style: {
                height: `${this.getStatusBarHeight() + 50}px`,
                paddingTop: `${this.getStatusBarHeight() - 8}px`,
            },
        };
        this.canJumpToChoose = () => true;
    }
    handleClick(value) {
        this.setState({
            current: value
        });
    }
    getStatusBarHeight() {
        var _a;
        return ((_a = taro_1.default.getSystemInfoSync()) === null || _a === void 0 ? void 0 : _a.statusBarHeight) || 80;
    }
    render() {
        const tabList = [{ title: '新车' }, { title: '新国标' }, { title: '电摩' }, { title: '自行车' }];
        const { nav_bar_style, current } = this.state;
        return (react_1.default.createElement(components_1.Block, null, react_1.default.createElement(components_1.View, { style: nav_bar_style, className: "search-nav-bar" }, react_1.default.createElement(taro_ui_1.AtTabs, { className: "nav-tabs", current: current, tabList: tabList, onClick: this.handleClick.bind(this) })), react_1.default.createElement(components_1.View, { style: nav_bar_style })));
    }
}
exports.default = SearchNavBar;
// # sourceMappingURL=index.js.map
