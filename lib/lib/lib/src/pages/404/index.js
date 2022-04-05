"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const taro_ui_1 = require("taro-ui");
const taro_1 = require("@tarojs/taro");

class NotFound extends react_1.Component {
    toIndexPage() {
        taro_1.default.navigateBack({ delta: 1 }).then();
    }
    render() {
        return (react_1.default.createElement(components_1.View, null, react_1.default.createElement(components_1.Text, null, "\u627E\u4E0D\u5230\u9875\u9762"), react_1.default.createElement(taro_ui_1.AtButton, { onClick: this.toIndexPage, type: "primary" }, "\u8FD4\u56DE")));
    }
}
exports.default = NotFound;
// # sourceMappingURL=index.js.map
