import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

export default function InputText({
  underlineColor = '',
  activeUnderlineColor = '',
  customStyle = {},
  label = '',
  value = '',
  onChangeText = null,
}) {
  return (
    <TextInput
      underlineColor={underlineColor}
      activeUnderlineColor={activeUnderlineColor}
      style={customStyle}
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
  );
}
