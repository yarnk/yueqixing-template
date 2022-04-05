"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-10 23:39:41
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
require("./index.scss");
const _utils_1 = require("@utils");

class TaroPickerSelector extends react_1.Component {
    constructor(props) {
        super(props);
        this.showModal = (e) => {
            e.stopPropagation();
            const { value = [0] } = this.props;
            this.setState({
                visible: true,
                animation: "slide-up",
                selectedValue: value
            });
        };
        this.closeModal = (e) => {
            e && e.stopPropagation();
            this.setState({
                animation: "slide-down"
            });
            // 延时 以展示完收起动画
            setTimeout(() => {
                this.setState({
                    visible: false
                });
            }, 150);
        };
        this.handleChange = (e) => {
            const { range, mode } = this.props;
            if (mode === "multiSelector") {
                const valueList = (0, _utils_1.isArray)(e.detail.value)
                    ? e.detail.value
                    : [e.detail.value];
                this.realValue = valueList.map((v, i) => range[i][v].value);
                this.props.onValueChange(this.realValue);
                return;
            }
            this.realValue = [range[e.detail.value].value];
            this.props.onValueChange(this.realValue);
        };
        this.onConfirm = () => {
            const { selectedValue } = this.state;
            this.props.onChange(this.realValue || selectedValue);
            // 展示过渡动画
            setTimeout(this.closeModal);
        };
        this.renderMultiPicker = (data) => {
            return data.map((item, index) => {
                return (react_1.default.createElement(components_1.PickerViewColumn, { key: index + "" }, item.map((i) => {
                    return (react_1.default.createElement(components_1.View, { className: "", key: i.value }, i.label));
                })));
            });
        };
        this.getVlaueIndex = (selectValue) => {
            const { range = [], mode } = this.props;
            return selectValue.map((v, i) => {
                let index = 0;
                const data = (mode === "multiSelector" ? range[i] : range) || [];
                data.forEach((r, ri) => {
                    if (r.value === v) {
                        index = ri;
                    }
                });
                return index;
            });
        };
        this.state = {
            visible: false
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            const { value = [0] } = nextProps;
            this.setState({
                selectedValue: value
            });
        }
    }
    render() {
        const { range = [], value, mode, title } = this.props;
        const { visible, animation } = this.state;
        return (react_1.default.createElement(components_1.View, { className: "selector__modal__content", onClick: this.showModal }, visible && (react_1.default.createElement(components_1.View, { className: `mask ${animation}`, onClick: this.closeModal })), visible && (react_1.default.createElement(components_1.View, { className: `selector__modal ${animation}` }, react_1.default.createElement(components_1.View, { className: "picker-title" }, react_1.default.createElement(components_1.Text, { className: "picker-title-cancel", onClick: this.closeModal }, "\u53D6\u6D88"), react_1.default.createElement(components_1.Text, { className: "picker-title-text" }, title), react_1.default.createElement(components_1.Text, { className: "picker-title-ok", onClick: this.onConfirm }, "\u786E\u5B9A")), react_1.default.createElement(components_1.PickerView, { value: this.getVlaueIndex(value), onChange: this.handleChange }, mode === "multiSelector" ? (this.renderMultiPicker(range)) : (react_1.default.createElement(components_1.PickerViewColumn, null, range.map((i) => {
            return (react_1.default.createElement(components_1.View, { className: "", key: i.value }, i.label));
        })))))), this.props.children));
    }
}
exports.default = TaroPickerSelector;
TaroPickerSelector.defaultProps = {
    range: [],
    value: [],
    cols: 1,
    cascade: true,
    // rangeKey: 'label',
    onChange: () => { },
    onValueChange: () => { }
};
TaroPickerSelector.options = {
    addGlobalClass: true
};
// # sourceMappingURL=index.weapp.js.map
