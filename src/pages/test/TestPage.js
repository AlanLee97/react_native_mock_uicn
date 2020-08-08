import React from "react";
import {View, Text, } from 'react-native';
import LinearGradient from "react-native-linear-gradient";


class TestPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    return (
        <View style={{marginTop: 400}}>
          <LinearGradient
            start={{x: 0.1, y: 0.1}}
            end={{x: 0.8, y: 0.8}}
            colors={['#5fdea7', '#1C86EE']}>
            <Text style={localStyle.textColorBlue}>Hello React Native</Text>
          </LinearGradient>
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


export default TestPage;

// 样式
const localStyle = {
  textColorBlue: {
    color: "blue"
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
}
