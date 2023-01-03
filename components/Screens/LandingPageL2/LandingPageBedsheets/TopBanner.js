import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../../assets/Colors';

export default function TopBanner() {
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={{width: '100%', height: 250}}
        source={image.BedsheetBanner}></ImageBackground>
      <View style={{backgroundColor: '#FAF2F2', padding: 15}}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay700Italic,
            fontSize: 16,
            lineHeight: 21,
            color: Colors.textcolor,
          }}>
          Sweet dreams are made of these...
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 16,
            lineHeight: 20,
            color: Colors.textcolor,
            paddingVertical: 10,
          }}>
          Organic handpicked cotton, softly woven into a luxurious bedsheet. Our
          artisans ensure each piece is designed to perfection, so that you end
          the day on a high note!
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 16,
            lineHeight: 20,
            color: Colors.primarycolor,
          }}>
          Read more
        </Text>
      </View>
    </>
  );
}
