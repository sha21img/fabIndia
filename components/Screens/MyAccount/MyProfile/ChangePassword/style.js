import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';

export const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
  },
  txtinput: {
    borderRadius: 1,
    fontSize: 14,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  forgottxt: {
    color: Colors.primarycolor,
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
  },
  passnotmatch: {
    color: '#DA5959',
    fontFamily: Fonts.Assistant700,
    fontSize: 12,
  },
  commonbtnbox: {
    padding: 15,
    backgroundColor: '#FDFDFD',
    elevation: 5,
  },
});
