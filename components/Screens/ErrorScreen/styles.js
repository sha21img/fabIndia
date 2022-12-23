import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const Styles = StyleSheet.create({
  mainView: {
    padding: 15,
  },
  txt1: {
    fontSize: 18,
    color: Colors.primarycolor,
    fontFamily: Fonts.Assistant700,
  },
  txt2: {fontSize: 16, fontFamily: Fonts.Assistant400, color: '#4A4A4A'},
});
export default Styles;
