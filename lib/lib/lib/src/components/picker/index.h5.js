"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-10 23:39:23
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const _utils_1 = require("@utils");
require("./index.scss");

const TaroPickerSelector = props => {
    const { range = [], onChange = () => { }, onValueChange = () => { }, value = [0], styleName = "", title = "", mode = "selector", columnReset = false } = props;
    const handleChange = (e) => {
        if (mode === "multiSelector") {
            const valueList = (0, _utils_1.isArray)(e.detail.value)
                ? e.detail.value
                : [e.detail.value];
            const realValue = valueList.map((v, i) => range[i][v].value);
            onChange(realValue);
            return;
        }
        onChange([range[e.detail.value].value]);
    };
    const handleValueChange = (e) => {
        if (mode === "multiSelector") {
            const { column } = e.detail;
            const valueList = [...value];
            valueList[column] = range[column][e.detail.value].value;
            onValueChange(valueList);
            return;
        }
        onValueChange([range[e.detail.value]]);
    };
    const getVlaueIndex = (selectValue) => {
        return selectValue.map((v, i) => {
            let index = 0;
            const data = (mode === "multiSelector" ? range[i] : range) || [];
            data.forEach((r, ri) => {
                if (r.value === v) {
                    index = ri;
                }
            });
            return index;
        });
    };
    return (react_1.default.createElement(components_1.Picker, { mode: mode,
        // @ts-ignore
        title: title, className: styleName, range: range, rangeKey: "label",
        // @ts-ignore
        columnReset: columnReset, value: getVlaueIndex(value), onChange: handleChange, onColumnChange: handleValueChange }, props.children));
};
TaroPickerSelector.options = {
    addGlobalClass: true
};
exports.default = TaroPickerSelector;
// # sourceMappingURL=index.h5.js.map
