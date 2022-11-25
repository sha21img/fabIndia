import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';

export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  deleteTxtOne: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    lineHeight: 21,
    color: Colors.textcolor,
  },
});
