import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  BodyTextContainer: {marginTop: 20, marginBottom: 10},
  BodyText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 20,
    color: Colors.textcolor,
  },
  commontab: {paddingLeft: 15, height: 490},
});
