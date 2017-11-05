import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import List from './screens/List';
import WebView from './screens/WebView';

const NewListScreen = () => (
  <View>
    <List />
  </View>
);

const WebViewScreen = () => (
  <WebView />
);

const RootNavigator = StackNavigator({
  Home: {
    screen: NewListScreen,
  },
  WebViewScreen: {
    screen: WebViewScreen,
  },
});

export default RootNavigator;
