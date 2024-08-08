"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const core_service_FrameAuthenticateService = require("../core/service/FrameAuthenticateService.js");
const service_request = require("./request.js");
const _UserService = class _UserService extends core_service_FrameAuthenticateService.FrameAuthenticateService {
  constructor() {
    super("user");
  }
  // 获取用户信息
  getUserInfo() {
    return service_request.request.get(`${this.urlPrefix}/${"getCurrentUserInfo"}`);
  }
  // 更改密码
  changePassword(params) {
    return service_request.request.post(`${this.urlPrefix}/${"changePassword"}`, params);
  }
  static getInstance() {
    if (!_UserService.instance) {
      _UserService.instance = new _UserService();
    }
    return _UserService.instance;
  }
};
__publicField(_UserService, "instance");
let UserService = _UserService;
const UserService$1 = UserService.getInstance();
exports.UserService = UserService$1;
