import React,{ Component } from "react";
import { View,Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";

export default class NotFound extends Component<any, any>{

  toIndexPage(){
    Taro.navigateBack({ delta: 1 }).then();
  }

  render() {
    return (<View>
      <Text>
        找不到页面
      </Text>
      <AtButton onClick={this.toIndexPage} type="primary">返回</AtButton>
    </View>);
  }
}
