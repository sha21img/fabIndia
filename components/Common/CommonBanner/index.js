import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {image} from '../../../assets/images';
import {Styles} from './styles';

export default function CommonBanner({
  heading = null,
  bgImage = '',
  customViewStyle = {},
}) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={[Styles.imageBackground, customViewStyle]}
      source={bgImage}>
      <LinearGradient
        colors={['rgba(0,0,0,0.75)', 'transparent']}
        style={Styles.container}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        {heading()}
      </LinearGradient>
    </ImageBackground>
  );
}
