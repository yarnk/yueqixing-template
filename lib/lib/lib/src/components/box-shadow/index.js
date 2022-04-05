"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-10 23:36:40
 * @Last Modified by: qiuz
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const react_1 = require("react");
require("./index.scss");
const _utils_1 = require("@utils");

const BoxShadow = props => {
    const { shadowColor = "#000", shadowOffset = { width: 0, height: 0 }, shadowOpacity = 1, shadowRadius = 0, elevation = 1, boxShadow = "", style = {}, className = "" } = props, rest = __rest(props, ["shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "elevation", "boxShadow", "style", "className"]);
    let customeStyle = IS_RN
        ? {
            shadowColor,
            shadowOffset,
            shadowOpacity,
            shadowRadius,
            elevation
        }
        : {
            boxShadow
        };
    const propsStyle = Object.assign(customeStyle, ...((0, _utils_1.isArray)(style) ? style : [style]));
    return !IS_WEAPP ? (react_1.default.createElement(components_1.View, Object.assign({ className: `box-shadow__content ${className}`, style: propsStyle }, rest), props.children)) : (react_1.default.createElement(components_1.View, { className: `box-shadow__content ${className}`, style: propsStyle }, props.children));
};
BoxShadow.options = {
    addGlobalClass: true
};
exports.default = BoxShadow;
// # sourceMappingURL=index.js.map
