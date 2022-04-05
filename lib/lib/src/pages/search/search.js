"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const taro_1 = require("@tarojs/taro");
const components_1 = require("@tarojs/components");
const taro_ui_1 = require("taro-ui");
require("./index.less");

class Search extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            keyword: '',
            page: 1,
            limit: 20,
            categoryId: 0,
            currentSort: 'name',
            currentSortType: 'default',
            currentSortOrder: 'desc',
            // defaultKeyword: {},
            searchStatus: false,
            categoryFilter: false,
        };
        this.getSearchKeyword = () => {
            const { dispatch } = this.props;
            dispatch({ type: 'search/getSearchIndex' });
        };
        this.getGoodsList = (cbk) => {
            const { dispatch } = this.props;
            const { page, limit, keyword, categoryId, currentSort, currentSortOrder } = this.state;
            dispatch({
                type: 'search/getGoodsList',
                payload: { keyword, page, limit, sort: currentSort, order: currentSortOrder, categoryId }
            }).then(res => {
                console.log(res);
                this.setState({
                    searchStatus: true,
                    categoryFilter: false,
                });
                cbk && cbk();
            });
            // 重新获取关键词
            this.getSearchKeyword();
        };
        this.inputChange = (e) => {
            const { value } = e.target;
            this.setState({
                keyword: value,
                searchStatus: false,
            }, () => {
                if (value) {
                    this.getHelpKeyword(value);
                }
            });
        };
        /**
         * 获取搜索关键字
         */
        this.getHelpKeyword = (value) => {
            const { dispatch } = this.props;
            dispatch({ type: 'search/getSearchHelper', payload: value });
        };
        this.inputFocus = (e) => {
            // this.setData({
            //   searchStatus: false,
            //   goodsList: []
            // });
            const { value } = e.target;
            this.setState({
                searchStatus: false,
            }, () => {
                if (value) {
                    this.getHelpKeyword(value);
                }
            });
        };
        this.getSearchResult = (keyword) => {
            if (keyword === '') {
                keyword = this.props.defaultKeyword.keyword;
            }
            this.setState({
                keyword: keyword,
                page: 1,
                categoryId: 0,
                // goodsList: []
            }, () => {
                this.getGoodsList(() => { });
            });
        };
        this.onKeywordConfirm = (e) => {
            this.getSearchResult(e.target.value);
        };
        this.clearKeyword = () => {
            // this.setState
            console.log('清空输入框数据');
            this.setState({
                keyword: '',
                searchStatus: false
            });
        };
        this.closeSearch = () => {
            taro_1.default.navigateBack();
        };
        this.clearHistory = () => {
            const { dispatch } = this.props;
            dispatch({ type: 'search/clearHistory' });
        };
        this.onKeywordTap = (keyword) => {
            this.getSearchResult(keyword);
        };
        this.openSortFilter = (currentId) => {
            switch (currentId) {
                case 'categoryFilter':
                    this.setState({
                        categoryFilter: !this.state.categoryFilter,
                        currentSortType: 'category',
                        currentSort: 'add_time',
                        currentSortOrder: 'desc'
                    });
                    break;
                case 'priceSort':
                    let tmpSortOrder = 'asc';
                    if (this.state.currentSortOrder == 'asc') {
                        tmpSortOrder = 'desc';
                    }
                    this.setState({
                        currentSortType: 'price',
                        currentSort: 'retail_price',
                        currentSortOrder: tmpSortOrder,
                        categoryFilter: false
                    }, () => {
                        this.getGoodsList(() => { });
                    });
                    break;
                default:
                    // 综合排序
                    this.setState({
                        currentSortType: 'default',
                        currentSort: 'name',
                        currentSortOrder: 'desc',
                        categoryFilter: false,
                        categoryId: 0,
                    }, () => {
                        this.getGoodsList(() => { });
                    });
            }
        };
        this.selectCategory = (categoryIndex) => {
            const { dispatch, filterCategoryList } = this.props;
            let currentIndex = categoryIndex;
            let filterCategory = filterCategoryList;
            let currentCategory = {
                id: null
            };
            for (let key in filterCategory) {
                if (key == currentIndex) {
                    filterCategory[key].selected = true;
                    currentCategory = filterCategory[key];
                }
                else {
                    filterCategory[key].selected = false;
                }
            }
            this.setState({
                categoryFilter: false,
                categoryId: currentCategory.id,
                page: 1,
            }, () => {
                this.getGoodsList(() => {
                    dispatch({
                        type: 'search/changeFilterCategoryList',
                        payload: [...filterCategory]
                    });
                });
            });
        };
    }
    componentDidMount() {
        this.getSearchKeyword();
    }
    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch({ type: 'search/REST' });
    }
    render() {
        const { goodsList, helpKeyword, defaultKeyword, filterCategoryList, historyKeywordList, hotKeywordList } = this.props;
        const { keyword, searchStatus, categoryFilter, currentSortType, currentSortOrder } = this.state;
        // console.log('filterCategoryList', filterCategoryList);
        return (react_1.default.createElement(components_1.ScrollView, { className: "container" }, react_1.default.createElement(components_1.View, { className: "search-header" }, react_1.default.createElement(components_1.View, { className: "input-box" }, react_1.default.createElement(taro_ui_1.AtIcon, { className: "icon", size: "18", color: "#666", value: "search" }), react_1.default.createElement(components_1.Input, { focus: true, name: "input", className: "keyword", value: keyword, confirmType: "search", onInput: this.inputChange, onFocus: this.inputFocus, onConfirm: this.onKeywordConfirm, placeholder: defaultKeyword.keyword }), keyword && react_1.default.createElement(taro_ui_1.AtIcon, { className: "del", size: "14", color: "#666", onClick: this.clearKeyword, value: "close" })), react_1.default.createElement(components_1.View, { className: "right", onClick: this.closeSearch }, "\u53D6\u6D88")), !searchStatus && react_1.default.createElement(components_1.View, { className: "no-search" }, !keyword && historyKeywordList.length > 0 && react_1.default.createElement(components_1.View, { className: "search-keywords search-history" }, react_1.default.createElement(components_1.View, { className: "h" }, react_1.default.createElement(components_1.Text, { className: "title" }, "\u5386\u53F2\u8BB0\u5F55"), react_1.default.createElement(taro_ui_1.AtIcon, { onClick: this.clearHistory, value: "close", size: "14", color: "#666", className: "icon" })), react_1.default.createElement(components_1.View, { className: "b" }, historyKeywordList.map(item => {
            return react_1.default.createElement(components_1.View, { className: "item", onClick: () => this.onKeywordTap(item.keyword), key: item.keyword, hoverClass: "navigator-hover" }, item.keyword);
        }))), !keyword && hotKeywordList.length > 0 && react_1.default.createElement(components_1.View, { className: "search-keywords search-hot" }, react_1.default.createElement(components_1.View, { className: "h" }, react_1.default.createElement(components_1.Text, { className: "title" }, "\u70ED\u95E8\u641C\u7D22")), react_1.default.createElement(components_1.View, { className: "b" }, hotKeywordList.map(item => {
            return react_1.default.createElement(components_1.View, { className: `item ${item.is_hot === 1 ? 'active' : ''}`, hoverClass: "navigator-hover", onClick: () => this.onKeywordTap(item.keyword), key: item.id }, item.keyword);
        }))), keyword && react_1.default.createElement(components_1.View, { className: "shelper-list" }, Array.isArray(helpKeyword) && helpKeyword.map(item => {
            return react_1.default.createElement(components_1.View, { className: "item", hoverClass: "navigator-hover", key: item.id, onClick: _ => this.onKeywordTap(item) }, item);
        }))), searchStatus && goodsList.length && react_1.default.createElement(components_1.View, { className: "search-result" }, react_1.default.createElement(components_1.View, { className: "sort" }, react_1.default.createElement(components_1.View, { className: "sort-box" }, react_1.default.createElement(components_1.View, { className: `item ${currentSortType == 'default' ? 'active' : ''}`, onClick: () => this.openSortFilter('defaultSort') }, react_1.default.createElement(components_1.Text, { className: "txt" }, "\u7EFC\u5408")), react_1.default.createElement(components_1.View, { className: `item ${currentSortType == 'price' ? 'active' : ''}`, onClick: () => this.openSortFilter('priceSort') }, react_1.default.createElement(components_1.Text, { className: "txt" }, "\u4EF7\u683C"), currentSortType == 'price' && currentSortOrder == 'asc' &&
            react_1.default.createElement(taro_ui_1.AtIcon, { value: "chevron-up", size: "18", color: "#666" }), currentSortType == 'price' && currentSortOrder == 'desc' &&
            react_1.default.createElement(taro_ui_1.AtIcon, { value: "chevron-down", size: "18", color: "#666" })), react_1.default.createElement(components_1.View, { className: `item ${currentSortType == 'category' ? 'active' : ''}`, onClick: () => this.openSortFilter('categoryFilter') }, react_1.default.createElement(components_1.Text, { className: "txt" }, "\u5206\u7C7B"))), categoryFilter && react_1.default.createElement(components_1.View, { className: "sort-box-category" }, Array.isArray(filterCategoryList) && filterCategoryList.map((item, index) => {
            return react_1.default.createElement(components_1.View, { className: `item ${item.selected ? 'active' : ''}`, key: item.id, onClick: () => this.selectCategory(index) }, item.name);
        }))), react_1.default.createElement(components_1.View, { className: "cate-item" }, react_1.default.createElement(components_1.View, { className: "b" }, goodsList && goodsList.map((item, index) => {
            return react_1.default.createElement(components_1.Navigator, { className: `item ${(index + 1) % 2 == 0 ? 'item-b' : ''}`, url: "/pages/goods/goods?id={item.id}", key: item.id }, react_1.default.createElement(components_1.Image, { className: "img", src: item.picUrl }), react_1.default.createElement(components_1.Text, { className: "name" }, item.name), react_1.default.createElement(components_1.Text, { className: "price" }, "\uFFE5", item.retailPrice));
        })))), !goodsList.length && searchStatus && react_1.default.createElement(components_1.View, { className: "search-result-empty" }, react_1.default.createElement(components_1.Text, { className: "text" }, "\u60A8\u5BFB\u627E\u7684\u5546\u54C1\u8FD8\u672A\u4E0A\u67B6"))));
    }
}
exports.default = Search;
// # sourceMappingURL=search.js.map
