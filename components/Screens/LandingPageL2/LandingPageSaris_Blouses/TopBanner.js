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
            backgroundColor: 'rgba(107,36,26,0.8)',
            flexDirection: 'row',
            marginTop: 'auto',
          }}>
          <View
            style={{
              width: '50%',
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: Fonts.PlayfairDisplay400,
                fontSize: 28,
                lineHeight: 32,
                color: 'white',
              }}>
              Fab
            </Text>
            <Text
              style={{
                fontFamily: Fonts.PlayfairDisplay400,
                fontSize: 28,
                lineHeight: 32,
                letterSpacing: 6,
                color: 'white',
              }}>
              ULOUS
            </Text>
          </View>
          <View style={{width: '50%', paddingVertical: 15}}>
            <Text
              style={{
                fontFamily: Fonts.Assistant300,
                fontSize: 14,
                lineHeight: 16,
                borderLeftWidth: 1,
                borderLeftColor: 'white',
                paddingLeft: 20,
                paddingRight: 10,
                color: 'white',
              }}>
              A selection of premium apparel and accessories
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={{backgroundColor: '#6B241A', padding: 15}}>
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
            paddingVertical: 15,
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
