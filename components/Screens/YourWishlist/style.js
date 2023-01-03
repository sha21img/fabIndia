import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const Styles = StyleSheet.create({
  secondDiv: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  ImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {justifyContent: 'center', alignItems: 'center', padding: 20},
  carttxt: {
    paddingVertical: 10,
    fontFamily: Fonts.Assistant700,
    fontSize: 24,
    color: Colors.textcolor,
  },
  imagedimension: {
    marginBottom: 30,
    height: 76,
    width: 88,
  },
  carttxt2: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: '#4A4A4A',
  },
});
export default Styles;
