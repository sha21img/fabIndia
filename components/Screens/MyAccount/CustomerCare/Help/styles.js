import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 16,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
    marginTop: 20,
  },
  inputcontainer: {
    marginTop: 15,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  btncontainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 28,
    borderColor: '#979797',
    borderWidth: 1,
  },
  btnbox: {
    padding: 12,
    backgroundColor: '#FDFDFD',
    elevation: 5,
  },
});
