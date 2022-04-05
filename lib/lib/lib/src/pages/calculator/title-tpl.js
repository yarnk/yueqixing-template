"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleTpl = void 0;
const react_1 = require("react");
const components_1 = require("@tarojs/components");
require("./index.scss");

const TitleTpl = props => {
    const { title = "", data = [], onWayClick = () => { }, activeIndex = 0 } = props;
    const handleClick = (item, index) => () => {
        onWayClick(item, index);
    };
    return (react_1.default.createElement(components_1.View, { className: "compute-way" }, react_1.default.createElement(components_1.Text, { className: "compute-way__title" }, title), react_1.default.createElement(components_1.View, { className: "compute-way__way-box" }, data.map((item, index) => {
        return (react_1.default.createElement(components_1.View, { key: item.id, onClick: handleClick(item, index), className: "pseudo-content" }, react_1.default.createElement(components_1.Text, { className: `pseudo-content__text ${activeIndex === item.index
                ? "pseudo-content__text-active"
                : ""}` }, item.name), activeIndex === item.index && (react_1.default.createElement(components_1.View, { className: "pseudo-content__pseudo" }))));
    }))));
};
exports.TitleTpl = TitleTpl;
exports.TitleTpl.options = {
    addGlobalClass: true
};
// # sourceMappingURL=title-tpl.js.map
