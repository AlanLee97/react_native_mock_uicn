import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import styles from '../../assets/style/Styles';
import ALDivider from '../../components/al-divider/ALDivider';


class LoginPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
    };
  }

  // 渲染函数
  render() {
    const state = this.state;
    const nav = this.props.navigation;
    const screenWidth = React.getScreenWidth();
    const screenHeight = React.getScreenHeight();
    return (
        <View style={{
          paddingTop: 30,
          backgroundColor: '#fff',
          width: screenWidth,
          height: screenHeight + 100,
        }}>
          <View style={[styles.alFlexRow, styles.alFlexSpaceBetween, styles.alPadding20]}>
            <Text onPress={() => nav.goBack()}>返回</Text>
            <Text onPress={() => nav.push('RegisterPage')}>注册</Text>
          </View>

          <View style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            {/*LOGO*/}
            <Image style={{
              width: 80,
              height: 80,
            }} source={require('../../assets/image/common/logo.png')}/>
            <Text style={styles.alTextH1}>欢迎登录</Text>
            <Text style={[localStyle.colorGray, styles.alMarginTop20]}>专业用户体验设计平台</Text>
            <Text style={[localStyle.colorGray, styles.alMarginBottom20]}>设计师交流学习聚集地</Text>
          </View>

          <View style={{height: 30}}></View>
          {/*帐号输入框*/}
          <View style={styles.alMarginLR30}>
            <Text style={[localStyle.colorGray]}>手机号/用户名/邮箱</Text>
            <TextInput height={40}/>
            <ALDivider width={screenWidth - 60} weight={2} color={'#3e9bf7'}/>
          </View>

          {/*密码输入框*/}
          <View style={[styles.alMarginLR30, styles.alMarginTop30]}>
            <Text style={[localStyle.colorGray]}>用户密码</Text>
            <TextInput caretHidden={true} height={40}/>
            <ALDivider width={screenWidth - 60}/>
          </View>

          <View style={[
            styles.alFlexRow,
            styles.alFlexSpaceBetween,
            styles.alMarginTop10,
            styles.alMarginLR30]}>
            <Text>忘记密码？</Text>
            <Text style={{color: '#62acf8'}}>免密码登录</Text>
          </View>

          {/*登录按钮*/}
          <View style={[styles.alMarginLR30, styles.alMarginTop30]}>
            <Text style={{
              padding: 14,
              textAlign: 'center',
              backgroundColor: '#62acf8',
              color: '#fff',
              borderRadius: 10,
            }}>登录</Text>
          </View>

          <View style={[styles.alMargin30]}>
            <Text style={[localStyle.colorGray, styles.alTextCenter, styles.alMargin30]}>第三方登录</Text>

            <View style={[styles.alFlexRow, styles.alFlexSpaceBetween]}>
              <Image style={{
                width: 30,
                height: 30,
              }} source={require('../../assets/icon/common/qq.png')}/>
              <Image style={{
                width: 30,
                height: 30,
              }} source={require('../../assets/icon/common/wechat.png')}/>
              <Image style={{
                width: 30,
                height: 30,
              }} source={require('../../assets/icon/common/weibo.png')}/>
            </View>
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

  goPage(path) {
    const state = this.state;
    state.navigation.navigate(path);
  }
}

const localStyle = StyleSheet.create({
  colorGray: {
    color: '#cdcdcd',
  },
});

export default LoginPage;
