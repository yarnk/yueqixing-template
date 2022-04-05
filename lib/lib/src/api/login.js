"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.loginByAccount = exports.loginByMini = void 0;
const request_1 = require("@utils/request");
const service_1 = require("../constants/service");
/**
 * 微信登录
 * @param payload
 */
async function loginByMini(payload) {
    return request_1.default.post(service_1.SERVICE_URL + 'login/mini', payload);
}
exports.loginByMini = loginByMini;
/**
 * 账号登录
 * @param payload
 */
async function loginByAccount(payload) {
    return request_1.default.post(service_1.SERVICE_URL + 'login', payload);
}
exports.loginByAccount = loginByAccount;
async function logout() {
    return request_1.default.delete(service_1.SERVICE_URL + 'logout', {});
}
exports.logout = logout;
// # sourceMappingURL=login.js.map
