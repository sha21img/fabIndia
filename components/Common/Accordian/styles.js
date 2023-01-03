import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
export const Styles = StyleSheet.create({
  accordbox: {
    overflow: 'hidden',
  },
  titlebox: {
    paddingHorizontal: 15,
    top: 50,
  },
  titletxt: {
    fontSize: 22,
    color: Colors.textcolor,
  },
  activebox: {
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activetxt: {
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
});
