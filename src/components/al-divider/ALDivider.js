import React from "react";
import {View, Text, Dimensions} from 'react-native'

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

class ALDivider extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    const props = this.props;
    return (
        <View style={{
          margin: React.createDefaultValue(props.margin, 0),
          width: React.createDefaultValue(props.width, screenWidth),
          height: React.createDefaultValue(props.weight, 0.5),
          backgroundColor: React.createDefaultValue(props.color, '#eeeeee')
        }} />
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }



}

export default ALDivider;
