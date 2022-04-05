"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taro_1 = require("@tarojs/taro");
const common_1 = require("./common");
/**
 * 封封微信的的request
 */
// @ts-ignore
function request(url, data = {}, method = 'GET') {
    return new Promise(function (resolve, reject) {
        taro_1.default.request({
            url: url,
            data: data,
            method: method,
            header: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + taro_1.default.getStorageSync('token')
            },
            success: function (res) {
                console.log('请求响应：', res);
                if (res.statusCode == 200) {
                    if (res.data.code == 401) {
                        // 清除登录相关内容
                        try {
                            taro_1.default.removeStorageSync('user_info');
                            taro_1.default.removeStorageSync('token');
                        }
                        catch (e) {
                            // Do something when catch error
                        }
                        // 切换到登录页面
                        taro_1.default.navigateTo({
                            url: '/pages/login/index'
                        }).then();
                    }
                    else if (res.data.code == 1) {
                        resolve(res.data.result);
                    }
                    else {
                        (0, common_1.showErrorToast)(res.data.errmsg);
                        reject(res.data.errmsg);
                    }
                }
                else {
                    reject(res.errMsg);
                }
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
}
request.get = (url, data) => {
    return request(url, data, 'GET');
};
request.delete = (url, data) => {
    return request(url, data, 'DELETE');
};
request.put = (url, data) => {
    return request(url, data, 'PUT');
};
request.post = (url, data) => {
    return request(url, data, 'POST');
};
exports.default = request;
// # sourceMappingURL=request.js.map
