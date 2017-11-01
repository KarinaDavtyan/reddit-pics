import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import {connect} from 'react-redux';

import { getReddits } from './actions';
import ListItem from './ListItem';

class List extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            this.props.getReddits()
            if (this.props.reddits.length >0) {
              console.log('here',this.props);
            } else {
              console.log('its happening', this.props.reddits);
            }
          }}
          title="Refresh the state"
          color="blue"
        />
        <FlatList
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
