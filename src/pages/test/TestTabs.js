import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Dimensions, View,
} from 'react-native';

import ScrollableTabView,
{
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';

const ScreenWidth = Dimensions.get('window').width;

const Tab1 = () => <View><Text>tab1</Text></View>;
const Tab2 = () => <View><Text>tab2</Text></View>;
const Tab3 = () => <View><Text>tab3</Text></View>;

export default class App extends Component {
  render() {
    return (
      <ScrollableTabView
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar/>}
      >
        <View tabLabel='Tab #1'>
          <Text>tab1</Text>
        </View>
        <View tabLabel='Tab #2'>
          <Text>tab2</Text>
        </View>
        <View tabLabel='Tab #3'>
          <Text>tab3</Text>
        </View>
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
