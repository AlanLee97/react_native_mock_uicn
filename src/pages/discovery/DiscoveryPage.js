import React from "react";
import {View, Text} from 'react-native'
import styles from '../../assets/style/Styles';

class DiscoveryPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    return (
        <View style={styles.alFlexCenter}>
          <Text>DiscoveryPage</Text>
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
