import request from "@utils/request";
import { SERVICE_URL } from '../constants/service';
import { Result } from "./result";

/**
 * 获取文章列表
 * @param params
 */
export async function getArticleListApi(params) {
  return request.get(SERVICE_URL + 'article/list', params);
}

export async function likeArticleApi(params):Promise<Result>{
  return request.get(SERVICE_URL + 'article/like', params);
}

export async function delArticleApi(params):Promise<Result>{
  return request.delete(SERVICE_URL + 'article', params);
}


/**
 * 获取文章详情
 * @param params
 */
export async function getArticleDetailApi(params) {
  return request.get(SERVICE_URL + 'article', params);
}

/**
 * 发布文章
 * @param article
 */
export async function publishArticleApi(article) {
  return request.post<Result>(SERVICE_URL + 'article', article,true);
}


export interface Article{
  id:number|null
  content?:string|''|null
  create_at: any
  images: string[]
  cate_id: number|null
  tags:string[]

}

export interface ArticleListQuery{
  start_at: any
  end_at: any
  keywords: string|null
  start_index: any
}
