import React,{ Component } from "react";
import { View } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import * as images from '../../static/images/index';

export default class ServiceMenu extends Component<any, any>{

  render() {
    return (
      <View>
        <AtGrid columnNum={4} hasBorder={false} data={
          [
            {
              image: images.menu1,
              value: '车友圈'
            },
            {
              image: images.menu3,
              value: '网点服务'
            },
            {
              image: images.menu2,
              value: '上牌指引'
            },
            {
              image: images.menu6,
              value: '车辆投诉'
            },
            {
              image: images.menu4,
              value: '自媒体'
            },
            {
              image: images.menu5,
              value: '配件'
            },
            {
              image: images.menu1,
              value: '维修'
            },
            {
              image: images.menu2,
              value: '跑腿'
            }
          ]
        }
        />
      </View>
    );
  }
}
