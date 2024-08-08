"use strict";
const common_vendor = require("../../common/vendor.js");
const useCommonStore = common_vendor.defineStore(
  "common",
  () => {
    const networkStatus = common_vendor.ref({
      isConnected: false,
      //是否有网络链接
      networkType: "none"
      //网络类型
    });
    return {
      networkStatus
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
exports.useCommonStore = useCommonStore;
