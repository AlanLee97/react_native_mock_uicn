import React from "react";
import {View, Text} from 'react-native'

class ALPlaceView extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    return (
        <View style={{width: this.props.width, height: this.props.height}}>
          {this.props.children}
        </View>
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


export default ALPlaceView;

