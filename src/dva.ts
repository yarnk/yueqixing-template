import { create } from 'dva-core';
import immer from 'dva-immer';

let app;
let store = {
  dispatch: {}
};
let dispatch;


function createApp(opt) {
  // opt.onAction = [createLogger()];
  app = create(opt);
  // app.use(createLoading({}));
  app.use(immer());

  if (!global.registered) opt.models.forEach(model => app.model(model));
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

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
  dispatch: store.dispatch
};
