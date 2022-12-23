import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';

export default function NameCard({item, height, width}) {
  return (
    <ImageBackground
      key={Math.random() * 777266}
      resizeMode="cover"
      source={item.banner}
      style={{
        width: width,
        height: height,
        backgroundColor: Colors.primarycolor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 20,
          lineHeight: 27,
          color: 'white',
        }}>
        {item.title}
      </Text>
    </ImageBackground>
  );
}
