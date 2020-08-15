import React from "react";
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Tabs, Button } from '@ant-design/react-native';
import styles from '../../assets/style/Styles';
import ALTabs from '../../components/al-tabs/ALTabs';
import TestTabs from './TestTabs';

export default class TestPage extends React.Component{

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
        <View style={{paddingTop: 40}}>

          <Button onPress={() => {
            nav.push("TestTabs")
          }}>测试Tabs</Button>

          <View style={{width: 400, height: 600}}>
            <TestTabs />
          </View>

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

// 样式
const localStyle = {
  textColorBlue: {
    color: "blue"
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  height60: {
    height: 60+'px'
  },
  bgColor: {
    backgroundColor: "#5de7ae"
  }
}


