import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  heading: {
    marginVertical: 20,
    fontSize: 18,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
  },
  readText: {
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    color: '#903233',
    paddingVertical: 10,
    textAlign: 'center',
  },
  btnBox: {
    padding: 15,
    backgroundColor: '#FDFDFD',
    elevation: 5,
  },
  OtpContainer: {
    width: '100%',
    height: 60,
    paddingHorizontal: 15,
    marginTop: 25,
  },
  otp: {
    width: 65,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#EDEDED',
    color: Colors.textcolor,
    fontSize: 18,
    fontFamily: Fonts.Assistant700,
  },
});
