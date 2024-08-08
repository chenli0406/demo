"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const service_request = require("../../service/request.js");
class BaseService {
  constructor(system, serviceName) {
    __publicField(this, "urlPrefix");
    this.urlPrefix = `/${system}${serviceName ? "/" + serviceName : ""}`;
  }
  /* 
    通用的增删改查
   */
  /* 根据ID查询 */
  getById(params) {
    return service_request.request.get(`${this.urlPrefix}/getById`, params);
  }
  /* 查询列表 */
  list(params) {
    return service_request.request.post(`${this.urlPrefix}/list`, params);
  }
  /* 查询分页 */
  async page(params) {
    return service_request.request.post(`${this.urlPrefix}/page`, params);
  }
  /* 创建 */
  create(params) {
    return service_request.request.post(this.urlPrefix, params);
  }
  /* 保存 */
  save(params) {
    return service_request.request.post(`${this.urlPrefix}/save`, params);
  }
  /* 更新 */
  update(params) {
    if (!params.id) {
      return Promise.reject("id不能为空");
    }
    return service_request.request.put(`${this.urlPrefix}/update`, params);
  }
  /* 删除 */
  delete(params) {
    if (!params.id) {
      return Promise.reject("id不能为空");
    }
    return service_request.request.delete(this.urlPrefix, params);
  }
  /* 通过ID删除 */
  deleteById(params) {
    if (!params.id) {
      return Promise.reject("id不能为空");
    }
    return service_request.request.delete(`${this.urlPrefix}/deleteById`, params);
  }
}
exports.BaseService = BaseService;
