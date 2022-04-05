import Taro from '@tarojs/taro';
import { loginByMini } from '../api/login';
import { getUserInfoApi, uploadLocationApi } from "../api/user";

/**
 * Promise封装wx.checkSession
 */
function checkSession() {
  return new Promise(function (resolve, reject) {
    Taro.checkSession({
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
    Taro.login({
      success: function (res) {
        if (res) {
          resolve(res);
        } else {
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
export function loginByWechatMini(userInfo) {
  return new Promise(function (resolve, reject) {
    return login().then((res) => {
      // 登录远程服务器
      loginByMini({
        // @ts-ignore
        code: res.code,
        userInfo
      }).then(loginRes => {
        // 存储用户信息
        console.log(loginRes);
        // @ts-ignore
        Taro.setStorageSync('token', loginRes.result.access_token);
        getUserInfoApi().then(res =>{
          console.log(res);
          // @ts-ignore
          Taro.setStorageSync('user_info', res.result);
        });
        Taro.getLocation({
          type: 'wgs84',
          success: function (res) {
            const latitude = res.latitude;
            const longitude = res.longitude;
            const speed = res.speed;
            const accuracy = res.accuracy;
            uploadLocationApi({ latitude,longitude,speed,accuracy });
          }
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

/**
 * 判断用户是否登录
 */
export function checkLogin() {
  return new Promise(function (resolve, reject) {
    if (Taro.getStorageSync('user_info') && Taro.getStorageSync('token')) {
      checkSession().then(() => {
        resolve(true);
      }).catch(() => {
        reject(false);
      });
    } else {
      reject(false);
    }
  });
}
