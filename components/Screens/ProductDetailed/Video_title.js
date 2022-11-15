import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Videos from '../../Common/Videos';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';

export default function Video_title({customStyle}) {
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
