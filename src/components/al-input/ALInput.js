import React from 'react';
import {View, Text, TextInput} from 'react-native';
import ALDivider from '../al-divider/ALDivider';

class ALInput extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  };


  // 渲染函数
  render() {
    const state = this.state;
    const screenWidth = React.getScreenWidth();
    const screenHeight = React.getScreenHeight();

    return (
        <View>
          <TextInput {...this.props}
                     onFocus={(e) => {
                       this.setState({
                         focused: true,
                       });
                     }}
                     onBlur={() => {
                       this.setState({
                         focused: false,
                       });
                     }}
                     secureTextEntry={this.props.type === 'password'}
                     selectionColor={React.createDefaultValue(this.props.primaryColor,'#3e9bf7')}
          />
          <ALDivider width={screenWidth - 60}
                     weight={state.focused ? 2 : 0.5}
                     color={state.focused ? React.createDefaultValue(this.props.primaryColor, '#3e9bf7') : '#eee'}/>
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

export default ALInput;
