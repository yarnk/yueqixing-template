"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const taro_ui_1 = require("taro-ui");
require("./index.scss");
const { likeArticleApi } = require("../../../../src/api/article");

class ArticleListBottom extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            item: {}
        };
        this.onLike = (item) => {
            return () => {
              console.log("点赞");
              likeArticleApi({ id:item.id }).then(res=>{
                console.log("请求");
                if (res.success){
                  item.liked = !item.liked;
                  if (!item.likes) {
                    item.likes = [];
                  }
                  if (item.liked) {
                    item.likes.push(res.result);
                  }
                  else {
                    const indexOf = item.likes.indexOf("1");
                    if (indexOf > -1) {
                      item.likes.splice(indexOf, 1);
                    }
                  }
                  console.log("点赞");
                  this.setState(item);
                }
              });
            };
        };
    }
    render() {
        const { item } = this.props;
        return (react_1.default.createElement(components_1.View, null,
            react_1.default.createElement(components_1.View, { className: "article-footer" },
                react_1.default.createElement(components_1.Text, { className: "left" },
                    "\u6D4F\u89C8",
                    item.view_num || 0,
                    "\u6B21"),
                react_1.default.createElement(components_1.View, { className: "right" },
                    react_1.default.createElement(components_1.View, null,
                        react_1.default.createElement(taro_ui_1.AtIcon, { value: "iconfont icon-fenxiang" }),
                        item.share_num || 0),
                    react_1.default.createElement(components_1.View, null,
                        react_1.default.createElement(taro_ui_1.AtIcon, { value: "iconfont icon-pinglun" }),
                        item.comment_num || 0),
                    react_1.default.createElement(components_1.View, { onClick: this.onLike(item) },
                        react_1.default.createElement(taro_ui_1.AtIcon, { color: item.liked ? 'red' : '', value: item.liked ? 'iconfont icon-aixin1' : 'iconfont icon-aixin' }),
                        item.likes ? item.likes.length : 0)))));
    }
}
exports.default = ArticleListBottom;
// # sourceMappingURL=index.js.map
