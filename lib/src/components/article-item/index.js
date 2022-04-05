"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
require("./index.scss");
const article_item_header_1 = require("@components/article-item-header");
const article_list_bottom_1 = require("@components/article-list-bottom");

class ArticleItem extends react_1.Component {
    render() {
        const { item } = this.props;
        return (react_1.default.createElement(components_1.View, null,
            react_1.default.createElement(components_1.View, { className: "article-item" },
                react_1.default.createElement(article_item_header_1.default, { avatar: item.author.avatar, nickname: item.author.nickname, time: item.created_at }),
                react_1.default.createElement(components_1.Navigator, { className: "article-body", url: `/pages/article/index?id=${item.id}` },
                    react_1.default.createElement(components_1.Text, { userSelect: true, className: "txt" }, item.content),
                    item.images && item.images.length && item.images.map((img, index) => {
                        return (react_1.default.createElement(components_1.Image, { key: index, mode: "bottom left", className: "image", src: img }));
                    })),
                react_1.default.createElement(article_list_bottom_1.default, { key: item.id, item: item }))));
    }
}
exports.default = ArticleItem;
;
// # sourceMappingURL=index.js.map
