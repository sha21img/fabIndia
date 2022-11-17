import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';

export default function CommonButton({
  backgroundColor = '',
  txt = '',
  customViewStyle = {},
}) {
  return (
    <View style={[Styles.bottomContainer, customViewStyle]}>
      <TouchableOpacity
        style={[Styles.appButtonContainer, {backgroundColor: backgroundColor}]}>
        <Text style={Styles.appButtonText}>{txt}</Text>
      </TouchableOpacity>
    </View>
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
  bottomContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#FDFDFD',
    elevation: 5,
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
