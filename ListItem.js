import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ListItem extends React.Component {

  render() {
    let reddit = this.props.reddit.data;
    return (
        <View style={styles.container}>
        <Text>
          {reddit.title}
        </Text>
        <Text>
          {reddit.author}
        </Text>
        <Text>
          Score {reddit.score}
        </Text>
        <Text>
          Comments {reddit.num_comments}
        </Text>
        <Text>
          Time UTC {reddit.created_utc}
        </Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: reddit.thumbnail}}
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
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
});
