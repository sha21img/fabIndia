import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  product: {
    marginHorizontal: 16,
    marginTop: 16,
    flexDirection: 'row',
    borderRadius: 3,
    elevation: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  txt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    color: Colors.textcolor,
  },
  image: {
    width: 69,
    height: 89,
  },
  textContainer: {
    justifyContent: 'space-evenly',
    width: '70%',
  },
  bold: {
    fontFamily: Fonts.Assistant600,
    fontSize: 14,
    color: Colors.textcolor,
  },
  price: {
    fontFamily: Fonts.RupeeForadian,
    fontSize: 14,
    color: Colors.textcolor,
  },
});
