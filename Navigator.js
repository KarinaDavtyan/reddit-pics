import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import List from './screens/List';

const NewListScreen = () => (
  <View style={{   }}>
    <Text>
      hey
    </Text>
    <List />
  </View>
);

// const WebViewScreen = () => (
//   <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//     <Text>WebView is here</Text>
//   </View>
// );

const RootNavigator = StackNavigator({
  Home: {
    screen: NewListScreen,
  },
  // Details: {
  //   screen: WebViewScreen,
  // },
});

export default RootNavigator;
