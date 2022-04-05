"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const taro_ui_1 = require("taro-ui");
const images = require("../../static/images/index");

class ServiceMenu extends react_1.Component {
    render() {
        return (react_1.default.createElement(components_1.View, null, react_1.default.createElement(taro_ui_1.AtGrid, { columnNum: 4, hasBorder: false, data: [
                {
                    image: images.menu1,
                    value: '车友圈'
                },
                {
                    image: images.menu3,
                    value: '网点服务'
                },
                {
                    image: images.menu2,
                    value: '上牌指引'
                },
                {
                    image: images.menu6,
                    value: '车辆投诉'
                },
                {
                    image: images.menu4,
                    value: '自媒体'
                },
                {
                    image: images.menu5,
                    value: '配件'
                },
                {
                    image: images.menu1,
                    value: '维修'
                },
                {
                    image: images.menu2,
                    value: '跑腿'
                }
            ] })));
    }
}
exports.default = ServiceMenu;
// # sourceMappingURL=index.js.map
