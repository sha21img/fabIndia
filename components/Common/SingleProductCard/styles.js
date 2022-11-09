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
    fontFamily: Fonts.Assistant400,
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
    fontFamily: Fonts.RupeeForadian,
    color: Colors.inactiveicon,
    paddingRight: 5,
  },

  singleproductoff: {
    fontSize: 12,
    fontFamily: Fonts.RupeeForadian,
    color: Colors.inactiveicon,
    paddingRight: 5,
    textDecorationLine: 'line-through',
  },
  singleproductdiscount: {
    fontSize: 16,
    fontFamily: Fonts.Assistant700,
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
    fontFamily: Fonts.Assistant400,
    color: '#FFFFFF',
  },
  outofstocktxt: {
    color: '#DA5959',
    fontSize: 14,
    fontFamily: Fonts.Assistant700,
  },
  btnBox: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 10,
  },
  vr: {
    backgroundColor: 'grey',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  emi: {
    backgroundColor: '#95BDCA',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  btnText: {
    color: 'white',
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    lineHeight: 18,
  },
  trendingTag: {
    backgroundColor: Colors.primarycolor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: 'absolute',
    zIndex: 10,
    top: 25,
    color: 'white',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
