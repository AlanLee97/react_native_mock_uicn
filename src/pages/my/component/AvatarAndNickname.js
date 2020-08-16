import React from "react";
import {View, Text} from 'react-native'
import ALImage from "../../../components/al-image/ALImage";
import styles from "../../../assets/style/Styles";
import ALWrapView from '../../../components/al-wrap-view/ALWrapView';

class AvatarAndNickname extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    return (
        <ALWrapView>
          <View style={{
            flexDirection: 'row',
            padding: this.props.padding ?? 0,
            margin: this.props.margin ?? 0,
          }}>
            <ALImage url={this.props.avatar} round={true} width={50} height={50} />
            <View style={{width: 10}}></View>
            <View style={[localStyle.flexCenterVertical]}>
              <Text style={styles.alTextH3}>{this.props.text1}</Text>
              <Text style={styles.alTextDesc}>{this.props.text2}</Text>
            </View>
          </View>
        </ALWrapView>
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

export default AvatarAndNickname;

const localStyle = {
  flexCenterVertical: {
    justifyContent: "center"
  }
}
