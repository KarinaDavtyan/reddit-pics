import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import store from './store';
import List from './screens/List';
import Navigator from './Navigator';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingTop: 25,
    backgroundColor: 'white',
  },
});
