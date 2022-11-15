import {View, Text, Image} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';

export default function Review({customStyle}) {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          //   alignItems: 'center',
          padding: 15,
          justifyContent: 'space-between',
        },
        customStyle,
      ]}>
      <Image
        source={image.BeautyProduct1}
        style={{width: '48%', height: 200}}
      />
      <View style={{width: '48%'}}>
        <Text
          style={{
            fontFamily: Fonts.Assistant700,
            fontSize: 16,
            lineHeight: 22,
            color: Colors.textcolor,
            marginTop: 3,
          }}>
          Savitri Singh
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant300,
            fontSize: 16,
            lineHeight: 22,
            color: Colors.textcolor,
          }}>
          35, Rajasthan
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant300,
            fontSize: 16,
            lineHeight: 18,
            color: Colors.textcolor,
            paddingTop: 10,
          }}>
          Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
          incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi.
        </Text>
      </View>
    </View>
  );
}
