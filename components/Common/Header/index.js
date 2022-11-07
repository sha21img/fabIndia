import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {Styles} from './styles';
// import color from '../../assets/color';

export default function Header({
  leftIcon = '',
  rightIcon = '',
  customStyle = {},
  title = null,
  txtcolor = 'white',
  navigation,
}) {
  const defaultContainerStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    elevation: 5,
  };
  return (
    <View style={[defaultContainerStyle, customStyle]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={Styles.icon}>{leftIcon}</Text>
      </TouchableOpacity>
      {title && <Text style={Styles.title}>{title}</Text>}

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Wallet');
        }}>
        <Text style={Styles.icon}>{rightIcon}</Text>
      </TouchableOpacity>
    </View>
  );
}
