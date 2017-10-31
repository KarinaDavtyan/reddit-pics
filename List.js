import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {connect} from 'react-redux';

import { getReddits } from './actions';

class List extends React.Component {

  constructor (props) {
    super(props);
    this.props.getReddits()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hello World!
        </Text>
      </View>
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

const mapStateToProps = (state) => ({
  reddits: state.reddits
})

const mapDispatchToProps = (dispatch) => ({
  getReddits: () => dispatch(getReddits()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
