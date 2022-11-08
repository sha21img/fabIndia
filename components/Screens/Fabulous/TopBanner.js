import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';

export default function TopBanner() {
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={{width: '100%', height: 364}}
        source={image.FabulousBanner}>
        <Image
          source={image.FabulousBannerFlower}
          style={{
            width: 200,
            height: 210,
            position: 'absolute',
            bottom: 60,
          }}
        />
        <Image
          source={image.FabulousBannerFlower}
          style={{
            width: 170,
            height: 180,
            position: 'absolute',
            right: 0,
            transform: [{rotateY: '180deg'}],
          }}
        />
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
            fontFamily: Fonts.PlayfairDisplay400Italic,
            fontSize: 14,
            lineHeight: 21,
            color: 'white',
          }}>
          Wear your style on your sleeve with our collection of stunning silks,
          gorgeous georgettes, charming cottons and a lot more - crafted to
          perfection.
        </Text>
      </View>
    </>
  );
}
