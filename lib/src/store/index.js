"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const reducers_1 = require("../reducers");

const composeEnhancers =
// @ts-ignore
!(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && typeof window === 'object') ? redux_1.compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
});
const middlewares = [
    redux_thunk_1.default
];
if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
    middlewares.push(require('redux-logger').createLogger());
}
const enhancer = composeEnhancers((0, redux_1.applyMiddleware)(...middlewares));
function configStore() {
    return (0, redux_1.createStore)(reducers_1.default, enhancer);
}
exports.default = configStore;
// # sourceMappingURL=index.js.map
