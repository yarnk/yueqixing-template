"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBar = exports.Pciker = exports.Modal = exports.KeyboardAwareScrollView = exports.LinearGradient = exports.SafeAreaView = exports.BoxShadow = void 0;
/**
 * 组件内根据平台require导致小程序编译失败
 * 小程序不支持运行时require 等待后续支持吧
 */
var box_shadow_1 = require("./box-shadow");

Object.defineProperty(exports, "BoxShadow", { enumerable: true, get: function () { return box_shadow_1.default; } });
var safe_area_view_1 = require("./safe-area-view");

Object.defineProperty(exports, "SafeAreaView", { enumerable: true, get: function () { return safe_area_view_1.default; } });
var linear_gradient_1 = require("./linear-gradient");

Object.defineProperty(exports, "LinearGradient", { enumerable: true, get: function () { return linear_gradient_1.default; } });
var keyboard_aware_scroll_view_1 = require("./keyboard-aware-scroll-view");

Object.defineProperty(exports, "KeyboardAwareScrollView", { enumerable: true, get: function () { return keyboard_aware_scroll_view_1.default; } });
var modal_1 = require("./modal");

Object.defineProperty(exports, "Modal", { enumerable: true, get: function () { return modal_1.default; } });
var picker_1 = require("./picker");

Object.defineProperty(exports, "Pciker", { enumerable: true, get: function () { return picker_1.default; } });
var status_bar_1 = require("./status-bar");

Object.defineProperty(exports, "StatusBar", { enumerable: true, get: function () { return status_bar_1.default; } });
// # sourceMappingURL=index.js.map
