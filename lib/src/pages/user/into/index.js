"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const images = require("../../../static/images");
const taro_ui_1 = require("taro-ui");

class IntoPlatform extends react_1.Component {
    render() {
        return (react_1.default.createElement(components_1.View, null,
            react_1.default.createElement(taro_ui_1.AtGrid, { columnNum: 2, data: [
                    {
                        image: images.menu1,
                        value: '自媒体入驻'
                    },
                    {
                        image: images.menu3,
                        value: '商家入驻'
                    },
                    {
                        image: images.menu2,
                        value: '抖音达人'
                    },
                    {
                        image: images.menu2,
                        value: '政务服务入驻'
                    }
                ] })));
    }
}
exports.default = IntoPlatform;
// # sourceMappingURL=index.js.map
