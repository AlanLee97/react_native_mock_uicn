import React from 'react';
import {View, Text, TextInput} from 'react-native';
import ALDivider from '../al-divider/ALDivider';
import styles from '../../assets/style/Styles';

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
        <View style={{flex: 1}}>
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
                       selectionColor={React.createDefaultValue(this.props.primaryColor, styles.alColorBlue.color) }
            />
          </View>
          <View style={{flex: 1}}>
            <ALDivider
              weight={state.focused ? 2 : 0.5}
              color={state.focused ?
                React.createDefaultValue(this.props.primaryColor, styles.alColorBlue.color)
                :
                styles.alColorGray.color}/>
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

export default ALInput;
