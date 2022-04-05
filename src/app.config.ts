export default {
  pages: [
    "pages/home/index",
    "pages/login/index",
    "pages/service/index",
    "pages/cars/index",
    "pages/article/index",
    "pages/user/index",
    "pages/user/into/index",
    "pages/article/publish/index",
  ],
  // todo 分包处理
  // subPackages:[
  //   {
  //     root: 'indexPages',
  //     pages:[
  //       'pages/home/index'
  //     ]
  //   },
  // ],
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "粤骑行",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [
      {
        selectedIconPath:'static/icon/tabbar/home.png',
        iconPath: 'static/icon/tabbar/home-line.png',
        pagePath: 'pages/home/index',
        text: '首页',
      },
      {
        selectedIconPath:'static/icon/tabbar/lun.png',
        iconPath: 'static/icon/tabbar/lun-line.png',
        pagePath: 'pages/cars/index',
        text: '选车',
      },
      {
        selectedIconPath:'static/icon/tabbar/flash.png',
        iconPath: 'static/icon/tabbar/flash-line.png',
        pagePath: 'pages/service/index',
        text: '骑行',
      },
      {
        selectedIconPath:'static/icon/tabbar/user.png',
        iconPath: 'static/icon/tabbar/user-line.png',
        pagePath: 'pages/user/index',
        text: '我的',
      }
    ],
    color: '#282828',
    selectedColor: '#12151a',
    backgroundColor: '#fff',
    borderStyle: 'white'
  },
  rn: {
    screenOptions: {
      // 设置页面的options，参考https://reactnavigation.org/docs/stack-navigator/#options
      shadowOffset: { width: 0, height: 0 },
      borderWidth: 0,
      elevation: 0,
      shadowOpacity: 1,
      borderBottomWidth: 0
    }
  }
};
