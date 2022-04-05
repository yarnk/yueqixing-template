"use strict";
/* eslint-disable react/jsx-curly-brace-presence */
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-10 23:38:52
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
require("./index.scss");
const _utils_1 = require("@utils");

let UIManager = {}, LinearGradient = null;
if (IS_RN) {
    LinearGradient = require("react-native-linear-gradient");
    UIManager = require("react-native").UIManager;
}
const TaroLinearGradient = props => {
    const { src = "", style = {}, color = "", className = "", onClick = () => { }, colors = [], angle = 180, useColors = false } = props;
    const len = colors.length;
    const LinearGradientColors = colors && len <= 0 ? ["#ffffff", "#ffffff"] : colors;
    if (IS_RN) {
        // 兼容低版本不支持 取第一个色值
        const customeStyle = { backgroundColor: color || LinearGradientColors[0] };
        const propsStyle = (0, _utils_1.isArray)(style)
            ? Object.assign(customeStyle, ...style)
            : Object.assign(customeStyle, style);
        // 如果有切图 以切图为主
        if (!src && UIManager["BVLinearGradient"]) {
            return (react_1.default.createElement(LinearGradient, Object.assign({}, props, { angle: angle, useAngle: !!angle, colors: LinearGradientColors }),
            // @ts-ignore
            react_1.default.createElement(components_1.View, Object.assign({}, props), props.children)));
        }
        return (react_1.default.createElement(components_1.View, { className: `linear-gradient__box ${className}`, style: propsStyle, onClick: onClick }, react_1.default.createElement(components_1.Image, { src: src, className: "linear-gradient__box__img" }), props.children));
    }
    let background = color;
    if (useColors) {
        const colorString = LinearGradientColors.map((colorStr, index) => `${colorStr} ${index === len - 1 ? "100" : (index / len) * 100}%`).join(",");
        background = `linear-gradient(${angle}deg, ${colorString})`;
    }
    return (react_1.default.createElement(components_1.View, { className: `linear-gradient__box ${IS_WEAPP ? "^" : ""}${className}`, style: Object.assign(Object.assign({}, (!src ? { background } : "")), style) }, src && (react_1.default.createElement(components_1.Image, { src: src, mode: "aspectFill", className: "linear-gradient__box__img" })), props.children));
};
TaroLinearGradient.options = {
    addGlobalClass: true
};
exports.default = TaroLinearGradient;
// # sourceMappingURL=index.js.map
