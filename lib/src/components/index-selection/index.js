"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const react_1 = require("react");
const taro_ui_1 = require("taro-ui");

class IndexSelection extends react_1.Component {
    constructor() {
        super(...arguments);
        this.scrollIntoView = (key) => {
            console.log("key", key);
        };
    }
    onClick(item) {
        console.log(item);
    }
    handleActionClick(key) {
        this.scrollIntoView && this.scrollIntoView(key);
    }
    handleChange(val) {
        console.log('change:', val);
    }
    render() {
        const list = [{
                title: 'A',
                key: 'A',
                items: [
                    {
                        'name': '爱玛'
                        // 此处可加其他业务字段
                    }
                ]
            },
            {
                title: 'B',
                key: 'B',
                items: [
                    {
                        'name': '宝马'
                    },
                    {
                        'name': '宝骏'
                    }
                ]
            },
            {
                title: 'L',
                key: 'L',
                items: [
                    {
                        'name': '绿源'
                    }
                ]
            },
            {
                title: 'C',
                key: 'C',
                items: [
                    {
                        'name': '朝阳'
                    }
                ]
            },
            {
                title: 'T',
                key: 'T',
                items: [
                    {
                        'name': '台铃'
                    }
                ]
            },
            {
                title: 'X',
                key: 'X',
                items: [
                    {
                        'name': '新日'
                    }, {
                        'name': '小牛电动'
                    }, {
                        'name': '小刀'
                    }, {
                        'name': '小鸟'
                    }
                ]
            },
            {
                title: 'Y',
                key: 'Y',
                items: [
                    {
                        'name': '雅迪'
                    }
                ]
            },
            {
                title: 'Z',
                key: 'Z',
                items: [
                    {
                        'name': '尊尚'
                    }
                ]
            }
        ];
        return (react_1.default.createElement(components_1.View, { style: "height:100vh" },
            react_1.default.createElement(taro_ui_1.AtIndexes, { list: list, onClick: this.onClick.bind(this) },
                react_1.default.createElement(components_1.View, null,
                    react_1.default.createElement(taro_ui_1.AtSearchBar, { placeholder: "\u641C\u8F66", onActionClick: this.handleActionClick.bind(this), onChange: this.handleChange.bind(this), value: "" })))));
    }
}
exports.default = IndexSelection;
// # sourceMappingURL=index.js.map
