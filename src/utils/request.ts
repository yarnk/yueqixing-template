import Taro from '@tarojs/taro';
import { showErrorToast } from './common';
import { filterParams } from "@utils/params-util";
import {Result} from "../api/result";

interface Type {
  /** 错误响应 */
  error
  /** 成功响应 */
  success
  /** 警告响应 */
  warning
  /** 提示响应 */
  info
}

export interface ResponseBody {
  code: number,
  result: any,
  type: keyof Type,
  success: string,
  message: string
}

/**
 * 封封微信的的request
 */
// @ts-ignore
function request<T>(url, data: any = {}, method: method = 'GET',loading:boolean):Promise<Result> {
  return new Promise(function (resolve, reject) {
    if (loading){
      Taro.showLoading();
    }
    const token = Taro.getStorageSync('token');
    console.log("请求令牌",token);
    const filterData = filterParams(data);
    Taro.request<T>({
      url: url,
      data: filterData,
      method: method,
      header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      success: function (res) {
        console.log('请求响应：', res);
        if (res.statusCode == 401){
          toLogin();
        }
        if (res.statusCode == 200) {
          if (res.data.code == 401) {
           toLogin();
          } else if (res.data.code == 1) {
            resolve(res.data);
          } else {
            showErrorToast(res.data.message);
            reject(res.data.errmsg);
          }
        } else {
          reject(res.errMsg);
        }
      },
      fail: function (err) {
        reject(err);
      }
    });
    if (loading){
      setTimeout(()=>{
        Taro.hideLoading();
      },1000);
    }
  });
}

request.get = <T>(url, data):Promise<Result> => {
  return request<T>(url, data, 'GET',false);
};


request.delete = <T>(url, data) => {
  return request<T>(url, data, 'DELETE',false);
};

request.put = <T>(url, data) => {
  return request<T>(url, data, 'PUT',false);
};

request.post = <T>(url, data,loading) => {
  return request<T>(url, data, 'POST',loading);
};

function toLogin() {
  // 清除登录相关内容
  try {
    Taro.removeStorageSync('user_info');
    Taro.removeStorageSync('token');
  } catch (e) {
    // Do something when catch error
  }
  // 切换到登录页面
  Taro.navigateTo({
    url: '/pages/login/index'
  }).then();
}

export default request;
