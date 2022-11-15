import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Videos from '../../Common/Videos';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';

export default function Art_Artist({customStyle}) {
  const text = () => {
    return <></>;
  };
  return (
    <View style={[customStyle]}>
      <Text style={Styles.title}>The art & the artist</Text>
      <Videos
        text={text}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
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
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dole magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.PlayfairDisplay700Italic,
    fontSize: 18,
    lineHeight: 22,
    color: Colors.textcolor,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
