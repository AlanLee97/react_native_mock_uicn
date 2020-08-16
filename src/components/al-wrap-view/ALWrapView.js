import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import styles from '../../assets/style/Styles';

class ALWrapView extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    return (
        <View style={[localStyle.boxStyle]} {...this.props}>
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


export default ALWrapView;

// 样式
const localStyle = StyleSheet.create({
    boxStyle: {
      display: 'flex',
      alignSelf: 'flex-start',
    }
  });
