import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  productcontainer: {
    backgroundColor: 'white',
    elevation: 3,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  flower: {
    width: 120,
    height: 130,
    position: 'absolute',
    top: -20,
    right: 0,
    transform: [{rotateY: '180deg'}],
  },
  cardDetailContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 'auto',
    overflow: 'hidden',
  },
  singleproducttitle: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    paddingRight: 5,
  },
  txtbox: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  singleproductamountSign: {
    fontSize: 18,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
    marginRight: 3,
  },
  singleproductamount: {
    fontSize: 18,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
  },
  outofstocktxt: {
    color: '#DA5959',
    fontSize: 14,
    fontFamily: Fonts.Assistant700,
  },
  description: {
    paddingVertical: 10,
  },
  descriptionText: {
    fontFamily: Fonts.PlayfairDisplay400Italic,
    fontSize: 14,
    lineHeight: 19,
    color: Colors.textcolor,
  },
});
