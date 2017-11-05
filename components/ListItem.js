import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { withNavigation } from 'react-navigation'
import moment from 'moment';

class ListItem extends React.Component {

  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    let reddit = this.props.reddit.data;
    let poster = ((/\.(gif|jpg|jpeg|tiff|png)$/i).test(reddit.thumbnail))
                  ? reddit.thumbnail
                  : 'https://cheers2sun.com/images/img.png';
    const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight
        onPress={() => navigate('WebViewScreen', {path: reddit.url})}
      >
        <View
          style={{ borderRadius: 5, backgroundColor: 'white', marginBottom: 5, padding: 5}}
          ref={component => this._root = component} {...this.props}
        >
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
      </TouchableHighlight>
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

export default withNavigation(ListItem);
