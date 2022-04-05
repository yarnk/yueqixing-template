"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogin = exports.loginByWechatMini = void 0;
const taro_1 = require("@tarojs/taro");
const login_1 = require("../api/login");
const user_1 = require("../api/user");
/**
 * Promise封装wx.checkSession
 */
function checkSession() {
    return new Promise(function (resolve, reject) {
        taro_1.default.checkSession({
            success: function () {
                resolve(true);
            },
            fail: function () {
                reject(false);
            }
        }).then();
    });
}
/**
 * Promise封装wx.login
 */
function login() {
    return new Promise(function (resolve, reject) {
        taro_1.default.login({
            success: function (res) {
                if (res) {
                    resolve(res);
                }
                else {
                    reject(res);
                }
            },
            fail: function (err) {
                reject(err);
            }
        }).then();
    });
}
/**
 * 调用微信登录
 */
function loginByWechatMini(userInfo) {
    return new Promise(function (resolve, reject) {
        return login().then((res) => {
            // 登录远程服务器
            (0, login_1.loginByMini)({
                // @ts-ignore
                code: res.code,
                userInfo
            }).then(loginRes => {
                // 存储用户信息
                console.log(loginRes);
                // @ts-ignore
                taro_1.default.setStorageSync('token', loginRes.access_token);
                (0, user_1.getUserInfoApi)().then(infoRes => {
                    console.log(infoRes);
                    // @ts-ignore
                    taro_1.default.setStorageSync('user_info', infoRes);
                });
                resolve(loginRes);
            }).catch(err => {
                reject(err);
            });
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.loginByWechatMini = loginByWechatMini;
/**
 * 判断用户是否登录
 */
function checkLogin() {
    return new Promise(function (resolve, reject) {
        if (taro_1.default.getStorageSync('user_info') && taro_1.default.getStorageSync('token')) {
            checkSession().then(() => {
                resolve(true);
            }).catch(() => {
                reject(false);
            });
        }
        else {
            reject(false);
        }
    });
}
exports.checkLogin = checkLogin;
// # sourceMappingURL=user.js.map
