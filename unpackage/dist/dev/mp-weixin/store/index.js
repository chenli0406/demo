"use strict";
const common_vendor = require("../common/vendor.js");
require("./modules/userInfo.js");
require("./modules/common.js");
const pinia = common_vendor.createPinia();
pinia.use(common_vendor.src_default);
exports.pinia = pinia;
