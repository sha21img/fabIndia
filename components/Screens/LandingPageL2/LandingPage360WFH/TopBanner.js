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
        source={image.lifeStyleImage}>
        <View
          style={{
            backgroundColor: 'rgba(169, 145, 91, 0.69)',
            // marginTop: 'auto',
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
            Lifestyle 360
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 16,
              color: 'white',
            }}>
            Work from home
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
          Work from home made comfortable
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Assistant400,
            fontSize: 16,
            lineHeight: 20,
            color: Colors.textcolor,
            paddingVertical: 10,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ornare dis pharetra metus, bibendum. Leo dui integer pulvinar ut.
          Praesent pulvinar platea malesuada.
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
