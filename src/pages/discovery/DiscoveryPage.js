import React from "react";
import {View, Text} from 'react-native';
import {Button, Badge} from 'react-native-elements';
import LoginPage from '../commons/LoginPage';

class DiscoveryPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    const nav = this.props.navigation;
    return (
        <View>
          <View style={{height: 400}}></View>
          <Button title={"登录"} onPress={() => nav.push('LoginPage')} />
          <Text></Text>
          <Button title={"测试"} onPress={() => nav.push('TestPage')} />

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

export default DiscoveryPage;
