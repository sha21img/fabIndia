import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export default function Customize({heading, description, btnText}) {
  return (
    <View style={{padding: 20, backgroundColor: '#F3ECE8'}}>
      <Text
        style={{
          color: Colors.textcolor,
          fontFamily: Fonts.PlayfairDisplay700Italic,
          fontSize: 18,
          lineHeight: 22,
        }}>
        {heading}
      </Text>
      <Text
        style={{
          color: Colors.textcolor,
          fontFamily: Fonts.Assistant400,
          fontSize: 16,
          lineHeight: 22,
          paddingVertical: 7,
        }}>
        {description}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.primarycolor,
          padding: 7,
          marginTop: 10,
          width: '40%',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: Fonts.Assistant400,
            fontSize: 16,
          }}>
          {btnText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
