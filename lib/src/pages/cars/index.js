"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const index_selection_1 = require("@components/index-selection");
const search_nav_bar_1 = require("@components/search-nav-bar");

class Cars extends react_1.Component {
    render() {
        return (react_1.default.createElement(components_1.View, null,
            react_1.default.createElement(search_nav_bar_1.default, null),
            react_1.default.createElement(index_selection_1.default, null)));
    }
}
exports.default = Cars;
// # sourceMappingURL=index.js.map
