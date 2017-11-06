import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import {connect} from 'react-redux';

import { getNewReddits } from '../actions';
import ListItem from '../components/ListItem';

class List extends React.Component {

  constructor(props) {
    super(props),
    this.props.getReddits(this.props.url);
   }

  render() {

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatList}
          refreshing={this.props.refreshing}
          onRefresh={() => this.props.getReddits(this.props.url)}
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
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 5,
  }
});

const mapStateToProps = (state) => ({
  reddits: state.reddits,
  refreshing: state.refreshing,
})

const mapDispatchToProps = (dispatch) => ({
  getReddits: (url) => dispatch(getNewReddits(url))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
