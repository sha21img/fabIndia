import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

function YoutubeVideo(props) {
  const {data = {}} = props;
  const splitId = data[0]?.youtubeVideo.split('/')[4];
  return (
    <View style={{paddingBottom: 5}}>
      <YoutubePlayer
        webViewStyle={{opacity: 0.99}}
        height={220}
        mute={true}
        loop={true}
        // onChangeState={event => {
        //   console.log('event fired', event);
        // }}
        videoId={splitId}
        controls={false}
      />
    </View>
  );
}

export default React.memo(YoutubeVideo);
