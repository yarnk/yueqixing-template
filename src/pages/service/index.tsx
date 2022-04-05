import React, { Component } from "react";
import { Text, View } from "@tarojs/components";
import './index.scss';
import { AtButton, AtImagePicker, AtInput, AtNoticebar, AtTextarea, AtTimeline } from "taro-ui";
import AMapLoader from '@amap/amap-jsapi-loader';
import ServiceNavBar from "@components/service-nav-bar";
import ServiceMenu from "@components/service-menu";

export default class MendPage extends Component<any, any> {
  state = {
    files: [],
    remark: '',
    price: '',
    mend_cate_list: {},

    map: {},
    // 是否已经选择定位
    // 当前定位
  }

  // 2.dom渲染成功后进行map对象的创建
  loadAMap = (a) => {
    AMapLoader.load({
      key: "ed51d80522c51ad275abeb84e90d092b", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0",              // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [''],               // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap) => {
      const map = new AMap.Map("container", { // 设置地图容器id
        viewMode: "3D",         // 是否为3D地图模式
        zoom: 5,                // 初始化地图级别
        center: a, // 初始化地图中心点位置 [105.602725,37.076636]
      });
      this.setState({ map: map });
    }).catch(e => {
      console.log(e);
    });
  }

  onChangeFile(files) {
    this.setState({
      files
    });
  }


  render() {
    return (
      <View>
        <ServiceNavBar />
        <ServiceMenu />
        <AtNoticebar icon="volume-plus" close marquee>福利：即日起平台不收取任何手续费，所有运营产生的利润将用户维护和优惠券转化！</AtNoticebar>
        <View className="service-body">
          <Text className="task-title">您有正在进行中的服务</Text>
          <AtTimeline
            customStyle={{ marginTop: '20px' }}
            pending
            items={[
              { title: '师傅已接单', content: ['正在安排'], icon: 'check-circle' },
              { title: '取配件', content: ['后视镜+踏板', '圆形通用'], icon: 'clock' },
              { title: '上门服务', content: ['电话联系', '实物拍照'], icon: 'clock' },
              { title: '支付', content: ['支付服务费用'], icon: 'clock' }
            ]}
          />
        </View>
      </View>
    );
  }
}
