"use strict";
const common_vendor = require("../../../common/vendor.js");
const service_userService = require("../../../service/userService2.js");
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_custom_refresher = common_vendor.resolveComponent("custom-refresher");
  const _component_custom_nomore = common_vendor.resolveComponent("custom-nomore");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  (_easycom_uv_tabs2 + _component_custom_refresher + _component_custom_nomore + _easycom_z_paging2)();
}
const _easycom_uv_tabs = () => "../../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
const _easycom_z_paging = () => "../../../uni_modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_uv_tabs + _easycom_z_paging)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "userInfo",
  setup(__props) {
    const paging = common_vendor.ref(null);
    const tabIndex = common_vendor.ref(0);
    const tabList = common_vendor.ref([
      {
        name: "测试1"
      },
      {
        name: "测试2"
      },
      {
        name: "测试3"
      },
      {
        name: "测试4"
      }
    ]);
    const dataList = common_vendor.ref([]);
    const customStyle = common_vendor.ref({
      "background-color": "#fff"
    });
    const tabsChange = (index) => {
      tabIndex.value = index;
      paging.value.reload();
    };
    const queryList = (pageNo, pageSize) => {
      const params = {
        current: pageNo,
        limit: pageSize,
        type: tabIndex.value + 1,
        name: "24"
      };
      service_userService.UserService.page(params).then((res) => {
        paging.value.complete(res.result);
      }).catch((res) => {
        paging.value.complete(false);
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(tabsChange),
        b: common_vendor.p({
          customStyle: customStyle.value,
          list: tabList.value,
          scrollable: false
        }),
        c: common_vendor.w(({
          refresherStatus
        }, s0, i0) => {
          return {
            a: "b3a83cc4-2-" + i0 + ",b3a83cc4-0",
            b: common_vendor.p({
              status: refresherStatus
            }),
            c: i0,
            d: s0
          };
        }, {
          name: "refresher",
          path: "c",
          vueId: "b3a83cc4-0"
        }),
        d: common_vendor.f(dataList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.detail),
            c: index
          };
        }),
        e: common_vendor.sr(paging, "b3a83cc4-0", {
          "k": "paging"
        }),
        f: common_vendor.o(queryList),
        g: common_vendor.o(($event) => dataList.value = $event),
        h: common_vendor.p({
          ["auto-show-back-to-top"]: true,
          ["auto-show-system-loading"]: true,
          ["safe-area-inset-bottom"]: true,
          ["refresher-end-bounce-enabled"]: false,
          modelValue: dataList.value
        })
      };
    };
  }
});
wx.createPage(_sfc_main);
