import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import { Colors } from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
icon:{
    color: Colors.primarycolor,
},
title:{
    color: Colors.primarycolor,
    fontSize: 18,
    fontFamily: Fonts.PlayfairDisplay500,
},
  
});
