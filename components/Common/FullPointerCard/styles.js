import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  productcontainer: {
    backgroundColor: '#ffffff',
    elevation: 3,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: 'auto',
  },
  heading: {
    fontFamily: Fonts.PlayfairDisplay700Italic,
    fontSize: 16,
    color: Colors.primarycolor,
  },
  productName: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.textcolor,
  },
  mrp: {
    fontFamily: Fonts.Assistant400,
    fontSize: 18,
  },
  price: {
    fontFamily: Fonts.Assistant700,
    fontSize: 18,
    paddingHorizontal: 5,
  },
  discount: {
    fontFamily: Fonts.Assistant700,
    paddingHorizontal: 5,
    fontSize: 18,
    color: 'grey',
  },
  save: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    color: '#96AD66',
  },
});
