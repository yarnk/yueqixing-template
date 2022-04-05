import React, { Component } from 'react';
import { Block } from '@tarojs/components';
import UserHome from './user-home';

export default class UserLayout extends Component<any, any> {

  state={}

  componentWillMount () {}
  componentDidMount () {}
  // @ts-ignore
  componentWillReceiveProps (nextProps,nextContext) {}
  componentWillUnmount () {}
  componentDidShow () {}
  componentDidHide () {}
  componentDidCatchError () {}
  componentDidNotFound () {}

  getElement() {
    const { pageConfig, isShowConfig, userInfo, order } = this.props;
    let newPageConfig = pageConfig;
    if (!isShowConfig && pageConfig) {
      newPageConfig = pageConfig.filter(f => f.type !== 'config');
    }
    // console.log('newPageConfig', newPageConfig);
    return newPageConfig.map((item, index) => {
      // console.log('==item', item);
      if (item.type === 'my') {
        return <UserHome key={item.type + index} config={item} userInfo={userInfo} order={order} />;
      }
      return <Block key={item.type + index}>x</Block>;
    });
  }


  render() {
    // console.log('layout-config', pageConfig, this)
    return (
      <Block>
        {this.getElement()}
      </Block>
    );
  }
}
