export default {
  navigationBarTitleText: '我的订单',
  navigationBarBackgroundColor: '#fff',
  navigationBarTextStyle: 'black',
  enablePullDownRefresh: true,
  // @ts-ignore
  disableScroll: process.env.TARO_ENV === 'rn',
};
