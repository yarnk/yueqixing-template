"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-11-24 18:09:15
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const _utils_1 = require("@utils");

let StatusBar;
if (IS_RN && (0, _utils_1.isAndriod)()) {
    StatusBar = require('react-native').StatusBar;
}
function TaroStatusBar(props) {
    return StatusBar ? (react_1.default.createElement(StatusBar, Object.assign({}, props))) : (react_1.default.createElement(components_1.View, { style: { display: 'none' } }));
}
exports.default = TaroStatusBar;
// # sourceMappingURL=index.js.map
