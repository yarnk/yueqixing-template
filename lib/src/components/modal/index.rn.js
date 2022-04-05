"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-10 23:36:03
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const modal_1 = require("@ant-design/react-native/lib/modal");
require("./index.scss");
const constant_1 = require("./constant");

const TaroModal = (props) => {
    const { visible = false, closable = false, onClose = () => { }, closeIconStyle = {}, closeIconName = '', animationType = 'fade' } = props;
    return (react_1.default.createElement(modal_1.default
    // @ts-ignore
    , Object.assign({
        // @ts-ignore
        visible: visible, animationType: animationType, style: {
            width: '80%',
        } }, props, { closable: false }),
        !closable && (react_1.default.createElement(components_1.View, { className: `close-icon-box ${closeIconName}`, onClick: onClose, style: closeIconStyle },
            react_1.default.createElement(components_1.Image, { src: constant_1.CLOSE_ICON, className: "close-icon" }))),
        react_1.default.createElement(components_1.View, { className: "taro-modal-content" }, props.children)));
};
TaroModal.options = {
    addGlobalClass: true,
};
exports.default = TaroModal;
// # sourceMappingURL=index.rn.js.map
