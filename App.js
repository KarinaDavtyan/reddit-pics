import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';

import store from './store';
import List from './List';

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <List />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
