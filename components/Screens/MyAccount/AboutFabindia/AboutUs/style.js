import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';

export const Styles = StyleSheet.create({
  AboutText: {
    color: Colors.textcolor,
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    lineHeight: 20,
    marginVertical: 10,
  },
  VissionHeading: {
    color: Colors.textcolor,
    fontSize: 16,
    fontFamily: Fonts.Assistant700,
    lineHeight: 20,
    marginVertical: 10,
  },
  VissionBodyText: {
    color: Colors.textcolor,
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    lineHeight: 20,
    marginVertical: 10,
  },
  HorizontalLine: {
    height: 1,
    backgroundColor: '#D8D8D8',
    width: '100%',
    marginVertical:10
  },
});
