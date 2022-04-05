"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const user_home_1 = require("./user-home");

class UserLayout extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    componentWillMount() { }
    componentDidMount() { }
    // @ts-ignore
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }
    getElement() {
        const { pageConfig, isShowConfig, userInfo, order } = this.props;
        let newPageConfig = pageConfig;
        if (!isShowConfig && pageConfig) {
            newPageConfig = pageConfig.filter(f => f.type !== 'config');
        }
        // console.log('newPageConfig', newPageConfig);
        return newPageConfig.map((item, index) => {
            // console.log('==item', item);
            if (item.type === 'my') {
                return react_1.default.createElement(user_home_1.default, { key: item.type + index, config: item, userInfo: userInfo, order: order });
            }
            return react_1.default.createElement(components_1.Block, { key: item.type + index }, "x");
        });
    }
    render() {
        // console.log('layout-config', pageConfig, this)
        return (react_1.default.createElement(components_1.Block, null, this.getElement()));
    }
}
exports.default = UserLayout;
// # sourceMappingURL=index.js.map
