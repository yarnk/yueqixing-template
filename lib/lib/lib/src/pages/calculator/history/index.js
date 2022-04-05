"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
require("./index.scss");
const _components_1 = require("@components");
const _utils_1 = require("@utils");

class HouseLoanComputeMontylyPayments extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            historyList: []
        };
    }
    async componentDidMount() {
        const data = await (0, _utils_1.getStorageData)("LOAN_HISTORY") || {};
        this.setState({
            historyList: data
        });
    }
    render() {
        const { historyList = [] } = this.state;
        return (react_1.default.createElement(_components_1.SafeAreaView, { className: "history" }, react_1.default.createElement(_components_1.StatusBar, { backgroundColor: "#fff", barStyle: "dark-content" }), react_1.default.createElement(components_1.View, { className: "history-content" }, historyList.map((item, index) => {
            return (react_1.default.createElement(components_1.View, { key: index + "", className: "wrap" }, react_1.default.createElement(components_1.View, { className: "wrap-item" }, react_1.default.createElement(components_1.Text, { className: "title" }, "\u516C\u79EF\u91D1\u8D37", item.accumulatFundYear, "\u5E74"), react_1.default.createElement(components_1.Text, { className: "amount" }, item.accumulatTotalPirce, "\u4E07")), react_1.default.createElement(components_1.View, { className: "wrap-item" }, react_1.default.createElement(components_1.Text, { className: "title" }, "\u5546\u4E1A\u8D37", item.commerceLoanYear, "\u5E74"), react_1.default.createElement(components_1.Text, { className: "amount" }, item.commerceTotalPirce, "\u4E07")), react_1.default.createElement(components_1.View, { className: "wrap-item" }, react_1.default.createElement(components_1.Text, { className: "title" }, item.payMonthStr), react_1.default.createElement(components_1.Text, { className: "amount" }, item.firstPay, "\u5143"))));
        }))));
    }
}
exports.default = HouseLoanComputeMontylyPayments;
// # sourceMappingURL=index.js.map
