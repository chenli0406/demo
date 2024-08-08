"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
const store_modules_userInfo = require("./store/modules/userInfo.js");
const store_modules_common = require("./store/modules/common.js");
const uni_modules_zPaging_components_zPaging_js_zPagingMixin = require("./uni_modules/z-paging/components/z-paging/js/z-paging-mixin.js");
const uni_modules_zPaging_components_zPaging_js_zPagingInterceptor = require("./uni_modules/z-paging/components/z-paging/js/z-paging-interceptor.js");
if (!Math) {
  "./pages/mainPages/index/index.js";
  "./pages/mainPages/map/map.js";
  "./pages/mainPages/serve/serve.js";
  "./pages/mainPages/my/my.js";
  "./pages/userPages/userInfo/userInfo.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    const userStore = store_modules_userInfo.useUserStore();
    const commonStore = store_modules_common.useCommonStore();
    let { getUser } = userStore;
    common_vendor.onLaunch(() => {
      getUser();
      common_vendor.index.getNetworkType({
        success: (res) => {
          if (res.networkType === "none") {
            commonStore.$patch((state) => {
              state.networkStatus.isConnected = false;
              state.networkStatus.networkType = res.networkType;
            });
            return;
          }
          commonStore.$patch((state) => {
            state.networkStatus.isConnected = true;
            state.networkStatus.networkType = res.networkType;
          });
        }
      });
      common_vendor.index.onNetworkStatusChange((res) => {
        if (!res.isConnected) {
          common_vendor.index.showModal({
            content: "网络请求超时，请稍后再试",
            showCancel: false,
            success: function() {
            }
          });
        }
        commonStore.$patch((state) => {
          state.networkStatus.isConnected = res.isConnected;
          state.networkStatus.networkType = res.networkType;
        });
      });
    });
    common_vendor.onShow(() => {
      console.log("App Show!");
    });
    common_vendor.onHide(() => {
      console.log("App Hide!");
    });
    return () => {
    };
  }
});
const app = common_vendor.createSSRApp(_sfc_main);
app.mixin(uni_modules_zPaging_components_zPaging_js_zPagingMixin.ZPMixin);
uni_modules_zPaging_components_zPaging_js_zPagingInterceptor.interceptor.handleQuery((pageNo, pageSize, from) => {
  return [pageNo, pageSize, from];
});
function createApp() {
  app.use(store_index.pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
