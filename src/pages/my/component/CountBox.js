import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import styles from "../../../assets/style/Styles";

class CountBox extends React.Component{

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
        <View style={[styles.alFlexCenter, localStyle.boxStyle]}>
          <Text style={styles.alTextH5}>{props.count}</Text>
          <Text style={styles.alTextDesc}>{props.text}</Text>
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

const localStyle = StyleSheet.create({
  bgColor: {
    backgroundColor: "red"
  },

  boxStyle: {
    backgroundColor: "#fcfcfc",
    borderRadius: 10,
    margin: 10,
    padding: 10
  }
});
export default CountBox;
