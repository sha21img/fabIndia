import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {image} from '../../../../assets/images';
import VideoPlayer from 'react-native-video-player';
import {createThumbnail} from 'react-native-create-thumbnail';

const LandingPageSaris = () => {
  const [paused, setPaused] = useState(true);
  // console.log('pausedpausedpausedpaused', paused);
  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 380,
    backgroundColor: 'grey',
  };
  const viewStyle = {height: 380};
  const player = React.useRef(null);
  const [a, setA] = useState();
  let thumbnailUrl;
  useEffect(() => {
    createThumbnail({
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      timeStamp: 10000,
    })
      .then(response => {
        console.log('thumbnail', response);
        thumbnailUrl = response.path;
        setA(response.path);
      })
      .catch(err => console.log('thumbnail err', err));
  }, []);
  console.log('thumbnailUrlthumbnailUrl', thumbnailUrl);
  return (
    <View style={viewStyle}>
      <VideoPlayer
        video={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        videoHeight={1200}
        // onPlayPress={() => console.log('hihih')}
        pauseOnPress={() => console.log('hihih')}
        onStart={() => console.log('hihih')}
        onLoad={() => {
          // console.log('hiiiiiiiiiiiiiiiiii');
        }}
        // ref={player}
        resizeMode="cover"
        // hideShutterView={true}
        thumbnail={{uri: a}}
        endThumbnail={{uri: a}}
        // showDuration={true}
      />
    </View>
  );
};

export default LandingPageSaris;
