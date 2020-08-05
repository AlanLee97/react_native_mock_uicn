/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

React.mockPath = 'http://localhost:8081/src/assets/mock/';
React.createDefaultValue = (value, defaultValue) => {
  return value === undefined ? defaultValue : value;
}

AppRegistry.registerComponent(appName, () => App);
