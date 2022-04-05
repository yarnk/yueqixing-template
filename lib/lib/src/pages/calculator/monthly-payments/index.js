"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-10 23:41:04
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const constans_1 = require("../constans");
require("./index.scss");
const _utils_1 = require("@utils");
const _components_1 = require("@components");

class HouseLoanComputeMontylyPayments extends react_1.Component {
    constructor(props) {
        super(props);
        this.page = 1;
        this.init = async (data = {}) => {
            try {
                const { equalInterestMonthList = [], equalPrincipalMonthList = [] } = data;
                this.total = Math.floor(equalInterestMonthList.length / 10);
                this.setState(Object.assign({ interestList: equalInterestMonthList.slice(0, 10), principalList: equalPrincipalMonthList.slice(0, 10) }, data));
            }
            catch (error) {
                console.log(error);
            }
        };
        this.seleceFirst = (data) => async () => {
            await taro_1.default.setStorage({ key: "USER_LOAN_WAY", data });
            this.setState({
                checked: data.type
            }, () => {
                taro_1.default.showToast({
                    title: `月供将以${data.title}的形式展示`,
                    icon: "none"
                });
            });
        };
        this.onScrollToLower = () => {
            if (this.page >= this.total)
                return;
            this.page++;
            const { equalInterestMonthList, equalPrincipalMonthList } = this.state;
            this.setState({
                interestList: equalInterestMonthList.slice(0, this.page * 10),
                principalList: equalPrincipalMonthList.slice(0, this.page * 10)
            });
        };
        this.state = {
            checked: "equalInterest",
            equalInterest: {},
            equalPrincipal: {},
            equalInterestMonthList: [],
            interestList: [],
            assessInfo: null,
            equalPrincipalMonthList: [],
            principalList: [],
            tip: "",
            loanAmount: 0
        };
    }
    async componentDidMount() {
        const params = (0, _utils_1.getGlobalData)("COMPUTE_RESULT") || {};
        this.init(params);
        const { type = "equalInterest" } = (await (0, _utils_1.getStorageData)("USER_LOAN_WAY")) || {};
        this.setState({
            checked: type
        });
    }
    render() {
        const { checked, interestList, principalList, loanAmount, tip } = this.state;
        return (react_1.default.createElement(_components_1.SafeAreaView, { className: "montyly-payments" }, react_1.default.createElement(_components_1.StatusBar, { backgroundColor: "#fff", barStyle: "dark-content" }), react_1.default.createElement(components_1.ScrollView, { className: "scroll-content", scrollY: true, enableBackToTop: true, onScrollToLower: this.onScrollToLower }, react_1.default.createElement(components_1.View, { className: "content" }, react_1.default.createElement(components_1.View, { className: "title" }, react_1.default.createElement(components_1.Text, { className: "title-text" }, "\u8D37\u6B3E\u603B\u989D"), react_1.default.createElement(components_1.Text, { className: "title-amount" }, loanAmount), react_1.default.createElement(components_1.Text, { className: "title-text" }, "\u4E07")), react_1.default.createElement(components_1.Text, { className: "tip-info" }, tip), react_1.default.createElement(components_1.View, { className: "compared" }, constans_1.MONTY_DATA.map((item) => {
            return (react_1.default.createElement(components_1.View, { className: "equal-box", key: item.type }, react_1.default.createElement(components_1.Text, { className: "equal-box-title" }, item.title), react_1.default.createElement(components_1.View, { className: "equal-box-wrap" }, react_1.default.createElement(components_1.Text, { className: "equal-box-wrap-title" }, constans_1.MONTY_TITLE[item.type]), react_1.default.createElement(components_1.Text, { className: "amount" }, this.state[item.type].payMonth)), react_1.default.createElement(components_1.View, { className: "equal-box-wrap" }, react_1.default.createElement(components_1.Text, { className: "equal-box-wrap-title" }, "\u5229\u606F\u603B\u989D\uFF08\u4E07\u5143\uFF09"), react_1.default.createElement(components_1.Text, { className: "amount" }, this.state[item.type].totalInterest)), react_1.default.createElement(components_1.View, { className: "equal-box-wrap" }, react_1.default.createElement(components_1.Text, { className: "equal-box-wrap-title" }, "\u7279\u70B9"), react_1.default.createElement(components_1.Text, { className: "advant" }, item.type !== "equalPrincipal"
                ? "每月月供稳定"
                : `每月递减${this.state[item.type].monthDecline}元`)), react_1.default.createElement(components_1.View, { className: "equal-box-wrap btn-wrap", onClick: this.seleceFirst(item) }, react_1.default.createElement(components_1.Image, { className: "radio", src: item.type === checked ? constans_1.CHECK_RIDIO_Y : constans_1.CHECK_RIDIO }), react_1.default.createElement(components_1.Text, { className: "btn-wrap-text" }, "\u4F18\u5148\u770B", item.title))));
        })), react_1.default.createElement(components_1.View, { className: "pay-monty" }, react_1.default.createElement(components_1.Text, { className: "pay-monty-title" }, "\u8FD8\u6B3E\u7EC6\u5219"), react_1.default.createElement(components_1.View, { className: "line line-first" }, react_1.default.createElement(components_1.Text, { className: "line-text line-monty" }), react_1.default.createElement(components_1.Text, { className: "line-text line-amount line-first-title" }, "\u7B49\u989D\u672C\u606F"), react_1.default.createElement(components_1.Text, { className: "line-text line-amount line-first-title" }, "\u7B49\u989D\u672C\u91D1")), interestList.map((item, index) => {
            return (react_1.default.createElement(components_1.View, { key: index + "", className: `line ${index % 2 === 0 ? "line-even" : "line-odd"}` }, react_1.default.createElement(components_1.Text, { className: "line-text line-monty" }, "\u7B2C", index + 1, "\u4E2A\u6708"), react_1.default.createElement(components_1.Text, { className: "line-text line-amount" }, "\uFFE5", item), react_1.default.createElement(components_1.Text, { className: "line-text line-amount" }, "\uFFE5", principalList[index])));
        }))))));
    }
}
exports.default = HouseLoanComputeMontylyPayments;
// # sourceMappingURL=index.js.map
