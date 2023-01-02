import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

function YoutubeVideo() {
  return (
    <View style={{ paddingBottom: 20 }}>
      <YoutubePlayer
        webViewStyle={{opacity: 0.99}}
        height={220}
        videoId={'c7R8Z9yIz5A'}
      />
    </View>
  );
}

export default React.memo(YoutubeVideo);
