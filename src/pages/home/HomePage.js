import React from "react";
import {View, Text, Button, StatusBar} from 'react-native'

class HomePage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
    };
  }

  // 渲染函数
  render() {
    const navigation = this.state.navigation;
    return (
        <View style={{flex: 1,
          justifyContent: 'center', alignItems: 'center'}}>
          <Text>HomePage</Text>

          {/*设置状态栏（透明）*/}
          <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" barStyle={'dark-content'} />
          {/*<Text>接收的参数：{uid}</Text>*/}
          <Button title="去登录" onPress={() => {navigation.push('LoginPage')}}></Button>
          <Text></Text>
          <Button title="去测试页面" onPress={() => {navigation.push('TestNetwork')}}></Button>
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

export default HomePage;
