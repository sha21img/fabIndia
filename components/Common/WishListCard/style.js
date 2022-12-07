import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  txt1: {
    fontSize: 20,
    fontFamily: Fonts.PlayfairDisplay600Italic,
    color: '#4A4A4A',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  txt2: {
    fontSize: 12,
    color: '#979797',
    marginVertical: 10,
    fontFamily: Fonts.Assistant600,
  },
  mainView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
});
