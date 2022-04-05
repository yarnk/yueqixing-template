"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-01 13:55:57
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
require("./index.scss");
const constans_1 = require("../constans");
const _components_1 = require("@components");
const _utils_1 = require("@utils");

const HouseLoanComputeHeader = props => {
    const { way, houseTotal, tip, userLoanWay, downPayRate, equalInterestPayMonth, equalPrincipalPayMonth, goHistory, goMonthlyPayments } = props;
    return (react_1.default.createElement(components_1.View, { className: "_h_l_c-header__content" }, react_1.default.createElement(_components_1.LinearGradient, { locations: [0, 0.75, 1], src: constans_1.GRADIENT_BG, colors: ["#12BA83", "#12BA83", "#9AE7CD"], className: "_h_l_c-header-header-box", useColors: true, color: "linear-gradient(360deg,rgba(154,231,205,1) 0%, rgba(18,186,131,1) 20%, rgba(18,186,131,1) 100%)" }, react_1.default.createElement(components_1.Image, { src: constans_1.PERCENT_ICON, className: "_h_l_c-header-percent-icon" }), react_1.default.createElement(components_1.View, { className: "_h_l_c-header-header _h_l_c-header-weapp-header" }, react_1.default.createElement(components_1.View, { className: "_h_l_c-header-header__info" }, react_1.default.createElement(components_1.View, { className: "_h_l_c-header-info__title" }, react_1.default.createElement(components_1.Text, { className: "_h_l_c-header-info__title__text" }, "\u623F\u5C4B\u603B\u4EF7"), react_1.default.createElement(components_1.Text, { className: "_h_l_c-header-info__title__price",
        // 针对andriod文字偏下设置
        style: {
            // @ts-ignore
            includeFontPadding: false,
            textAlignVertical: "center"
        } }, way === 1 ? houseTotal : "--"), react_1.default.createElement(components_1.Text, { className: "_h_l_c-header-info__title__text" }, "\u4E07")), react_1.default.createElement(components_1.View, { className: "_h_l_c-header-history-btn", onClick: goHistory }, react_1.default.createElement(components_1.Text, { className: "_h_l_c-header-history-btn__text" }, "\u67E5\u770B\u5386\u53F2"), react_1.default.createElement(components_1.Image, { className: "_h_l_c-header-arrow-right", src: constans_1.RIGHT_ARROW_WHITE }))), react_1.default.createElement(components_1.Text, { className: "_h_l_c-header-header__tip" }, tip))), react_1.default.createElement(_components_1.BoxShadow, { shadowColor: "#E7EBEE", shadowOffset: {
            width: 0,
            height: 2
        }, shadowOpacity: 1, shadowRadius: 3.84, className: "_h_l_c-header-loan-info", elevation: 5, boxShadow: "0px 1px 5px 0px #E7EBEE" }, react_1.default.createElement(components_1.View, { className: "_h_l_c-header-loan-box" }, react_1.default.createElement(components_1.Text, { className: "_h_l_c-header-loan-box__title" }, "\u9996\u4ED8\u6B3E"), react_1.default.createElement(components_1.View, { className: "_h_l_c-header-loan-box__amount" }, react_1.default.createElement(components_1.Text, { className: "_h_l_c-header-loan-box__amount__number", numberOfLines: 1, style: {
            // @ts-ignore
            includeFontPadding: false,
            textAlignVertical: "center"
        } }, way === 1
        ? Math.floor((0, _utils_1.formatFloat)(houseTotal * downPayRate || 0, 1))
        : "--", way === 1 && (react_1.default.createElement(components_1.Text, { className: "_h_l_c-header-loan-info__unit" }, "\u4E07"))))), react_1.default.createElement(components_1.View, { className: "_h_l_c-header-loan-box _h_l_c-header-monty-pay" }, react_1.default.createElement(components_1.Text, { className: "_h_l_c-header-loan-box__title" }, userLoanWay === "等额本息"
        ? "每月应还(等额本息)"
        : "首月应还(等额本金)"), react_1.default.createElement(components_1.View, { className: "_h_l_c-header-loan-box__amount" }, react_1.default.createElement(components_1.Text, { className: "_h_l_c-header-loan-box__amount__number _h_l_c-header-loan-box__amount__number-right", style: {
            // @ts-ignore
            includeFontPadding: false,
            textAlignVertical: "bottom"
        } }, userLoanWay === "等额本息"
        ? equalInterestPayMonth
        : equalPrincipalPayMonth, react_1.default.createElement(components_1.Text, { className: "_h_l_c-header-loan-info__unit" }, "\u5143"))), react_1.default.createElement(components_1.View, { className: "_h_l_c-header-monty-pay__tip", onClick: goMonthlyPayments }, react_1.default.createElement(components_1.Text, { className: "_h_l_c-header-monty-pay__tip__text" }, "\u5BF9\u6BD4", userLoanWay === "等额本息" ? "等额本金" : "等额本息", "\u6708\u4F9B"), react_1.default.createElement(components_1.Image, { className: "_h_l_c-header-arrow-right", src: constans_1.RIGHT_ARROW }))))));
};
HouseLoanComputeHeader.options = {
    addGlobalClass: true
};
exports.default = react_1.default.memo(HouseLoanComputeHeader);
// # sourceMappingURL=index.js.map
