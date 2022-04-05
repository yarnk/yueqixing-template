"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
require("./index.scss");
const taro_ui_1 = require("taro-ui");
const amap_jsapi_loader_1 = require("@amap/amap-jsapi-loader");
const service_nav_bar_1 = require("@components/service-nav-bar");
const service_menu_1 = require("@components/service-menu");

class MendPage extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            files: [],
            remark: '',
            price: '',
            mend_cate_list: {},
            map: {},
            // 是否已经选择定位
            // 当前定位
        };
        // 2.dom渲染成功后进行map对象的创建
        this.loadAMap = (a) => {
            amap_jsapi_loader_1.default.load({
                key: "ed51d80522c51ad275abeb84e90d092b",
                version: "2.0",
                plugins: [''], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            }).then((AMap) => {
                const map = new AMap.Map("container", {
                    viewMode: "3D",
                    zoom: 5,
                    center: a, // 初始化地图中心点位置 [105.602725,37.076636]
                });
                this.setState({ map: map });
            }).catch(e => {
                console.log(e);
            });
        };
    }
    onChangeFile(files) {
        this.setState({
            files
        });
    }
    render() {
        return (react_1.default.createElement(components_1.View, null,
            react_1.default.createElement(service_nav_bar_1.default, null),
            react_1.default.createElement(service_menu_1.default, null),
            react_1.default.createElement(taro_ui_1.AtNoticebar, { icon: "volume-plus", close: true, marquee: true }, "\u798F\u5229\uFF1A\u5373\u65E5\u8D77\u5E73\u53F0\u4E0D\u6536\u53D6\u4EFB\u4F55\u624B\u7EED\u8D39\uFF0C\u6240\u6709\u8FD0\u8425\u4EA7\u751F\u7684\u5229\u6DA6\u5C06\u7528\u6237\u7EF4\u62A4\u548C\u4F18\u60E0\u5238\u8F6C\u5316\uFF01"),
            react_1.default.createElement(components_1.View, { className: "service-body" },
                react_1.default.createElement(components_1.Text, { className: "task-title" }, "\u60A8\u6709\u6B63\u5728\u8FDB\u884C\u4E2D\u7684\u670D\u52A1"),
                react_1.default.createElement(taro_ui_1.AtTimeline, { customStyle: { marginTop: '20px' }, pending: true, items: [
                        { title: '师傅已接单', content: ['正在安排'], icon: 'check-circle' },
                        { title: '取配件', content: ['后视镜+踏板', '圆形通用'], icon: 'clock' },
                        { title: '上门服务', content: ['电话联系', '实物拍照'], icon: 'clock' },
                        { title: '支付', content: ['支付服务费用'], icon: 'clock' }
                    ] }))));
    }
}
exports.default = MendPage;
// # sourceMappingURL=index.js.map
