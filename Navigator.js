import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import List from './screens/List';
import WebView from './screens/WebView';

const NewListScreen = () => (
  <List url='https://api.reddit.com/r/pics/new.json' />
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

const MainScreenNavigator = DrawerNavigator({
  Home: {
    screen: RootNavigator,
    navigationOptions: {
      drawerLabel: 'New'
    }
  }
})

export default MainScreenNavigator;
