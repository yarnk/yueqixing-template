import Taro from '@tarojs/taro';
import { getGlobalData } from '@utils';
import store from '../dva';

/**
 *
 * @param {*} state
 * @param {*} initState
 */
export const resetStore = (state, initState) => {
  Object.keys(initState).forEach(key => {
    state[key] = initState[key];
  });
};

/**
 * 更新店铺配置
 */
export const updateShopConfig = () => {
  const dispatch = store.getDispatch();
  dispatch({ type: 'home/init' });
};


/**
 * 跳转先check(没登录跳转登录页面)
 * @param {*} url
 */
export const navigateToCheck = (url) => {
  if (isLogin()) {
    Taro.navigateTo({
      url,
      success: function () {
      },
      fail: function () {
      },
      complete: function () {
      },
    }).then();
  } else {
    Taro.navigateTo({
      url: "/pages/login/index"
    });
  }
};

export const navigateToLogin = () =>{
  Taro.navigateTo({
    url: "/pages/login/index"
  }).then();
};


export const isLogin = () => {
  return getGlobalData('hasLogin');
};
