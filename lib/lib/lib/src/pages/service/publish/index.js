"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const taro_ui_1 = require("taro-ui");

class PublishService extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            price: "",
            remark: "",
            files: []
        };
    }
    onChangeFile() {
    }
    handleChangePrice(val) {
        this.setState({
            price: val
        });
    }
    handleChangeRemark(val) {
        this.setState({
            remark: val
        });
    }
    render() {
        const { price, remark, files } = this.state;
        return (react_1.default.createElement(components_1.View, null, react_1.default.createElement(components_1.View, { className: "service-body" }, react_1.default.createElement(components_1.Text, null, "\u9700\u6C42\u56FE\u7247"), react_1.default.createElement(taro_ui_1.AtImagePicker, { files: files, onChange: this.onChangeFile.bind(this) }), react_1.default.createElement(components_1.View, null, "\u5F53\u524D\u670D\u52A1\u901A\u7545"), react_1.default.createElement(components_1.View, { id: "container", className: "map" }), react_1.default.createElement(taro_ui_1.AtInput, { name: "price", title: "\u4EF7\u683C", type: "digit", placeholder: "\u8BF7\u8F93\u5165\u4EF7\u683C", border: true, required: true, value: price, onChange: this.handleChangePrice.bind(this) }, react_1.default.createElement(components_1.Text, null, "\u5143")), react_1.default.createElement(taro_ui_1.AtTextarea, { count: false, value: remark, onChange: this.handleChangeRemark.bind(this), maxLength: 200, placeholder: "\u8BF7\u7B80\u5355\u63CF\u8FF0\u73B0\u5728\u72B6\u51B5" }), react_1.default.createElement(taro_ui_1.AtButton, { className: "publish-btn", type: "primary" }, "\u6781\u901F\u53D1\u5355"))));
    }
}
exports.default = PublishService;
// # sourceMappingURL=index.js.map
