"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishArticle = exports.getArticleList = void 0;
const request_1 = require("@utils/request");
const service_1 = require("../constants/service");
/**
 * 获取文章列表
 * @param params
 */
async function getArticleList(params) {
    return request_1.default.get(service_1.SERVICE_URL + 'article/list', params);
}
exports.getArticleList = getArticleList;
/**
 * 发布文章
 * @param article
 */
async function publishArticle(article) {
    return request_1.default.post(service_1.SERVICE_URL + 'article', article, true);
}
exports.publishArticle = publishArticle;
// # sourceMappingURL=article.js.map
