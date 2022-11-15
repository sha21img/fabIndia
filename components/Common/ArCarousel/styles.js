import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  mainbox: {
    elevation: 3,
    backgroundColor: 'white',
    margin: 2,
    marginVertical: 15,
  },
  headingbox: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headingtxt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.textcolor,
  },
  amountbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pricetxt: {
    fontFamily: Fonts.Assistant700,
    fontSize: 18,
    color: '#4A4A4A',
    marginRight: 10,
  },
  originalpricetxt: {
    fontFamily: Fonts.RupeeForadian,
    fontSize: 12,
    color: '#4A4A4A',
    marginRight: 10,
  },
  offertxt: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    color: '#96AD66',
    marginRight: 10,
  },
  btncontainer: {
    paddingTop: 30,
    flexDirection: 'row',
  },
  arbox: {
    backgroundColor: '#4A4A4A',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  },
  artxt: {
    color: '#FFFF',
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
  },
  optionbox: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 20,
  },
  optiontxt: {
    color: Colors.textcolor,
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
  },
});
