import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {image} from '../../../assets/images';

export default function CommonBanner({
  heading = null,
  desciption = '',
  buttonText = '',
  bgImage = '',
}) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={{marginVertical: 15}}
      source={bgImage}>
      <LinearGradient
        colors={['rgba(0,0,0,0.75)', 'rgba(255,255,255,0.75)']}
        style={{padding: 16}}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        {heading()}
        <Text
          style={{
            paddingVertical: 15,
            fontSize: 16,
            fontWeight: '400',
            color: 'white',
            lineHeight: 22,
          }}>
          {desciption}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingHorizontal: 15,
            alignSelf: 'flex-start',
            borderRadius: 40,
            marginTop: 15,
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 16, fontWeight: '400', color: '#903233'}}>
            {buttonText}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}
