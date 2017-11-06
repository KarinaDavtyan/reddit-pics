import React from 'react';
import { StackNavigator } from 'react-navigation';

import List from './screens/List';
import WebView from './screens/WebView';

const NewListScreen = () => (
  <List />
);

const WebViewScreen = () => (
  <WebView />
);

const RootNavigator = StackNavigator({
  List: {
    screen: NewListScreen,
    navigationOptions: {
      title: 'New Reddits'
    }
  },
  WebViewScreen: {
    screen: WebViewScreen,
    navigationOptions: {
      title: 'Details'
    }
  },
});

export default RootNavigator;
