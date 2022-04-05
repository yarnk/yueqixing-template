"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalData = exports.setGlobalData = void 0;
const globalData = {};
if (IS_RN) {
    global.globalData = {};
}
const setGlobalData = (key, val) => {
    (IS_RN ? global.globalData : globalData)[key] = val;
};
exports.setGlobalData = setGlobalData;
const getGlobalData = (key) => {
    return (IS_RN ? global.globalData : globalData)[key];
};
exports.getGlobalData = getGlobalData;
// # sourceMappingURL=global-data.js.map
