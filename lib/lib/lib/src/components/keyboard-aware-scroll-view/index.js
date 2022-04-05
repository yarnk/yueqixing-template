"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-10 23:38:41
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
require("./index.scss");

let KeyboardAwareScrollView;
if (IS_RN) {
    KeyboardAwareScrollView = require("@codler/react-native-keyboard-aware-scroll-view")
        .KeyboardAwareScrollView;
}
function TaroKeyboardAwareScrollView(props) {
    if (IS_RN) {
        return (react_1.default.createElement(KeyboardAwareScrollView, Object.assign({}, props), props.children));
    }
    const { className = "" } = props;
    return react_1.default.createElement(components_1.View, { className: `${className}` }, props.children);
}
TaroKeyboardAwareScrollView.options = {
    addGlobalClass: true
};
exports.default = TaroKeyboardAwareScrollView;
// # sourceMappingURL=index.js.map
