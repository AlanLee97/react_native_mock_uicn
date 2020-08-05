import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import ALImage from "../../../components/al-image/ALImage";
import styles from "../../../assets/style/Styles";

class ShowWorkBox extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    const props = this.props;
    return (
        <View style={{width: props.width - 0}}>
          <View style={{borderRadius: 10}}>
            <ALImage src={props.url} width={props.width} height={120} radius={15} />
          </View>
          <Text numberOfLines={1} style={[styles.alTextH5, styles.alMarginTop10]}>{props.title}</Text>
          <Text style={[styles.alTextDesc, styles.alMarginTop10, styles.alFontSize12]}>
            {props.like}点赞  ·  {props.comment}评论
          </Text>

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

const localStyle = StyleSheet.create({
  lineHeight: {
    lineHeight: 30
  },

  wrapWidth: {
    display: 'flex',
    alignSelf: 'flex-start'
  },

  boxStyle: {
    display: 'flex',
    alignSelf: 'flex-start',
  }


});

export default ShowWorkBox;
