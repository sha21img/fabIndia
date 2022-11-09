import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export default function VideoContainer() {
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
      {/* 
Video 
*/}
    </>
  );
}
