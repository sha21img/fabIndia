import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  BodyText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 20,
    lineHeight: 26,
    color: Colors.textcolor,
    paddingHorizontal: 15,
  },
  commontab: {paddingLeft: 15, height: 490},
});
