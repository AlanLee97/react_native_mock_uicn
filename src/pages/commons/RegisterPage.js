import React from "react";
import {View, Text, Button} from 'react-native';
import {HOME_PAGE} from "../../router/RouterConst";

class RegisterPage extends React.Component{

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
    return (
        <View>
          <Text>LoginPage</Text>
          <Button title="注册成功，返回首页" onPress={() => {
            state.navigation.navigate('HomePage')
          }} ></Button>

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

  goPage(path){
    const state = this.state;
    state.navigation.navigate(path)
  }


}

export default RegisterPage;
