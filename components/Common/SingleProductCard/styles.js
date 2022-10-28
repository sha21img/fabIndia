import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  scrollcontainer: {
    paddingHorizontal: 15,
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  productcontainer: {
    backgroundColor: '#ffffff',
    elevation: 3,
  },
  singleproducttitle: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: Fonts.AssistantRegular,
    color: Colors.inactiveicon,
    paddingRight: 5,
  },
  txtbox: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  singleproductamount: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: Fonts.RupeeForadian,
    color: Colors.inactiveicon,
    paddingRight: 5,
  },

  singleproductoff: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: Fonts.RupeeForadian,
    color: Colors.inactiveicon,
    paddingRight: 5,
    textDecorationLine: 'line-through',
  },
  singleproductdiscount: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: Fonts.AssistantRegular,
    color: Colors.inactiveicon,
    paddingRight: 3,
  },
  notifybtn: {
    marginTop: 10,
    backgroundColor: Colors.primarycolor,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  notifytxt: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: Fonts.AssistantRegular,
    color: '#FFFFFF',
  },
  outofstocktxt: {
    color: '#DA5959',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Fonts.AssistantRegular,
  },
});
