import React from 'react';
import {View, Text, Image, StyleSheet, Keyboard, ScrollView, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import styles from '../../assets/style/Styles';
import ALDivider from '../../components/al-divider/ALDivider';
import ALInput from '../../components/al-input/ALInput';
import LinearGradient from "react-native-linear-gradient";


class RegisterPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
          <Text onPress={() => nav.goBack()}>密码登录</Text>
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
              <Text style={styles.alTextH1}>手机登录</Text>
              <Text style={[localStyle.colorGray, styles.alMarginTop20]}>专业用户体验设计平台</Text>
              <Text style={[localStyle.colorGray, styles.alMarginBottom20]}>设计师交流学习聚集地</Text>
            </View>

            <View style={{height: 30}}></View>

            {/*帐号输入框*/}
            <View style={styles.alMarginLR30}>
              <Text style={[localStyle.colorGray]}>手机号</Text>
              <ALInput onChangeText={(value) => {
                this.setState({
                  username: value
                })
              }} />

            </View>

            {/*登录按钮*/}
            <View style={[styles.alMarginLR30, styles.alMarginTop30]}>
              <LinearGradient
                style={{borderRadius: 10,}}
                start={{x: 0.3, y: 0.1}}
                end={{x: 0.9, y: 0.1}}
                colors={["#2f7bff", "#60b6fd"]}>
                <Text style={{
                  padding: 14,
                  textAlign: 'center',
                  color: '#fff',
                  borderRadius: 10,
                }} onPress={() => {
                  console.log(this.state.username);
                  console.log(this.state.password);
                  if (this.state.username === 'alanlee' && this.state.password === '123456'){
                    nav.goBack();
                  }else {
                    console.log("帐号密码错误");
                    React.showPositionToast("帐号密码错误");
                  }
                }}>获取验证码</Text>
              </LinearGradient>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>


        {/*提示文字*/}
        <View style={{marginLeft: 30,
          marginRight: 30, marginBottom: 80}}>
          <View style={styles.alMarginBottom30}>
            <ALDivider slotCenter={
              <Text style={[styles.alTextCenter, localStyle.colorGray]}>第三方登录</Text>
            } />
          </View>


          {/*第三方登录icon*/}
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

    // this.layout(this.alInput);
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

export default RegisterPage;
