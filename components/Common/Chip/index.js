import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from './styles';

export default function Chip({title = '', handleClick = null, active = null}) {
  return (
    <>
      <TouchableOpacity
        onPress={() => handleClick()}
        style={title == active ? Styles.chipBoxActive : Styles.chipBoxInactive}>
        <Text
          style={
            title == active ? Styles.chipTextActive : Styles.chipTextInactive
          }>
          {title}
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => handleClick()}
        style={Styles.chipBoxInactive}>
        <Text style={Styles.chipTextInactive}>{title}</Text>
      </TouchableOpacity> */}
    </>
  );
}
