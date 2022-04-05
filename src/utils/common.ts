
import Taro from '@tarojs/taro';

export const getStorageData = async (key: string) => {
  let result: any;
  try {
    const { data } = await Taro.getStorage({ key });
    result = data;
  } catch (error) {
    console.log(error);
  }
  return result;
};

// num为传入的值，n为保留的小数位
export const formatFloat = (num: number | string, n: number) => {
  let f = parseFloat(num as string);
  if (Number.isNaN(f)) {
    return false;
  }
  f = Math.round((num as number) * Math.pow(10, n)) / Math.pow(10, n); // n 幂
  return f;
};


export function showErrorToast(msg) {
  Taro.showToast({
    title: msg,
    icon:'error'
  }).then();
}

export function redirect(url) {
  // todo 判断页面是否需要登录
  if (false) {
    Taro.redirectTo({
      url: '/pages/login/index'
    });
    return false;
  } else {
    Taro.redirectTo({
      url: url
    }).then();
  }
}

