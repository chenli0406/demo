"use strict";
const environment = {
  DEVELOPMENT: "http://192.168.0.222:8080",
  TESTING: "",
  PRODUCTION: ""
};
const baseUrl = environment.TESTING;
exports.baseUrl = baseUrl;
