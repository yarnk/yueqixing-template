"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-10 23:36:13
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const taro_ui_1 = require("taro-ui");
require("./index.scss");
const components_1 = require("@tarojs/components");
const constant_1 = require("./constant");

const TaroModal = (props) => {
    const { visible = false, closable = false, onClose = () => { } } = props;
    return (react_1.default.createElement(taro_ui_1.AtModal, { isOpened: visible }, closable && (react_1.default.createElement(components_1.Image, { src: constant_1.CLOSE_ICON, onClick: onClose, className: "at-modal-content-close-iocn" })), react_1.default.createElement(components_1.View, { className: "at-modal-content" }, props.children)));
};
TaroModal.options = {
    addGlobalClass: true,
};
exports.default = TaroModal;
// # sourceMappingURL=index.js.map
