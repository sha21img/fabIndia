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
  unsubscribeTxtOne: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
});
