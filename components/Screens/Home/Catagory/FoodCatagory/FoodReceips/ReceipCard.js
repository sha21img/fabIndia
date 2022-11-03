import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Styles} from './styles';

export default function ReceipsCard({item}) {
  return (
    <TouchableOpacity>
      <Image style={Styles.img} source={item.banner} />
      <Text style={{color: 'white', paddingVertical: 10}}>{item.title}</Text>
    </TouchableOpacity>
  );
}
