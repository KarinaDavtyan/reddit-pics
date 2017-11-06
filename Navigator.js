import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import List from './screens/List';
import WebView from './screens/WebView';

const NewListScreen = () => (
  <List url='https://api.reddit.com/r/pics/new.json' />
);

const HotListScreen = () => (
  <List url='https://api.reddit.com/r/pics/hot.json' />
);

const TopListScreen = () => (
  <List url='https://api.reddit.com/r/pics/top.json' />
);

const ControversialListScreen = () => (
  <List url='https://api.reddit.com/r/pics/controversial.json' />
);

const WebViewScreen = () => (
  <WebView />
);

const NewViewScreenNavigator = StackNavigator({
  New: {
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

const ControversialViewScreenNavigator = StackNavigator({
  Controversial: {
    screen: ControversialListScreen,
    navigationOptions: {
      title: 'Controversial Reddits'
    }
  },
  WebViewScreen: {
    screen: WebViewScreen,
    navigationOptions: {
      title: 'Details'
    }
  },
});

const TopViewScreenNavigator = StackNavigator({
  Top: {
    screen: TopListScreen,
    navigationOptions: {
      title: 'Top Reddits'
    }
  },
  WebViewScreen: {
    screen: WebViewScreen,
    navigationOptions: {
      title: 'Details'
    }
  },
});

const HotViewScreenNavigator = StackNavigator({
  Hot: {
    screen: HotListScreen,
    navigationOptions: {
      title: 'Hot Reddits'
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
    screen: NewViewScreenNavigator,
    navigationOptions: {
      drawerLabel: 'New',
    }
  },
  Hot: {
    screen: HotViewScreenNavigator,
    navigationOptions: {
      drawerLabel: 'Hot'
    }
  },
  Top: {
    screen: TopViewScreenNavigator,
    navigationOptions: {
      drawerLabel: 'Top'
    }
  },
  Controversial: {
    screen: ControversialViewScreenNavigator,
    navigationOptions: {
      drawerLabel: 'Controversial'
    }
  },
})

export default MainScreenNavigator;
