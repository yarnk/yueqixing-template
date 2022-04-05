"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineWrap = void 0;
const react_1 = require("react");
const components_1 = require("@tarojs/components");
require("./index.scss");
const constans_1 = require("./constans");
const _components_1 = require("@components");

class LineWrap extends react_1.Component {
    constructor(props) {
        super(props);
        this.handlePickerChange = (data, index) => (value) => {
            const valueMap = data.range.filter((item) => item.value === Number(value[0]));
            this.props.onChangePicker(data, valueMap[0] || data.range[0], index);
        };
        this.handleInputChange = (item, index) => (e) => {
            let { value } = e.detail;
            if (item.inputType === "number" || item.keyboardType === "number-pad") {
                value = parseInt(value, 10);
            }
            this.props.onInputChange(item, value, index);
        };
        this.showExplain = (data) => () => {
            this.setState({
                explainData: data,
                visible: true
            });
        };
        this.closeModal = () => {
            this.setState({
                visible: false
            });
        };
        this.onMoreClick = (_url) => () => { };
        this.onFocus = (index) => () => {
            const { focus } = this.state;
            focus[index] = true;
            this.setState({
                focus
            });
        };
        this.onBlur = (loan, index) => (e) => {
            const { focus } = this.state;
            focus[index] = false;
            this.setState({
                focus
            }, () => {
                loan.blurCheck && this.props.onBlur(e);
            });
        };
        this.state = {
            visible: false,
            explainData: {},
            focus: []
        };
    }
    render() {
        const { data, type } = this.props;
        const { visible, explainData, focus } = this.state;
        const list = data.filter(_item => type.indexOf(_item && _item.renderType) > -1);
        return (react_1.default.createElement(components_1.View, { className: "loan-content" },
            explainData.title && (react_1.default.createElement(_components_1.Modal, { className: "compute-modal", visible: visible, closable: true, transparent: true, animationType: "none", onClose: this.closeModal },
                react_1.default.createElement(components_1.View, { className: "explain" },
                    react_1.default.createElement(components_1.Text, { className: "explain-title" }, explainData.title),
                    react_1.default.createElement(components_1.View, { className: "explain-tip" },
                        react_1.default.createElement(components_1.Text, { className: "explain-tip-text" }, explainData.content)),
                    react_1.default.createElement(components_1.Button, { className: "explain-btn", onClick: this.closeModal },
                        react_1.default.createElement(components_1.Text, { className: "explain-btn-text" }, "\u6211\u77E5\u9053\u4E86"))))),
            list.map((loan, index) => {
                let valueIndex = 0;
                if (loan.range) {
                    loan.range = loan.rangeFilter
                        ? loan.range.filter(_r => _r.limit === loan.rangeFilter)
                        : loan.range;
                    valueIndex = loan.range.findIndex((item) => item.value === Number(loan.value));
                }
                return (react_1.default.createElement(components_1.View, { key: loan.name, className: "input-content" },
                    react_1.default.createElement(components_1.View, { className: "input-content__label" },
                        react_1.default.createElement(components_1.Text, { className: "input-content__label-text" }, loan.name),
                        loan.icon && (react_1.default.createElement(components_1.View, { onClick: this.showExplain(loan.explain) },
                            react_1.default.createElement(components_1.Image, { className: "input-content__label-icon", src: loan.icon })))),
                    react_1.default.createElement(components_1.View, { className: "value-wrap" },
                        loan.type === "selector" ? (react_1.default.createElement(components_1.View, { className: "picker-box" },
                            react_1.default.createElement(_components_1.Pciker, { mode: "selector", title: loan.name, styleName: "picker-box__picke", value: [loan.value], range: loan.range, onChange: this.handlePickerChange(loan, index) },
                                react_1.default.createElement(components_1.Text, { className: "picker-box__picker__text" }, loan.range[valueIndex] && loan.range[valueIndex].label)))) : (react_1.default.createElement(components_1.Input
                        // taro内置不支持 rn 的某些类型
                        // @ts-ignore
                        , {
                            // taro内置不支持 rn 的某些类型
                            // @ts-ignore
                            keyboardType: loan.keyboardType, type: loan.inputType || "text", maxLength: loan.maxLength, className: "input", style: loan.valueStyle || {}, disabled: process.env.TARO_ENV !== "h5" ? loan.readOnly : false, readOnly: IS_H5 ? loan.readOnly : false, onBlur: this.onBlur(loan, index), onFocus: this.onFocus(index), onInput: this.handleInputChange(loan, index), value: `${loan.value !== 0
                                ? (loan.ratio ? loan.ratio * loan.value : loan.value) ||
                                    ""
                                : focus[index]
                                    ? ""
                                    : 0}` })),
                        react_1.default.createElement(components_1.View, { className: "unit" }, loan.unit === "arrowright" ? (react_1.default.createElement(components_1.Image, { className: "arrow-right", src: constans_1.RIGHT_ARROW })) : (react_1.default.createElement(components_1.Text, { className: "unit__text", style: loan.unitStyle }, loan.unit)))),
                    react_1.default.createElement(components_1.Text, { className: "input-content-line" })));
            })));
    }
}
exports.LineWrap = LineWrap;
LineWrap.defaultProps = {
    data: [],
    type: [],
    onChangePicker: () => { },
    onInputChange: () => { },
    onBlur: () => { }
};
LineWrap.options = {
    addGlobalClass: true
};
// # sourceMappingURL=line-wrap.js.map
