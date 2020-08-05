/**
 * @format
 */

import {AppRegistry, Dimensions} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

React.mockPath = 'http://localhost:8081/src/assets/mock/';
React.createDefaultValue = (value, defaultValue) => {
  return value === undefined ? defaultValue : value;
}

React.getScreenInfo = () => {
  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;
  return {screenWidth, screenHeight};
}

React.getScreenWidth = () => {
  let screenWidth = Dimensions.get('window').width;
  return screenWidth;
}

React.getScreenHeight = () => {
  let screenHeight = Dimensions.get('window').height;
  return screenHeight;
}

AppRegistry.registerComponent(appName, () => App);
