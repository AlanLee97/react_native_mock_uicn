import React from "react";
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import ShowWorkBox from '../component/ShowWorkBox';
import {request} from '../../../util/network/axiosRequest';
import styles from '../../../assets/style/Styles';
import ALPlaceView from '../../../components/al-place-view/ALPlaceView';

class IndexPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      workList: [],
    };
  }

  // 渲染函数
  render() {
    const nav = this.props.navigation;
    return (
      <ScrollView>
        <ALPlaceView height={20} />

        {
          this.state.workList.map((item, index) => {
            return <TouchableOpacity key={item.title} onPress={() => {
              this.props.navigation.push("WorkDetailPage", {workData: item})
            }}>
              <ShowWorkBox navigation={nav}  data={item} />
            </TouchableOpacity>
          })
        }

        <View style={{height: 50}}>
          <Text style={[styles.alTextCenter, styles.alColorGray]}>
            到底啦~
          </Text>
        </View>
      </ScrollView>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    this.getMockData();
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  // 请求作品列表数据
  getMockData = () => {
    let url = React.mockPath + '/home_work_list.json';

    request({
      url: url,
      method: 'GET',
      data: {},
    }).then(res => {
      // console.log(res.data.data);
      this.setState({
        workList: res.data.data
      });
      // console.log(this.state.workList);
    }).catch(err => {
      console.log(err);
    });
  };

}


export default IndexPage;

// 样式
const localStyle = {
  textColorBlue: {
    color: "blue"
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
}
