import React, { Component } from "react";
import { Text, View } from "@tarojs/components";
import { AtButton, AtImagePicker, AtInput, AtTextarea } from "taro-ui";

export default class PublishService extends Component<any, any>{
  state = {
    price: "",
    remark: "",
    files: []
  }

  onChangeFile(){

  }

  handleChangePrice(val) {
    this.setState({
      price: val
    });
  }

  handleChangeRemark(val) {
    this.setState({
      remark: val
    });
  }

  render() {
    const { price,remark,files } = this.state;
    return (
      <View>
        <View className="service-body">
          <Text>需求图片</Text>
          <AtImagePicker
            files={files}
            onChange={this.onChangeFile.bind(this)}
          />
          <View>当前服务通畅</View>
          <View id="container" className="map" />
          <AtInput
            name="price"
            title="价格"
            type="digit"
            placeholder="请输入价格"
            border
            required
            value={price}
            onChange={this.handleChangePrice.bind(this)}
          >
            <Text>元</Text>
          </AtInput>
          <AtTextarea
            count={false}
            value={remark}
            onChange={this.handleChangeRemark.bind(this)}
            maxLength={200}
            placeholder="请简单描述现在状况"
          />
          <AtButton className="publish-btn" type="primary">极速发单</AtButton>
        </View>
      </View>
    );
  }
}
