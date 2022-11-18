import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';

export default function CommonButton({
  txt = '',
  customViewStyle = {},
  btntxtColor = '#FFFFF',
}) {
  return (
    <TouchableOpacity style={[Styles.appButtonContainer, customViewStyle]}>
      <Text style={[Styles.appButtonText, {color: btntxtColor}]}>{txt}</Text>
    </TouchableOpacity>
  );
}
const Styles = StyleSheet.create({
  product: {
    borderWidth: 1,
    borderColor: '#9e9e9e',
    marginHorizontal: 16,
    marginVertical: 16,
    flexDirection: 'row',
    borderRadius: 3,
  },
  imageContainer: {
    margin: 10,
  },
  image: {
    width: 69,
    height: 89,
  },
  textContainer: {
    flexsDirection: 'column',
    justifyContent: 'space-evenly',
  },
  bold: {
    fontWeight: '800',
  },
  appButtonContainer: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: Fonts.Assistant400,
    alignSelf: 'center',
  },
});
