"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-10 23:39:59
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
require("./index.scss");

let SafeAreaView;
if (process.env.TARO_ENV === "rn") {
    SafeAreaView = require("react-native-safe-area-context").SafeAreaView;
}
const TaroSafeAreaView = props => {
    const { className = "", style = {}, edges = ["right", "bottom", "left"] } = props;
    if (process.env.TARO_ENV === "rn") {
        return (react_1.default.createElement(SafeAreaView, { edges: edges, className: `safe-area-view ${className}`, style: style }, props.children));
    }
    return (react_1.default.createElement(components_1.View, { className: `safe-area-view ${className}`, style: Object.assign({}, style) }, props.children));
};
TaroSafeAreaView.options = {
    addGlobalClass: true
};
exports.default = TaroSafeAreaView;
// # sourceMappingURL=index.js.map
