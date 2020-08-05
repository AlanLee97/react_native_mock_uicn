import React from "react";
import {View, Text, StatusBar, ScrollView} from 'react-native'
import styles from '../../assets/style/Styles';
import ShowWorkBox from './component/ShowWorkBox';

class HomePage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      workList: [
        {
          poster: require('../../assets/image/my/poster1.png'),
          title: "UI中国手机客户端原创设计",
          look: 23421,
          like: 420,
          comment: 4232,
          tag: ['原创'],
          user: {
            username: "AlanLee",
            avatar: "https://gitee.com/AlanLee97/assert/raw/master/note_images/naruto.jpg",
            identity: "UI设计师",
          }
        },
        {
          poster: require('../../assets/image/my/poster2.png'),
          title: "「汉学」文学工具产品的视觉与体验碰撞",
          look: 23421,
          like: 420,
          comment: 4232,
          tag: ['原创'],
          user: {
            username: "AlanLee",
            avatar: "https://gitee.com/AlanLee97/assert/raw/master/note_images/naruto.jpg",
            identity: "UI设计师",
          }
        },
        {
          poster: require('../../assets/image/my/poster3.png'),
          title: "【顷刻】_视听解说APP",
          look: 23421,
          like: 420,
          comment: 4232,
          tag: ['原创'],
          user: {
            username: "AlanLee",
            avatar: "https://gitee.com/AlanLee97/assert/raw/master/note_images/naruto.jpg",
            identity: "UI设计师",
          }
        },
        {
          poster: require('../../assets/image/my/poster4.png'),
          title: "拼多多APP REDESIGN",
          look: 23421,
          like: 420,
          comment: 4232,
          tag: ['原创'],
          user: {
            username: "AlanLee",
            avatar: "https://gitee.com/AlanLee97/assert/raw/master/note_images/naruto.jpg",
            identity: "UI设计师",
          }
        },
        {
          poster: require('../../assets/image/my/poster5.png'),
          title: "Redesign《在外》APP ",
          look: 23421,
          like: 420,
          comment: 4232,
          tag: ['原创'],
          user: {
            username: "AlanLee",
            avatar: "https://gitee.com/AlanLee97/assert/raw/master/note_images/naruto.jpg",
            identity: "UI设计师",
          }
        }
      ]
    };
  }

  // 渲染函数
  render() {
    const state = this.state;
    return (
        <View style={{backgroundColor: "#fff",
        paddingTop: 30}}>
          {/*设置状态栏（透明）*/}
          <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" barStyle={'dark-content'} />

          {/*标题栏*/}
          <View style={[styles.alFlexRow, styles.alPaddingLR20, styles.alPaddingTB10]}>
            <Text style={[styles.alColorBlue, styles.alTextH4]}>首推</Text>
            <Text style={[styles.alColorGray, styles.alTextH4, styles.alMarginLeft20]}>关注</Text>
            <Text style={[styles.alColorGray, styles.alTextH4, styles.alMarginLeft20]}>最新</Text>
            <Text style={[styles.alColorGray, styles.alTextH4, styles.alMarginLeft20]}>佳作分享</Text>
          </View>

          {/*作品列表*/}
          <ScrollView>
            {
              state.workList.map((item, index) => {
                return <ShowWorkBox data={item} />
              })
            }

            <View style={{height: 50}}></View>
          </ScrollView>

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
