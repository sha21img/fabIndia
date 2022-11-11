import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import Videos from '../../Common/Videos';

export default function VideoContainer() {
  const text = () => {
    return (
      <>
        <View
          style={{
            paddingHorizontal: 15,
            position: 'absolute',
            bottom: '10%',
          }}>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 14,
              lineHeight: 28,
              backgroundColor: '#C57B31',
              color: 'white',
            }}>
            A soft muslin bag would help preserve delicate fabrics like silks,
            or anything with intricate embroidery
          </Text>
        </View>
      </>
    );
  };
  return (
    <>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay700Italic,
          fontSize: 18,
          lineHeight: 22,
          paddingVertical: 10,
          color: Colors.textcolor,
          paddingHorizontal: 15,
        }}>
        How to preserve your sari
      </Text>
      <Videos
        text={text}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      {/* 
Video 
*/}
    </>
  );
}
