"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const common_vendor = require("../common/vendor.js");
const service_config = require("./config.js");
let isShowModal = true;
let isShow = true;
class ApiService {
  constructor() {
    __publicField(this, "config");
    __publicField(this, "interceptor");
    this.config = {
      baseUrl: service_config.baseUrl,
      header: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      method: "GET",
      timeout: 6e4,
      // 设置超时时间为60秒
      dataType: "json",
      responseType: "text"
    };
    this.interceptor = {
      request: null,
      response: null
    };
  }
  createOptions(method, url, data) {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpblR5cGUiOiJXRUIiLCJjcmVhdGVUaW1lIjoxNzIyNTU5MjI2Nzc3LCJ1c2VySWQiOiI3M2ZjNGM1OWQ4YjI0YWE5OWMzMGE3NzgyZjAzYjgxZCJ9.y717u50gQYjW-lT0edrc6kdYBcT23L-O9nPzJJFdPmc";
    const headers = token ? { ...this.config.header, "X-ACCESS-TOKEN": token } : this.config.header;
    const finalData = data && Object.keys(data).length ? data : void 0;
    return {
      baseUrl: this.config.baseUrl,
      url: this.config.baseUrl + url,
      method,
      data: finalData,
      dataType: this.config.dataType,
      responseType: this.config.responseType,
      header: headers
    };
  }
  handleTokenError(message) {
    common_vendor.index.hideLoading();
    const flag = message === "token不存在";
    if (flag || isShowModal) {
      isShowModal = false;
      common_vendor.index.showModal({
        title: "提示",
        content: flag ? message : "登录过期，请重新登录",
        showCancel: false,
        success: () => {
          isShowModal = true;
          common_vendor.index.reLaunch({ url: "/pages/login/login" });
        },
        complete: () => {
          isShowModal = true;
        }
      });
    }
  }
  handleErrorMessage(message) {
    common_vendor.index.hideLoading();
    common_vendor.index.showToast({ title: message, icon: "none" });
  }
  handleHttpError(statusCode) {
    const messages = {
      401: "未授权，请重新登录",
      403: "无权限访问",
      default: "网络错误或服务器升级中"
    };
    const message = messages[statusCode] || messages.default;
    if (statusCode === 401) {
      common_vendor.index.reLaunch({ url: "/pages/login/login" });
    } else if (isShow) {
      isShow = false;
      common_vendor.index.showModal({
        title: "提示",
        content: message,
        showCancel: false,
        complete: () => {
          isShow = true;
        }
      });
    }
  }
  request(options) {
    if (this.interceptor.request) {
      this.interceptor.request(options);
    }
    return new Promise((resolve) => {
      options.complete = (response) => {
        if (this.interceptor.response) {
          const newResponse = this.interceptor.response(response);
          if (newResponse) {
            response = newResponse;
          }
        }
        const { statusCode, data } = response;
        if (statusCode === 200) {
          switch (data.code) {
            case 200:
              resolve(data);
              break;
            case 505:
              this.handleTokenError(data.errorMessage);
              break;
            case 2001:
            case 500:
              this.handleErrorMessage(data.errorMessage || "服务器错误");
              break;
            default:
              this.handleErrorMessage("服务器错误");
          }
        } else {
          this.handleHttpError(statusCode);
        }
      };
      common_vendor.index.request(options);
    });
  }
  get(url, data) {
    console.log(url, data);
    return this.request(this.createOptions("GET", url, data));
  }
  post(url, data) {
    console.log(url, data);
    return this.request(this.createOptions("POST", url, data));
  }
  put(url, data) {
    return this.request(this.createOptions("PUT", url, data));
  }
  delete(url, data) {
    return this.request(this.createOptions("DELETE", url, data));
  }
}
const request = new ApiService();
exports.request = request;
