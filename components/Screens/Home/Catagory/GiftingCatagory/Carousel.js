import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import CommonCarousel from '../../../../Common/CommonCarousel';
import Fonts from '../../../../../assets/fonts';
import CommonCarousel1 from '../../../../Common/CommonCarousel/CommonCarousel1';
const width = Dimensions.get('window').width;

export default function Carousel(props) {
  const {data = {}, customStyles} = props;
  return (
    <View style={customStyles}>
      <Text style={Styles.heading}>{data.headline}</Text>
      <CommonCarousel1
        data={data}
        width={width / 1.07}
        height={200}
        {...props}
      />
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
