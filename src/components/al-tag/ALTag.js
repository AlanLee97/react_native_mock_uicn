import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import styles from '../../assets/style/Styles';

class ALTag extends React.Component{

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
          alignSelf: 'flex-start',
          borderRadius: 100,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 2,
          paddingBottom: 2,
          backgroundColor: React.createDefaultValue(props.bgColor, "rgba(198,228,255,0.2)")
        }}>
          <Text style={{color: React.createDefaultValue(props.color, "#07d1ff")}}>{props.text}</Text>
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
  boxStyle: {

  }
});
export default ALTag;
