import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../../../../assets/fonts';
import {Colors} from '../../../../../../assets/Colors';
import {Styles} from './styles';

const HeaderBox = () => {
  return (
    <View style={Styles.headbox}>
      <Text style={Styles.headtxt}>Fabindia, customized your way</Text>
      <Text style={[Styles.middletxt, {paddingTop: 10}]}>
        Like something you see, but want to truly make it your own? Now, you
        can!
      </Text>
      <Text style={[Styles.middletxt, {paddingTop: 15}]}>
        Whether it’s a kurta or an armchair - we let you add your own touch to
        it, right from the colour, material and everything in between!
      </Text>
      <Text style={Styles.readtxt}>Read more</Text>
      <TouchableOpacity style={Styles.btnbox}>
        <Text style={Styles.btntxt}>Customize now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBox;
