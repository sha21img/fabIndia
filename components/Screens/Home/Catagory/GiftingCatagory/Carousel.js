import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import CommonCarousel from '../../../../Common/CommonCarousel';
import Fonts from '../../../../../assets/fonts';
const width = Dimensions.get('window').width;

export default function Carousel({data, customStyles}) {
  return (
    <View style={customStyles}>
      <Text style={Styles.heading}>{data.headline}</Text>
      <CommonCarousel data={data} width={width / 1.07} height={330} />
    </View>
  );
}
const Styles = StyleSheet.create({
  heading: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontFamily: Fonts.PlayfairDisplay600Italic,
    fontSize: 30,
  },
});
