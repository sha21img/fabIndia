import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../../../../../assets/fonts';
import {image} from '../../../../../../assets/images';

const Customize = ({heading="", Description=''}) => {
  return (
    <ImageBackground style={{height: 472}} source={image.furniture5}>
      <LinearGradient
        colors={['#786C5A', 'rgba(196, 196, 196, 0)']}
        style={{height: 195, padding: 20}}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay400,
            fontSize: 26,
            lineHeight: 30,
            color: '#ffffff',
          }}>
          {heading}
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 16,
            color: '#ffffff',
            lineHeight: 22,
          }}>
          {Description}
        </Text>
      </LinearGradient>
      <View style={{position:"absolute", bottom:20, left:20}}>
        <TouchableOpacity
          style={{
            elevation:4,
            paddingVertical: 4,
            paddingHorizontal: 10,
            backgroundColor: '#ffffff',
            borderRadius: 40,
          }}>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 16,
              color: '#903233',
              lineHeight: 21,
            }}>
            Customize now
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default Customize;
