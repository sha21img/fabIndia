import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  heading: {
    fontsize: 16,
    lineHeight: 16,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
    marginTop: 20,
  },
  toptext: {
    fontsize: 14,
    // lineHeight: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
});
