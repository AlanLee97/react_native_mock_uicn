import React from 'react';
import {View, Text, StatusBar, ScrollView, Dimensions, StyleSheet} from 'react-native';
import ALTabs from '../../components/al-tabs/ALTabs';
import IndexPage from './page/IndexPage';
import NewestPage from './page/NewestPage';
import FollowPage from './page/FollowPage';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class HomePage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      workList: 1,
    };
  }

  // 渲染函数
  render() {
    const state = this.state;
    const tabs = [
      {key: 'index', title: '首页推荐', component: IndexPage},
      {key: 'newest', title: '最新', component: NewestPage},
      {key: 'follow', title: '关注', component: FollowPage},
    ];


    return (
      <View style={{
        backgroundColor: '#fff',
        paddingTop: 30,
      }}>
        {/*设置状态栏（透明）*/}
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" barStyle={'dark-content'}/>

        <View style={{width: screenWidth, height: screenHeight}}>
          <ALTabs tabs={tabs} tabBarStyle={localStyle.tabBarStyle} />
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

export default HomePage;

const localStyle = StyleSheet.create({
  tabBarStyle:{
    backgroundColor: "#00000000"
  }
})
