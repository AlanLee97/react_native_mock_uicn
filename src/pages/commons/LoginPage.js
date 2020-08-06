import React from 'react';
import {View, Text, Image, TextInput, StyleSheet, Keyboard, ScrollView, KeyboardAvoidingView} from 'react-native';
import styles from '../../assets/style/Styles';
import ALDivider from '../../components/al-divider/ALDivider';
import ALInput from '../../components/al-input/ALInput';


class LoginPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      focusUsernameInput: false,
      hideLogo: false,
      keyboardHeight: '',
      thirdLoginIcon: [
        {
          icon: require('../../assets/icon/common/qq.png')
        },
        {
          icon: require('../../assets/icon/common/wechat.png')
        },
        {
          icon: require('../../assets/icon/common/weibo.png')
        }
      ]
    };
  }

  // 渲染函数
  render() {
    const state = this.state;
    const nav = this.props.navigation;
    const screenWidth = React.getScreenWidth();
    const screenHeight = React.getScreenHeight();
    let focus = false;
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


          <KeyboardAvoidingView
              behavior='padding'
              style={{flex: 1}}
              keyboardVerticalOffset={-this.state.keyboardHeight}>
            <ScrollView>


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
                <ALInput selectionColor={'#3e9bf7'}/>
                <ALDivider width={screenWidth - 60}
                           weight={state.focusUsernameInput ? 2 : 0.5}
                           color={state.focusUsernameInput ? '#3e9bf7' : '#eee'}/>
              </View>

              {/*密码输入框*/}
              <View style={[styles.alMarginLR30, styles.alMarginTop30]}>
                <Text style={[localStyle.colorGray]}>用户密码</Text>
                <ALInput selectionColor={'#3e9bf7'} type={'password'}/>
                <ALDivider width={screenWidth - 60}/>
              </View>

              <View style={[
                styles.alFlexRow,
                styles.alFlexSpaceBetween,
                styles.alMarginTop20,
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
            </ScrollView>
          </KeyboardAvoidingView>


          <View style={{marginLeft: 30,
          marginRight: 30, marginBottom: 80}}>
            <View style={styles.alMarginBottom30}>
              <ALDivider slotCenter={
                <Text style={[styles.alTextCenter, localStyle.colorGray]}>第三方登录</Text>
              } />
            </View>


            <View style={[styles.alFlexRow, styles.alFlexSpaceBetween]}>
              {this.state.thirdLoginIcon.map((item) => {
                return <Image key={item.icon} style={{
                  width: 30,
                  height: 30,
                }} source={item.icon}/>
              })}

            </View>

          </View>
        </View>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {  // 监听键盘高度
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  //组件将要卸载时
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }


  _keyboardDidShow(e) {  // 获取键盘高度
    this.setState({
      keyboardHeight: e.endCoordinates.height,
    });
  }

  _keyboardDidHide(e) {
    this.setState({
      keyboardHeight: 0,
    });
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
