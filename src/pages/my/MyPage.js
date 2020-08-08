import React from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import styles from '../../assets/style/Styles';
import AvatarAndNickname from './component/AvatarAndNickname';
import CountBox from './component/CountBox';
import IconTextBox from './component/IconTextBox';
import ShowWorkBox from './component/ShowWorkBox';
import ALDivider from '../../components/al-divider/ALDivider';
import {request} from '../../util/network/axiosRequest';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

class MyPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      countData: [
        {
          count: 32,
          text: '作品',
        },
        {
          count: 58,
          text: '关注',
        },
        {
          count: 8560,
          text: '粉丝',
        },
        {
          count: 233,
          text: '热力值',
        },
      ],
      iconTextData: [
        {
          icon: require('../../assets/icon/my/fenlei.png'),
          text: '我收藏的',
        },
        {
          icon: require('../../assets/icon/my/xinxi.png'),
          text: '我的评论',
        },
        {
          icon: require('../../assets/icon/my/dianzan.png'),
          text: '点赞',
        },
      ],
      workData: [
        {
          url: require('../../assets/image/my/poster1.png'),
          title: 'UI中国手机客户端原创设计',
          like: 12,
          comment: 32,
        },
        {
          url: require('../../assets/image/my/poster2.png'),
          title: '「汉学」文学工具产品的视觉与体验碰撞',
          like: 43,
          comment: 2432,
        },
        {
          url: require('../../assets/image/my/poster3.png'),
          title: '【顷刻】_视听解说APP',
          like: 123,
          comment: 5452,
        },
        {
          url: require('../../assets/image/my/poster4.png'),
          title: '拼多多APP REDESIGN',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../assets/image/my/poster5.png'),
          title: 'Redesign《在外》APP ',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../assets/image/my/poster6.png'),
          title: '植物类社交APP概念设计',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../assets/image/my/poster7.png'),
          title: '优灵APP改版 - 帮助你发现优秀产品和设计灵感',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../assets/image/my/poster8.png'),
          title: '晓知新闻APP',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../assets/image/my/poster9.png'),
          title: '微信Redesign（重设计）',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../assets/image/my/poster10.png'),
          title: '生活家 - APP视觉设计',
          like: 123,
          comment: 362,
        },
      ],
    };
  }

  // 渲染函数
  render() {
    const {userInfo, countData, iconTextData, workData} = this.state;
    if (userInfo == null) {
      return <View style={styles.alFlexCenter}><Text>无数据</Text></View>;
    } else {
      return (
        <ScrollView style={{
          backgroundColor: '#fff',
          paddingTop: 30,
        }}>
          {/*用户名和昵称*/}
          <AvatarAndNickname userInfo={userInfo} padding={20}/>

          {/*统计数据*/}
          <View style={[localStyle.countBoxStyle]}>
            {
              countData.map((item, index) => {
                return <CountBox key={item.text}
                                 count={item.count}
                                 text={item.text}/>;
              })
            }
          </View>

          {/*收藏、评论、点赞*/}
          <View style={[localStyle.countBoxStyle]}>
            {
              iconTextData.map((item, index) => {
                return <IconTextBox key={item.text} icon={item.icon} text={item.text}/>;
              })
            }
          </View>

          {/*分割线*/}
          <View style={styles.alMarginBottom20}>
            <ALDivider/>
          </View>

          {/*tab标题栏*/}
          <View style={styles.alMarginLR20}>
            <View style={[styles.alFlexRow, styles.alFlexSpaceBetween]}>
              <View style={[styles.alFlexRow]}>
                <Text style={styles.alTextH4}>作品</Text>
                <View style={{width: 20}}></View>
                <Text style={[styles.alTextH4, localStyle.colorGray]}>经验</Text>
                <View style={{width: 20}}></View>
                <Text style={[styles.alTextH4, localStyle.colorGray]}>灵感</Text>
              </View>

              <View>
                <Text style={styles.alTextDesc}>18个</Text>
              </View>
            </View>
          </View>

          {/*作品列表*/}
          <View style={[styles.alFlexRow, styles.alFlexWrap, styles.alPadding20, styles.alFlexSpaceBetween]}>
            {
              workData.map((item, index) => {
                return <View key={item.title} style={[styles.alMarginBottom25]}>
                  <ShowWorkBox
                    width={screenWidth / 2.4}
                    url={item.url}
                    title={item.title}
                    like={item.like}
                    comment={item.comment}/>
                </View>;
              })
            }
          </View>
        </ScrollView>
      );
    }

  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    this.getMockData();

  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  getMockData = () => {
    let url = React.mockPath + '/user.json';

    request({
      url: url,
      method: 'GET',
      data: {},
    }).then(res => {
      console.log(res.data);
      this.setState({
        userInfo: res.data.data
      })
    }).catch(err => {
      console.log(err);
    });
  };


}

const localStyle = StyleSheet.create({

  countBoxStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  colorGray: {
    color: '#999',
  },
});

export default MyPage;
