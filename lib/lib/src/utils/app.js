"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLogin = exports.navigateToLogin = exports.navigateToCheck = exports.updateShopConfig = exports.resetStore = void 0;
const taro_1 = require("@tarojs/taro");
const _utils_1 = require("@utils");
const dva_1 = require("../dva");
/**
 *
 * @param {*} state
 * @param {*} initState
 */
const resetStore = (state, initState) => {
    Object.keys(initState).forEach(key => {
        state[key] = initState[key];
    });
};
exports.resetStore = resetStore;
/**
 * 更新店铺配置
 */
const updateShopConfig = () => {
    const dispatch = dva_1.default.getDispatch();
    dispatch({ type: 'home/init' });
};
exports.updateShopConfig = updateShopConfig;
/**
 * 跳转先check(没登录跳转登录页面)
 * @param {*} url
 */
const navigateToCheck = (url) => {
    if ((0, _utils_1.getGlobalData)('hasLogin')) {
        taro_1.default.navigateTo({
            url,
            success: function () {
            },
            fail: function () {
            },
            complete: function () {
            },
        }).then();
    }
    else {
        taro_1.default.navigateTo({
            url: "/pages/login/index"
        });
    }
};
exports.navigateToCheck = navigateToCheck;
const navigateToLogin = () => {
    taro_1.default.navigateTo({
        url: "/pages/login/index"
    }).then();
};
exports.navigateToLogin = navigateToLogin;
const isLogin = () => {
    return (0, _utils_1.getGlobalData)('hasLogin');
};
exports.isLogin = isLogin;
// # sourceMappingURL=app.js.map
