"use strict";
const core_service_BaseService = require("./BaseService.js");
class FrameAuthenticateService extends core_service_BaseService.BaseService {
  constructor(service) {
    super("frame-authenticate", service);
  }
}
exports.FrameAuthenticateService = FrameAuthenticateService;
