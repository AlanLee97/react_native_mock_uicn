import React from "react";
import {ActivityIndicator, View, Text, FlatList} from 'react-native'

class TestNetwork extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      userInfo: null
    }
  };

  // 渲染函数
  render() {
    const { userInfo, isLoading } = this.state;

    return (
        <View>
          <Text>Test Network</Text>
          <View style={{backgroundColor: "#eeeeee"}}>
            <Text>{userInfo != null ? userInfo.username : '无数据'}</Text>
          </View>
        </View>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    // this.testFetch();
    this.testFetchMockData();
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  // 自己写的方法
  testFetch = () => {
    let url = 'https://reactnative.dev/movies.json';
    return fetch(url)
        .then((response) => {
          return response.json()
        }).then((res) => {
          // console.log(res);
          this.setState({
            data: res.movies
          })
        }).catch((err) => {
          console.log('error:' + err)
        }).finally(() => {
          console.log('fetch finally');
          this.setState({ isLoading: false });
        });
  }

  testFetchMockData = () => {
    let url = React.mockPath + 'user.json';
    return fetch(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": 'application/json'
      }
    })
        .then((response) => {
          return response.json()
        }).then((res) => {
          // console.log(res);
          this.setState({
            userInfo: res.data
          })
        }).catch((err) => {
          console.log('error:' + err)
        }).finally(() => {
          console.log('fetch finally');
        });
  }
}

export default TestNetwork;
