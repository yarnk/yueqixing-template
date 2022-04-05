"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./app.scss");
const taro_1 = require("@tarojs/taro");
const user = require("@utils/user");
const _utils_1 = require("@utils");

class App extends react_1.Component {
    constructor() {
        super(...arguments);
        this.update = () => {
            if (process.env.TARO_ENV === 'weapp') {
                const updateManager = taro_1.default.getUpdateManager();
                taro_1.default.getUpdateManager().onUpdateReady(function () {
                    taro_1.default.showModal({
                        title: '更新提示',
                        content: '新版本已经准备好，是否重启应用？',
                        success: function (res) {
                            if (res.confirm) {
                                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                                updateManager.applyUpdate();
                            }
                        }
                    }).then();
                });
            }
        };
    }
    componentDidMount() {
        console.log('componentDidMount ');
    }
    componentDidShow() {
        user.checkLogin().then(() => {
            console.log('app hasLogin');
            (0, _utils_1.setGlobalData)('hasLogin', true);
        }).catch(() => {
            console.log('app noLogin');
            (0, _utils_1.setGlobalData)('hasLogin', false);
        });
    }
    componentDidHide() {
        console.log('componentDidHide ');
    }
    componentDidCatchError() {
        console.log('componentDidCatchError ');
    }
    // this.props.children 是将要会渲染的页面
    render() {
        return this.props.children;
    }
}
exports.default = App;
// # sourceMappingURL=app.js.map
