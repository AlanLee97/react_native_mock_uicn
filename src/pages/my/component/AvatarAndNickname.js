import React from "react";
import {View, Text} from 'react-native'
import ALImage from "../../../components/al-image/ALImage";
import styles from "../../../assets/style/Styles";

class AvatarAndNickname extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    const userInfo = this.props.userInfo;
    const props = this.props;
    return (
        <View style={{flexDirection: 'row',
          padding: React.createDefaultValue(props.padding, 0),
          margin: React.createDefaultValue(props.margin, 0),
        }}>
          <ALImage url={userInfo.avatar} round={true} width={50} height={50} />
          <View style={{width: 10}}></View>
          <View>
            <Text style={styles.alTextH2}>{userInfo.username}</Text>
            <Text style={styles.alTextDesc}>{userInfo.sign}</Text>
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

export default AvatarAndNickname;
