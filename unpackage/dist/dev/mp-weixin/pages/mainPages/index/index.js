"use strict";
const common_vendor = require("../../../common/vendor.js");
require("../../../store/index.js");
const store_modules_userInfo = require("../../../store/modules/userInfo.js");
if (!Array) {
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uv_skeletons2 = common_vendor.resolveComponent("uv-skeletons");
  (_easycom_uv_button2 + _easycom_uv_skeletons2)();
}
const _easycom_uv_button = () => "../../../uni_modules/uv-button/components/uv-button/uv-button.js";
const _easycom_uv_skeletons = () => "../../../uni_modules/uv-skeletons/components/uv-skeletons/uv-skeletons.js";
if (!Math) {
  (_easycom_uv_button + _easycom_uv_skeletons)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const userStore = store_modules_userInfo.useUserStore();
    let { userInfo } = common_vendor.storeToRefs(userStore);
    const loading = common_vendor.ref(true);
    const skeleton = common_vendor.ref([{
      type: "line",
      num: 3,
      gap: "20rpx",
      style: ["width: 200rpx;marginBottom: 50rpx;", "height: 100rpx;", "width: 500rpx;"]
      // style: 'width: 200rpx;marginBottom: 50rpx;'
      // style: {width: '200rpx',marginBottom: '50rpx'}
    }]);
    const click = () => {
      loading.value = false;
      userStore.$patch((state) => {
        state.userInfo.username = "342";
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(userInfo).username),
        b: common_vendor.o(click),
        c: common_vendor.p({
          type: "primary",
          text: "确定"
        }),
        d: common_vendor.p({
          loading: loading.value,
          skeleton: skeleton.value
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
