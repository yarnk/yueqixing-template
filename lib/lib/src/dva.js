"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dva_core_1 = require("dva-core");
const dva_immer_1 = require("dva-immer");

let app;
let store = {
    dispatch: {}
};
let dispatch;
function createApp(opt) {
    // opt.onAction = [createLogger()];
    app = (0, dva_core_1.create)(opt);
    // app.use(createLoading({}));
    app.use((0, dva_immer_1.default)());
    if (!global.registered)
        opt.models.forEach(model => app.model(model));
    global.registered = true;
    app.start();
    store = app._store;
    app.getStore = () => store;
    dispatch = store.dispatch;
    app.dispatch = dispatch;
    if (window) {
        // @ts-ignore
        window.g_app = app;
    }
    return app;
}
exports.default = {
    createApp,
    getDispatch() {
        return app.dispatch;
    },
    dispatch: store.dispatch
};
// # sourceMappingURL=dva.js.map
