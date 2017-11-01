import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {connect} from 'react-redux';

import { getReddits } from './actions';

class List extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.getReddits()}
          title="Refresh the state"
          color="blue"
        />
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
