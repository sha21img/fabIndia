import {View, Text} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const TrackingUrl = props => {
  const {url} = props.route.params;
  return (
    <WebView
      originWhitelist={['*']}
      style={{backgroundColor: '#fff'}}
      source={{uri: url}}
    />
  );
};

export default TrackingUrl;
