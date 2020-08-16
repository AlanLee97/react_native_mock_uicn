//作品详情页
import React from "react";
import {View, Text} from 'react-native'
import AvatarAndNickname from '../my/component/AvatarAndNickname';
import styles from '../../assets/style/Styles';
import ALTag from '../../components/al-tag/ALTag';
import ALWrapView from '../../components/al-wrap-view/ALWrapView';
import ALPlaceView from '../../components/al-place-view/ALPlaceView';

class WorkDetailPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    const workData = this.props.route.params.workData;
    return (
        <View style={[styles.alPadding30]}>

          <View style={[styles.alFlexRow, styles.alFlexSpaceBetween, styles.alPaddingTB20]}>
            <View><Text onPress={() => {this.props.navigation.goBack()}}>返回</Text></View>
            <View><Text>分享</Text></View>
          </View>

          <View style={[styles.alFlexRow, styles.alFlexSpaceBetween]}>
            <AvatarAndNickname
              text1={workData.user.nickname}
              text2={"永远相信美好的事情即将发生"}
              avatar={workData.user.avatar} />

            <ALWrapView>
              <View style={[styles.alFlexCenterV]}>
                <View style={[localStyle.followBox]}>
                  <Text style={localStyle.followText}>+关注</Text>
                </View>
              </View>
            </ALWrapView>
          </View>

          <ALPlaceView height={20} />

          <Text style={localStyle.textColorBlue}>作品详情页， 作品id：{this.props.route.params.workData.id}</Text>
          <Text style={localStyle.textColorBlue}>作品详情页， 作品title：{this.props.route.params.workData.title}</Text>
        </View>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    console.log("WorkDetailPage.js======================");
    console.log(this.props.route.params.workData);
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

}


export default WorkDetailPage;

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
  followBox: {
    padding: 8,
    width: 80,
    textAlign: "center",
    borderRadius: 100,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#409EFF"
  },
  followText: {
    textAlign: "center",
    color: "#409EFF"
  }
}
