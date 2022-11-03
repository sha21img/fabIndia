import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
const VideoP = () => {
  const [paused, setPaused] = useState(true);
  // console.log('pausedpausedpausedpaused', paused);
  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 250,
    backgroundColor: 'grey',
  };
  const viewStyle = {height: 250, marginVertical: 5};
  return (
    <View style={viewStyle}>
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={videoStyle}
        // controls={true}
        onLoad={() => {
          // console.log('hiiiiiiiiiiiiiiiiii');
        }}
        resizeMode="cover"
        hideShutterView={true}
        paused={paused}
      />
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 250,
        }}
        onPress={() => {
          setPaused(!paused);
        }}>
        {paused ? (
          <Image
            resizeMode={'cover'}
            style={{
              height: 70,
              width: 70,
            }}
            source={{uri: 'https://cdn-icons-png.flaticon.com/512/0/375.png'}}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};
export default VideoP;
