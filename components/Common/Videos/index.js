import {View, Text} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';
import {Styles} from './styles';
import {createThumbnail} from 'react-native-create-thumbnail';

const Videos = ({text = null, url = ''}) => {
  const [a, setA] = React.useState();
  React.useEffect(() => {
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
  return (
    <View style={{position: 'relative'}}>
      <VideoPlayer
        video={{
          uri: url,
        }}
        videoHeight={1200}
        // onPlayPress={() => console.log('hihih')}
        pauseOnPress={() => console.log('hihih')}
        // onStart={() => console.log('hihih')}
        onLoad={() => {
          // console.log('hiiiiiiiiiiiiiiiiii');
        }}
        resizeMode="cover"
        thumbnail={{uri: a}}
        endThumbnail={{uri: a}}
        // showDuration={true}
      />
      {text()}
    </View>
  );
};

export default Videos;
