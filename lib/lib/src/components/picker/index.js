"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-10 23:39:32
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const modal_1 = require("@ant-design/react-native/lib/modal");
const picker_view_1 = require("@ant-design/react-native/lib/picker-view");
require("./index.scss");

class TaroPickerSelector extends react_1.Component {
    constructor(props) {
        super(props);
        this.showModal = () => {
            const { value = [0] } = this.props;
            this.setState({
                visible: true,
                selectedValue: value
            });
        };
        this.closeModal = () => {
            this.setState({
                visible: false
            });
        };
        this.handleChange = (value) => {
            this.setState({
                selectedValue: value
            }, () => {
                this.props.onValueChange && this.props.onValueChange(value);
            });
        };
        this.onConfirm = () => {
            const { selectedValue } = this.state;
            this.props.onChange(selectedValue);
            this.closeModal();
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
        const { range = [], cols, cascade, title } = this.props;
        const { visible, selectedValue } = this.state;
        return (react_1.default.createElement(components_1.View, { onClick: this.showModal }, react_1.default.createElement(modal_1.default, { style: { height: 300 }, popup: true, maskClosable: true, onClose: this.closeModal, visible: visible, animationType: "slide-up" }, react_1.default.createElement(components_1.View, { className: "picker-title" }, react_1.default.createElement(components_1.Text, { className: "picker-title-cancel", onClick: this.closeModal }, "\u53D6\u6D88"), react_1.default.createElement(components_1.Text, { className: "picker-title-text" }, title), react_1.default.createElement(components_1.Text, { className: "picker-title-ok", onClick: this.onConfirm }, "\u786E\u5B9A")), react_1.default.createElement(picker_view_1.default, { itemStyle: {
                width: "100%",
                display: "flex",
                alignItems: "center"
            }, value: selectedValue, cols: cols, cascade: cascade, onChange: this.handleChange, data: range })), this.props.children));
    }
}
exports.default = TaroPickerSelector;
TaroPickerSelector.defaultProps = {
    range: [],
    value: [],
    cols: 1,
    cascade: true,
    onChange: () => { }
};
TaroPickerSelector.options = {
    addGlobalClass: true
};
// # sourceMappingURL=index.js.map
