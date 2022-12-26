import {View, Text} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const ViewPolicy = () => {
  return (
    <WebView
      originWhitelist={['*']}
      style={{backgroundColor: '#fff'}}
      source={{
        uri: 'https://www.fabindiahome.com/return-exchange',
      }}
    />
  );
};

export default ViewPolicy;
