import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
export default Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  ImageView: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  imagedimension: {},
  carttxt: {
    paddingVertical: 10,
    fontFamily: Fonts.Assistant700,
    fontSize: 24,
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  btnContainer: {
    marginTop: 'auto',
    marginHorizontal: 15,
  },
});
