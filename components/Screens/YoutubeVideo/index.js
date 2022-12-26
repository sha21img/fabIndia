import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function YoutubeVideo() {
  return (
    <View style={{}}>
      <YoutubePlayer height={220} videoId={'c7R8Z9yIz5A'} />
    </View>
  );
}
