import { Result } from "./result";
import request from "@utils/request";
import { SERVICE_URL } from "../constants/service";

export async function uploadFile(data):Promise<Result>{
  return request.post(uploadFileUrl, data,false);
}

export const uploadFileUrl = SERVICE_URL + 'file/upload';

export async function delFile(params):Promise<Result>{
  return request.delete(SERVICE_URL + 'file', params);
}

export async function getFile(params):Promise<Result>{
  return request.get(SERVICE_URL + 'file', params);
}
