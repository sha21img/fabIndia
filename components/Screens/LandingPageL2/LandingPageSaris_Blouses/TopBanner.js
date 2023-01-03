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
        source={image.SarisBanner}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            marginTop: 'auto',
            paddingVertical: 10,
            alignSelf: 'flex-start',
            marginVertical: 25,
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              fontFamily: Fonts.PlayfairDisplay700,
              fontSize: 30,
              lineHeight: 32,
              color: 'white',
            }}>
            Block Print
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 16,
              color: 'white',
            }}>
            Rajasthan
          </Text>
        </View>
      </ImageBackground>
      <View style={{backgroundColor: '#FAF2F2', padding: 15}}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay700Italic,
            fontSize: 16,
            lineHeight: 21,
            color: Colors.textcolor,
          }}>
          A fascinating craft from the heart of India
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 16,
            lineHeight: 20,
            color: Colors.textcolor,
            paddingVertical: 10,
          }}>
          Wear your style on your sleeve with our collection of stunning silks,
          gorgeous georgettes, charming cottons and a lot more - crafted to
          perfection.
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
