import React from "react";
import {Image} from 'react-native'

class ALImage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    const state = this.state;
    const props = this.props;

    return (
        <Image source={props.src !== undefined ? props.src : {uri: props.url}} style={{
          width: React.createDefaultValue(props.width, React.getScreenWidth()),
          height: React.createDefaultValue(props.height, React.getScreenWidth()),
          borderRadius: props.round ? props.width : props.radius,
        }}/>
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

export default ALImage;
