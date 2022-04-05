"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirect = exports.showErrorToast = exports.formatFloat = exports.getStorageData = void 0;
const taro_1 = require("@tarojs/taro");

const getStorageData = async (key) => {
    let result;
    try {
        const { data } = await taro_1.default.getStorage({ key });
        result = data;
    }
    catch (error) {
        console.log(error);
    }
    return result;
};
exports.getStorageData = getStorageData;
// num为传入的值，n为保留的小数位
const formatFloat = (num, n) => {
    let f = parseFloat(num);
    if (Number.isNaN(f)) {
        return false;
    }
    f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂
    return f;
};
exports.formatFloat = formatFloat;
function showErrorToast(msg) {
    taro_1.default.showToast({
        title: msg,
        icon: 'error'
    }).then();
}
exports.showErrorToast = showErrorToast;
function redirect(url) {
    // todo 判断页面是否需要登录
    if (false) {
        taro_1.default.redirectTo({
            url: '/pages/login/index'
        });
        return false;
    }
    else {
        taro_1.default.redirectTo({
            url: url
        }).then();
    }
}
exports.redirect = redirect;
// # sourceMappingURL=common.js.map
