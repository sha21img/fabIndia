import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { Colors } from '../../../assets/Colors';
// import color from '../../assets/color';

export default function Header({
  leftIcon = '',
  rightIcon = '',
  customStyle = {},
  title = null,
  txtcolor = 'white',
  navigation
}) {
  const defaultContainerStyle = {
    // backgroundColor: color.MainColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    elevation:2,
  };
  return (
    <View style={[defaultContainerStyle, customStyle]}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Text style={{color: Colors.primarycolor, fontSize: 14}}>{leftIcon}</Text>
      </TouchableOpacity>
      {title && <Text style={{color: Colors.primarycolor, fontSize: 18}}>{title}</Text>}

      <TouchableOpacity onPress={()=>{navigation.navigate('Wallet')}}>
        <Text style={{color: Colors.primarycolor, fontSize: 14}}>{rightIcon}</Text>
      </TouchableOpacity>
    </View>
  );
}
