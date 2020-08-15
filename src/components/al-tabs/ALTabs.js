import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const initialLayout = { width: Dimensions.get('window').width };

export default function ALTabs(props) {
  // [
  //   { key: 'a', title: '1', component: FirstRoute },
  //   { key: 'b', title: '2', component: SecondRoute },
  //   { key: 'c', title: '3', component: ThirdRoute },
  // ]
  const tabs = props.tabs;
  let sceneObj = {};
  tabs.map((item, index) => {
    sceneObj[item.key] = item.component;
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(tabs);
  const renderScene = SceneMap(sceneObj);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
