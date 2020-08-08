import React from "react";
import {View, Text} from 'react-native'
import styles from '../../../assets/style/Styles';
import AvatarAndNickname from '../../my/component/AvatarAndNickname';
import ALImage from '../../../components/al-image/ALImage';
import ALTag from '../../../components/al-tag/ALTag';

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
    return <View key={this.props.data.title} style={[styles.alMarginLR20, styles.alMarginBottom30]}>
      <AvatarAndNickname
        avatar={this.props.data.user.avatar}
        text1={this.props.data.user.nickname}
        text2={this.props.data.user.identity} />
      <View style={{height: 10}}></View>
      <ALImage url={this.props.data.poster} width={React.getScreenWidth() - 40} height={React.getScreenWidth() - 40} radius={20} />
      <Text numberOfLines={1} style={[styles.alTextH4, styles.alMarginTB10]}>{this.props.data.title}</Text>
      <View style={[styles.alFlexRow, styles.alFlexSpaceBetween]}>
        {/*显示标签*/}
        <View>
          {
            props.data.tag.map((item2, index2) => {
              return <ALTag key={item2} text={item2} />
            })
          }
        </View>
        <View style={[styles.alFlexRow]}>
          <View style={[styles.alFlexRow]}>
            <ALImage src={require('../../../assets/icon/home/look.png')} width={20} height={20} />
            <Text style={{color: '#cdcdcd'}}>{props.data.look}    </Text>
          </View>
          <View style={[styles.alFlexRow]}>
            <ALImage src={require('../../../assets/icon/home/like.png')} width={18} height={18} />
            <Text style={{color: '#cdcdcd'}}>{props.data.like}    </Text>
          </View>
          <View style={[styles.alFlexRow]}>
            <ALImage src={require('../../../assets/icon/home/comment.png')} width={20} height={20} />
            <Text style={{color: '#cdcdcd'}}>{props.data.comment}</Text>
          </View>
        </View>
      </View>
    </View>
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }


}

export default ShowWorkBox;
