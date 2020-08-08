/**
 * @format
 */

import {AppRegistry, Dimensions, ToastAndroid} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

React.mockPath = 'https://gitee.com/AlanLee97/react_native_mock_uicn/raw/master/src/assets/mock';
React.createDefaultValue = (value, defaultValue) => {
  return value === undefined ? defaultValue : value;
}

React.getScreenInfo = () => {
  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;
  return {screenWidth, screenHeight};
}

React.getScreenWidth = () => {
  return Dimensions.get('window').width;
}

React.getScreenHeight = () => {
  return Dimensions.get('window').height;
}

React.showToast = (message) => {
  ToastAndroid.show(message, ToastAndroid.SHORT);
}

React.showPositionToast = (message) => {
  ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.TOP);
}

AppRegistry.registerComponent(appName, () => App);
