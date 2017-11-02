import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import {connect} from 'react-redux';

import { getReddits } from './actions';
import ListItem from './ListItem';

class List extends React.Component {

  constructor(props) {
    super(props),
    this.props.getReddits();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          refreshing={this.props.refreshing}
          onRefresh={() => this.props.getReddits()}
          data={this.props.reddits}
          renderItem={({item}) => {
            return (
              <ListItem reddit={item} />
            )
          }}
          keyExtractor={item => item.data.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25
  }
});

const mapStateToProps = (state) => ({
  reddits: state.reddits,
  refreshing: state.refreshing,
})

const mapDispatchToProps = (dispatch) => ({
  getReddits: () => dispatch(getReddits()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
