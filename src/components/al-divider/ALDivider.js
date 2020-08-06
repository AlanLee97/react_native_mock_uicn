import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from '../../assets/style/Styles';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

class ALDivider extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染函数
  render() {
    return (
        <View>
          {
            this.props.children ? this.props.children :
                <View>
                  {
                    this.props.slotCenter ?
                        <View style={[styles.alFlexRow, styles.alFlexCenter]}>
                          <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            height: React.createDefaultValue(this.props.weight, 0.5),
                            backgroundColor: React.createDefaultValue(this.props.color, '#eee'),
                          }}/>
                          <View style={{flex: 1}}>
                            {this.props.slotCenter}
                          </View>
                          <View style={{
                            flex: 1,
                            height: React.createDefaultValue(this.props.weight, 0.5),
                            backgroundColor: React.createDefaultValue(this.props.color, '#eee'),
                          }}/>
                        </View> :
                        <View style={{
                          margin: React.createDefaultValue(this.props.margin, 0),
                          width: React.createDefaultValue(this.props.width, screenWidth),
                          height: React.createDefaultValue(this.props.weight, 0.5),
                          backgroundColor: React.createDefaultValue(this.props.color, '#eeeeee'),
                        }}/>
                  }
                </View>
          }
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

export default ALDivider;
