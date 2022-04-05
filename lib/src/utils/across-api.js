"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2020-07-09 11:14:17
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.initBackHandler = exports.isAndriod = void 0;
const taro_1 = require("@tarojs/taro");

let RN = {};
if (IS_RN) {
    RN = require("react-native");
}
const isAndriod = () => {
    if (IS_RN) {
        return RN.Platform.OS === "android";
    }
    const { platform, system } = taro_1.default.getSystemInfoSync();
    return platform === "devtools"
        ? system.includes("Android")
        : platform === "Android";
};
exports.isAndriod = isAndriod;
const initBackHandler = (callback = () => false) => {
    // callback 返回 true 阻止返回 默认返回false
    if (IS_RN) {
        RN.BackHandler.addEventListener("hardwareBackPress", function () {
            if (taro_1.default.getCurrentPages().length === 1) {
                const result = callback();
                !result && taro_1.default.navigateBack({ delta: 1 });
                return result;
            }
            return callback();
        });
    }
};
exports.initBackHandler = initBackHandler;
// # sourceMappingURL=across-api.js.map
