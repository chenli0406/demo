"use strict";
const common_vendor = require("../../common/vendor.js");
const service_UserService = require("../../service/UserService.js");
const useUserStore = common_vendor.defineStore(
  "user",
  () => {
    const userInfo = common_vendor.ref();
    const setUserInfo = (val) => {
      userInfo.value = val;
    };
    const clearStorage = () => {
      userInfo.value = void 0;
    };
    const getUser = async () => {
      const res = await service_UserService.UserService.getUserInfo();
      setUserInfo(res.result);
    };
    return {
      userInfo,
      setUserInfo,
      clearStorage,
      getUser
    };
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return common_vendor.index.getStorageSync(key);
        },
        setItem(key, value) {
          common_vendor.index.setStorageSync(key, value);
        }
      }
    }
  }
);
exports.useUserStore = useUserStore;
