import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

 function YoutubeVideo() {
  return (
    <View style={{flex:1}}>
      <YoutubePlayer height={220} videoId={'c7R8Z9yIz5A'} />
    </View>
  );
}

export default React.memo(YoutubeVideo)
