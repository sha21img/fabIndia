import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {image} from '../../../assets/images';
import {Styles} from './styles';

export default function CommonBanner({
  heading = null,
  desciption = '',
  buttonText = '',
  bgImage = '',
}) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={Styles.imageBackground}
      source={bgImage}>
      <LinearGradient
        colors={['rgba(0,0,0,0.75)', 'transparent']}
        style={Styles.container}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        {heading()}
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}
