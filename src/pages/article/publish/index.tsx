import React, { Component } from "react";
import { AtButton, AtIcon, AtImagePicker, AtTag, AtTextarea } from "taro-ui";
import { Text, View } from "@tarojs/components";
import "./index.scss";
import Taro from "@tarojs/taro";
import { publishArticleApi } from "../../../api/article";
import { delFile, uploadFileUrl } from "../../../api/upload";
import { navigateToLogin } from "@utils/app";


export default class ArticleDetail extends Component<any, any> {

  state = {
    article: {
      content: '',
      images: [],
      location: '',
      latitude: '',
      longitude: '',
      tags:[]
    },
    files: [],
    uploadFiles: []

  }

  componentDidShow(){

  }
  handleChange(content) {
    const { article } = this.state;
    article.content = content;
    this.setState({
      article
    });
  }

  uploadImage(file) {
    const than = this;
    const { article,uploadFiles } = this.state;
    const token = Taro.getStorageSync('token');
    // @ts-ignore
    if (uploadFiles.indexOf(file) > -1){
      console.log("图片已上传");
      return;
    }
    const { progress,headersReceive } = Taro.uploadFile({
      url: uploadFileUrl,
      filePath: file.url,
      name: "file",
      header: { 'Authorization': 'Bearer ' + token },
      success: res => {
        console.log("上传请求", res.data);
        // @ts-ignore
        const body = JSON.parse(res.data);
        if (body.code == 401){
          navigateToLogin();
        }
        console.log("后端返回的图片",body.result);
        if (!body.success) {
          Taro.showToast({ title: "图片上传失败", icon: "error" }).then();
          return;
        }
        // @ts-ignore
        article.images.push(body.result);
        // @ts-ignore
        uploadFiles.push(file);
        than.setState({ article,uploadFiles });
      }
    });
      console.log("headersReceive:",headersReceive);
      progress((res) => {
      console.log('上传进度', res.progress);
      console.log('已经上传的数据长度', res.totalBytesSent);
      console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
    });
    console.log("fun end");
  }

  delImage = (fileName) =>{
    delFile({ file_name: fileName }).then();
  }


  onChange(files,ops,index) {
    console.log("file on change :",files,ops,index);
    if (ops === "remove"){
      console.log("删除图片");
    }
    files.map(file => {
      console.log("处理图片");
      this.uploadImage(file);
      console.log("处理完毕");
    });
    this.setState({
      files
    });
  }

  onPublish = () =>{
      // 上传图片
      const { article } = this.state;
      publishArticleApi(article).then(res => {
        console.log("发布文章",article);
        console.log("res", res);
        // @ts-ignore
        if (res.success) {
          Taro.navigateBack();
          Taro.showToast({ title: '发布成功' });
        }
      });

  }
  onFail (mes) {
    console.log(mes);
  }
  onImageClick (index, file) {
    console.log(index, file);
  }

  getLocation = () => {
    let { article } = this.state;
    // 选择定位
    const than = this;
    Taro.authorize({
      scope: 'scope.userLocation',
      success: function () {
        // 用户已经同意小程序使用定位功能，后续调用 Taro.chooseLocation 接口不会弹窗询问
        Taro.chooseLocation({
          success(ret) {
            const _position = {
              ...ret,
              location: ret.name,
            };
            article.location = (_position.name ? _position.name : _position.address);
            article.longitude = _position.longitude;
            article.latitude = _position.latitude;
            than.setState({ article });
            console.log(_position);
          }
        });
      },
      fail: function (err) {
        if (err?.errMsg?.indexOf('auth deny') > -1) {
          Taro.showToast({ title: '请在小程序页面右上角 - 更多 - 设置里允许小程序使用定位权限~' }).then();
        }
      }
    });
  }

  render() {
    return (
      <view className="at-article">
        <AtTextarea
          className="article-content"
          height={400}
          value={this.state.article.content}
          onChange={this.handleChange.bind(this)}
          maxLength={500}
          placeholder="分享你的骑行生活"
        />
        <View />
        <AtImagePicker
          files={this.state.files}
          onImageClick={this.onImageClick.bind(this)}
          onFail={this.onFail.bind(this)}
          onChange={this.onChange.bind(this)}
        />
        <AtTag className="article-tag">#话题</AtTag>
        <View className="article-location" onClick={this.getLocation}>
          <View>
            <AtIcon className="left-icon" value="map-pin" />
            <Text>{this.state.article.location || "所在位置"}</Text>
          </View>
          <AtIcon value="chevron-right" />
        </View>
        <AtButton className="publish" onClick={this.onPublish}>发布动态</AtButton>
      </view>
    );
  }
}
