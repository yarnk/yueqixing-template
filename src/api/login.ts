import request from "@utils/request";
import { SERVICE_URL } from '../constants/service';

/**
 * 微信登录
 * @param payload
 */
export async function loginByMini(payload) {
  return request.post(SERVICE_URL + 'login/mini', payload,true);
}

/**
 * 账号登录
 * @param payload
 */
export async function loginByAccount(payload) {
  return request.post(SERVICE_URL + 'login', payload,true);
}

export async function logout() {
  return request.delete(SERVICE_URL + 'logout',{});
}
