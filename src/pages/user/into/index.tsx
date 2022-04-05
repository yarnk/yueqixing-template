import React,{ Component } from "react";
import { View } from "@tarojs/components";
import * as images from "../../../static/images";
import { AtGrid } from "taro-ui";

export default class IntoPlatform extends Component<any, any>{
  render() {
    return (<View>
      <AtGrid columnNum={2} data={
        [
          {
            image: images.menu1,
            value: '自媒体入驻'
          },
          {
            image: images.menu3,
            value: '商家入驻'
          },
          {
            image: images.menu2,
            value: '抖音达人'
          },
          {
            image: images.menu2,
            value: '政务服务入驻'
          }
        ]
      }
      />

      </View>);
  }
}
