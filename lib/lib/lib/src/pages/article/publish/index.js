"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const taro_ui_1 = require("taro-ui");
const components_1 = require("@tarojs/components");
require("./index.scss");
const taro_1 = require("@tarojs/taro");

class ArticleDetail extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            article: {
                content: '',
                images: [],
                location: ''
            }
        };
        this.getLocation = () => {
            // 选择定位
            const than = this;
            taro_1.default.authorize({
                scope: 'scope.userLocation',
                success: function () {
                    // 用户已经同意小程序使用定位功能，后续调用 Taro.chooseLocation 接口不会弹窗询问
                    taro_1.default.chooseLocation({
                        success(ret) {
                            const _position = Object.assign(Object.assign({}, ret), { location: ret.name });
                            than.setState({ article: {
                                    location: (_position.name ? _position.name : _position.address)
                                }
                            });
                            console.log(_position);
                        }
                    });
                },
                fail: function (err) {
                    var _a;
                    if (((_a = err === null || err === void 0 ? void 0 : err.errMsg) === null || _a === void 0 ? void 0 : _a.indexOf('auth deny')) > -1) {
                        taro_1.default.showToast({ title: '请在小程序页面右上角 - 更多 - 设置里允许小程序使用定位权限~' }).then();
                    }
                }
            });
        };
    }
    handleChange(text) {
        this.setState({
            article: {
                content: text
            }
        });
    }
    onChange(image) {
        console.log("image", image);
    }
    render() {
        return (react_1.default.createElement("view", { className: "at-article" }, react_1.default.createElement(taro_ui_1.AtTextarea, { className: "article-content", height: 400, value: this.state.article.content, onChange: this.handleChange.bind(this), maxLength: 500, placeholder: "\u5206\u4EAB\u4F60\u7684\u9A91\u884C\u751F\u6D3B" }), react_1.default.createElement(components_1.View, null), react_1.default.createElement(taro_ui_1.AtImagePicker, { files: this.state.article.images, onChange: this.onChange.bind(this) }), react_1.default.createElement(taro_ui_1.AtTag, { className: "article-tag" }, "#\u8BDD\u9898"), react_1.default.createElement(components_1.View, { className: "article-location", onClick: this.getLocation }, react_1.default.createElement(components_1.View, null, react_1.default.createElement(taro_ui_1.AtIcon, { className: "left-icon", value: "map-pin" }), react_1.default.createElement(components_1.Text, null, this.state.article.location || "所在位置")), react_1.default.createElement(taro_ui_1.AtIcon, { value: "chevron-right" })), react_1.default.createElement(taro_ui_1.AtButton, { className: "publish" }, "\u53D1\u5E03\u52A8\u6001")));
    }
}
exports.default = ArticleDetail;
// # sourceMappingURL=index.js.map
