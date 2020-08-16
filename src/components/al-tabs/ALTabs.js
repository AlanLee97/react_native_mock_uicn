import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';
const screenWidth = Dimensions.get('window').width;

export default class ALTabs extends PureComponent {
  // 默认属性
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      index: 0,
      routes: [],
    };
  }

  // 渲染
  render() {
    this.setState({
      routes: this.props.tabs,
    });
    const tabs = this.props.tabs;
    const sceneMap = {};
    tabs.map((item, index) => {
      sceneMap[item.key] = item.component;
    });
    return (
      <SafeAreaView style={{flex: 1}}>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap(sceneMap)}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: screenWidth}}
          renderTabBar={props =>
            <TabBar
              {...props}
              style={this.props.tabBarStyle ?? localStyle.tabBarStyle}
              getLabelText={({route}) => route.title}
              labelStyle={this.props.labelStyle ?? localStyle.labelStyle}
              tabStyle={{height: 44}}
              indicatorStyle={this.props.borderStyle ?? localStyle.borderStyle}
              activeColor={this.props.activeColor ?? localStyle.activeColor.color}
              inactiveColor={this.props.inactiveColor ?? localStyle.inactiveColor.color}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

const localStyle = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#f5f5f5',
    shadowColor: '#d4d4d4',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    shadowOpacity: 1,
  },
  labelStyle: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 15,
  },
  borderStyle: {
    backgroundColor: '#409EFF',
    width: 20,
    marginLeft: (screenWidth / 3) / 2 - 10,
    borderRadius: 10
  },
  activeColor: {
    color: "#409EFF"
  },
  inactiveColor: {
    color: "#C0C4CC"
  }
});
