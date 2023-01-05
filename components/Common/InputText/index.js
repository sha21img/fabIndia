import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

export default function InputText({
  underlineColor = '#EDEDED',
  activeUnderlineColor = '#979797',
  customStyle = {},
  label = '',
  value = '',
  onChangeText = null,
  ...props
}) {
  return (
    <TextInput
      underlineColor={underlineColor}
      activeUnderlineColor={activeUnderlineColor}
      style={[styles.input, customStyle]}
      label={label}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
  },
});
