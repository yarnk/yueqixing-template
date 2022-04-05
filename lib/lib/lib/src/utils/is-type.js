"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2020-12-11 11:27:12
 * @Last Modified by: qiuz
 * @Last Modified time: 2021-01-04 21:46:33
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromise = exports.isHex = exports.isUrl = exports.isEmail = exports.isDate = exports.isFloat = exports.isInteger = exports.isBoolean = exports.isEmptyObject = exports.isArray = exports.isFunction = exports.isString = exports.isError = exports.isObject = exports.isRegExp = exports.isNumber = void 0;
const pattern = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
const isNumber = (value) => {
    return typeof value === "number";
};
exports.isNumber = isNumber;
const isRegExp = (value) => {
    return Object.prototype.toString.call(value) === "[object RegExp]";
};
exports.isRegExp = isRegExp;
const isObject = (value) => {
    return Object.prototype.toString.call(value) === "[object Object]";
};
exports.isObject = isObject;
const isError = (value) => {
    return Object.prototype.toString.call(value) === "[object Error]";
};
exports.isError = isError;
const isString = (value) => {
    return typeof value === "string";
};
exports.isString = isString;
const isFunction = (value) => {
    return typeof value === "function";
};
exports.isFunction = isFunction;
const isArray = (value) => {
    return Object.prototype.toString.call(value) === "[object Array]";
};
exports.isArray = isArray;
const isEmptyObject = (obj) => {
    if (obj === null || obj === undefined)
        return "Cannot convert undefined or null to object";
    return Object.keys(obj).length === 0;
};
exports.isEmptyObject = isEmptyObject;
const isBoolean = (value) => {
    return (value === true ||
        value === false ||
        ((0, exports.isObject)(value) &&
            Object.prototype.toString.call(value) === "[object Boolean]"));
};
exports.isBoolean = isBoolean;
const isInteger = (value) => {
    return (0, exports.isNumber)(value) && parseInt(value, 10) === value;
};
exports.isInteger = isInteger;
const isFloat = (value) => {
    return (0, exports.isNumber)(value) && !(0, exports.isInteger)(value);
};
exports.isFloat = isFloat;
const isDate = (value) => {
    if (!value)
        return false;
    return (typeof value.getTime === "function" &&
        typeof value.getMonth === "function" &&
        typeof value.getYear === "function");
};
exports.isDate = isDate;
const isEmail = (value) => {
    return (typeof value === "string" &&
        !!value.match(pattern.email) &&
        value.length < 255);
};
exports.isEmail = isEmail;
const isUrl = (value) => {
    return typeof value === "string" && !!value.match(pattern.url);
};
exports.isUrl = isUrl;
const isHex = (value) => {
    return typeof value === "string" && !!value.match(pattern.hex);
};
exports.isHex = isHex;
const isPromise = (value) => {
    return value && typeof value.then === "function";
};
exports.isPromise = isPromise;
// # sourceMappingURL=is-type.js.map
