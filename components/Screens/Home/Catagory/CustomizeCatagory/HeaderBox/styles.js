import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../../../assets/Colors';
import Fonts from '../../../../../../assets/fonts';
const dimension = Dimensions.get('window');
export const Styles = StyleSheet.create({
  headbox: {
    backgroundColor: '#F3ECE8',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  headtxt: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: Fonts.PlayfairDisplay600,
    color: Colors.textcolor,
  },
  middletxt: {
    lineHeight: 22,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    fontSize: 16,
  },
  readtxt: {
    paddingTop: 20,
    lineHeight: 22,
    fontFamily: Fonts.Assistant400,
    color: Colors.primarycolor,
    fontSize: 16,
  },
  btnbox: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.primarycolor,
    alignSelf: 'flex-start',
    borderRadius: 100,
  },
  btntxt: {
    lineHeight: 22,
    fontFamily: Fonts.Assistant400,
    color: '#FFFFFF',
    fontSize: 16,
  },
});
