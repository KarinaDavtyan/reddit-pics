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
            style={{ borderRadius: 5, backgroundColor: 'white', marginBottom: 5, padding: 5, flexDirection: 'row'}}
            ref={component => this._root = component} {...this.props}
            >
              <View style={{width: 100, height: 100}}>
                <Image
                  source={{uri: poster}}
                  style={{width: 100, height: 100}}
                />
              </View>
              <View style={{ flexDirection: 'column', flex: 1, alignContent: 'space-between'}}>
                <Text style={{alignSelf: "flex-end"}}>
                  {moment.unix(reddit.created_utc).fromNow()}
                </Text>
                <Text numberOfLines={3} textAlign='justify' ellipsizeMode='tail' style={{fontWeight: 'bold', alignSelf: 'center' }}>
                  {reddit.title}
                </Text>
              <View style={{flexDirection: 'row', flex: 1, alignItems: 'flex-end'}}>
                <Text style={{flex: 0.45}}>
                  {reddit.author}
                </Text>
                <Text style={{flex: 0.2 }}>
                  {reddit.score} Votes
                </Text>
                <Text style={{flex: 0.35}}>
                  {reddit.num_comments} Comments
                </Text>
              </View>
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
