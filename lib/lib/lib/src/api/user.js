"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfoApi = void 0;
const request_1 = require("@utils/request");
const service_1 = require("../constants/service");

const getUserInfoApi = () => {
    return request_1.default.get(service_1.SERVICE_URL + 'personal', {});
};
exports.getUserInfoApi = getUserInfoApi;
// # sourceMappingURL=user.js.map
