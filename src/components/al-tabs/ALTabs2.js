import React, {Component} from 'react';
import {StyleSheet, Text, Dimensions, View,} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar,} from 'react-native-scrollable-tab-view';

const ScreenWidth = Dimensions.get('window').width;

export default class ALTabs2 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const tabs = this.props.tabs;
    return (
      <ScrollableTabView
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar/>}
      >
        {
          tabs.map((item, index) => {
            return <View key={item.title} tabLabel={item.title}>
              {() => item.component}
            </View>
          })
        }
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  lineStyle: {
    width: ScreenWidth / 4,
    height: 2,
    backgroundColor: 'red',
  },
  textStyle: {
    flex: 1,
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});
