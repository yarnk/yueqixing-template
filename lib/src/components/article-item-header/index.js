"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const taro_ui_1 = require("taro-ui");
const time_util_1 = require("@utils/time-util");
require("./index.scss");

class ArticleItemHeader extends react_1.Component {
    render() {
        const { avatar, nickname, time, location, distance } = this.props;
        return (react_1.default.createElement(components_1.View, null,
            react_1.default.createElement(components_1.View, { className: "author-header" },
                react_1.default.createElement(components_1.View, { className: "left-col" },
                    react_1.default.createElement(components_1.Image, { className: "avatar", src: avatar }),
                    react_1.default.createElement(components_1.View, { className: "text-col" },
                        react_1.default.createElement(components_1.Text, { className: "nickname" }, nickname),
                        react_1.default.createElement(components_1.View, { className: "date" },
                            react_1.default.createElement(components_1.Text, null, (0, time_util_1.diffDate)(time)),
                            react_1.default.createElement(components_1.Text, null,
                                react_1.default.createElement(taro_ui_1.AtIcon, { value: "iconfont icon-weizhi" }),
                                location)))),
                react_1.default.createElement(components_1.View, { className: "right-col" },
                    react_1.default.createElement(taro_ui_1.AtButton, { size: "small", className: "flow-btn" },
                        react_1.default.createElement(taro_ui_1.AtIcon, { size: "12", value: "add" }),
                        "\u5173\u6CE8")))));
    }
}
exports.default = ArticleItemHeader;
;
// # sourceMappingURL=index.js.map
