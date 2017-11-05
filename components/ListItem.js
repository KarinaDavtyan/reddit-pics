import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import moment from 'moment';

export default class ListItem extends React.Component {

  render() {
    let reddit = this.props.reddit.data;
    let poster = ((/\.(gif|jpg|jpeg|tiff|png)$/i).test(reddit.thumbnail))
                  ? reddit.thumbnail
                  : 'https://cheers2sun.com/images/img.png';
    return (
        <View style={{ borderRadius: 5, backgroundColor: 'white', marginBottom: 5, padding: 5}}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'flex-start'}}>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: poster}}
            />
            <Text>
              posted by {reddit.author}
            </Text>
            <Text>
              {moment.unix(reddit.created_utc).fromNow()}
            </Text>
          </View>
          <View>
            <Text numberOfLines={2} ellipsizeMode='tail' style={{fontWeight: 'bold', }}>
              "{reddit.title}"
            </Text>
            <Text>
              {reddit.score} Votes {"\n"}
              {reddit.num_comments} Comments
            </Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});
