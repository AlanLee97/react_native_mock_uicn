import React from "react";
import {View, Text, StatusBar, ScrollView, Dimensions} from 'react-native';
import styles from '../../assets/style/Styles';
import ShowWorkBox from './component/ShowWorkBox';
import {request} from '../../util/network/axiosRequest';
import ALTabs from '../../components/al-tabs/ALTabs';
import ALTabs2 from '../../components/al-tabs/ALTabs2';


const initialLayout = { width: Dimensions.get('window').width };

const Tab1 = () => <View><Text>tab1</Text></View>
const Tab2 = () => <View><Text>tab2</Text></View>
const Tab3 = () => <View><Text>tab3</Text></View>


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



class HomePage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      workList: null,
    };
  }

  // 渲染函数
  render() {
    const state = this.state;
    const tabs = [
      {key: "tab1", title: "tab1", component: Tab1},
      {key: "tab2", title: "tab2", component: Tab2},
      {key: "tab3", title: "tab3", component: Tab3},
    ];

    if (state.workList == null) {
      return <View style={styles.alFlexCenter}>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" barStyle={'dark-content'} />
        <Text>无数据</Text>

{/*        <View style={{width: 400, height: 600}}>
          <ALTabs />
        </View>*/}

      </View>;
    }
    return (
        <View style={{backgroundColor: "#fff",
        paddingTop: 30}}>
          {/*设置状态栏（透明）*/}
          <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" barStyle={'dark-content'} />

          {/*标题栏*/}
{/*          <View style={[styles.alFlexRow, styles.alPaddingLR20, styles.alPaddingTB10]}>
            <Text style={[styles.alColorBlue, styles.alTextH4]}>首推</Text>
            <Text style={[styles.alColorGray, styles.alTextH4, styles.alMarginLeft20]}>关注</Text>
            <Text style={[styles.alColorGray, styles.alTextH4, styles.alMarginLeft20]}>最新</Text>
            <Text style={[styles.alColorGray, styles.alTextH4, styles.alMarginLeft20]}>佳作分享</Text>
          </View>


          <ScrollView>
            {
              state.workList.map((item, index) => {
                return <ShowWorkBox key={item.title} data={item} />
              })
            }

            <View style={{height: 50}}></View>
          </ScrollView>*/}

          <View style={{width: 400, height: 600}}>
            <ALTabs tabs={tabs} />
          </View>

        </View>
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
      console.log(res.data.data);
      this.setState({
        workList: res.data.data
      });
      // console.log(this.state.workList);
    }).catch(err => {
      console.log(err);
    });
  };


}

export default HomePage;
