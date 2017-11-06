import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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
      <TouchableOpacity
        onPress={() => navigate('WebViewScreen', {path: reddit.url})}

      >
        <View
          style={styles.viewListItem}
          ref={component => this._root = component} {...this.props}
        >
          <Image
            source={{uri: poster}}
            style={styles.image}
          />
          <View style={styles.viewColumn}>
            <Text style={styles.textTime}>
              {moment.unix(reddit.created_utc).fromNow()}
            </Text>
            <Text
              numberOfLines={3}
              textAlign='justify'
              ellipsizeMode='tail'
              style={styles.textTitle}>
              {reddit.title}
            </Text>
            <View style={styles.viewBottom}>
              <Text style={styles.textAuthor}>
                {reddit.author}
              </Text>
              <Text style={styles.textScore}>
                {reddit.score} Votes
              </Text>
              <Text style={styles.textComments}>
                {reddit.num_comments} Comments
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  viewListItem: {
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 5,
    padding: 5,
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100
  },
  textTime: {
    alignSelf: 'flex-end'
  },
  textTitle: {
    fontWeight: 'bold',
    // alignSelf: 'center',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  viewColumn: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between'
  },
  viewBottom: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    paddingLeft: 5
  },
  textAuthor: {
    flex: 0.50,
    fontSize: 12
  },
  textScore: {
    flex: 0.2,
    fontSize: 12
  },
  textComments: {
    flex: 0.35,
    fontSize: 12
  }
});

export default withNavigation(ListItem);
