import React from 'react';
import { WebView } from 'react-native';
import { withNavigation } from 'react-navigation'


class WebViewScreen extends React.Component {

  render() {
    const { params } = this.props.navigation.state;
    return (
      <WebView
        source={{uri: params.path}}
      />
    );
  }
}

export default withNavigation(WebViewScreen)
