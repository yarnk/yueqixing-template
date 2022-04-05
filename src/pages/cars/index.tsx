import React,{ Component } from "react";
import { View } from "@tarojs/components";
import ServiceNavBar from "@components/service-nav-bar";
import IndexSelection from "@components/index-selection";
import SearchNavBar from "@components/search-nav-bar";

export default class Cars extends Component<any, any>{
  render() {
    return (
      <View>
        <SearchNavBar />

        <IndexSelection />
      </View>
    );
  }
}
