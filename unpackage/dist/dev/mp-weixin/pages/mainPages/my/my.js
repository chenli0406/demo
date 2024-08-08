"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  _easycom_uv_button2();
}
const _easycom_uv_button = () => "../../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  _easycom_uv_button();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "my",
  setup(__props) {
    const click = () => {
      common_vendor.index.navigateTo({
        url: "/pages/userPages/userInfo/userInfo"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(click),
        b: common_vendor.p({
          type: "primary",
          text: "确定"
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
