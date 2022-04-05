import request from "@utils/request";
import { SERVICE_URL } from "../constants/service";

export const getUserInfoApi = <T>() => {
  return request.get<T>(SERVICE_URL + 'personal', {});
};

export const uploadLocationApi = <T>(data) => {
  return request.post<T>(SERVICE_URL + 'personal/location', data, false);
};
