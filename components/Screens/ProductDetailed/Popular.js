import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import SimpleCard from '../../Common/SimpleCard';

export default function Popular({data, customStyle, heading, description}) {
  return (
    <View style={[customStyle]}>
      <View style={Styles.textContainer}>
        <Text style={Styles.heading}>{heading}</Text>
        {description ? (
          <Text style={Styles.description}>{description}</Text>
        ) : null}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.ScrollView}>
        {data.map(item => {
          return <SimpleCard />;
        })}
      </ScrollView>
    </View>
  );
}
const Styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 15,
  },
  heading: {
    fontFamily: Fonts.PlayfairDisplay700Italic,
    fontSize: 18,
    lineHeight: 22,
    color: Colors.textcolor,
    paddingVertical: 7,
  },
  description: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    lineHeight: 22,
    color: Colors.textcolor,
  },
  ScrollView: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
