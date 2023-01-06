import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  cardContainer: {
    width: '48%',
    elevation: 5,
    backgroundColor: Colors.WHITE,
  },
  imagedimension: {height: 212, width: '100%'},
  headingbox: {
    padding: 10,
    backgroundColor: Colors.WHITE
  },
  headingtxt: {
    fontSize: 16,
    color: Colors.textcolor,
    lineHeight: 21,
    fontFamily: Fonts.Assistant400,
  },
  pricebox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 5
  },
  mrptxt: {
    paddingRight: 5,
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
  amounttxt: {
    paddingRight: 5,
    fontSize: 14,
    color: Colors.textcolor,
    fontFamily: Fonts.Assistant400,
  },
  priceofftxt: {
    fontSize: 13,
    color: Colors.inactiveicon,
    textDecorationLine: 'line-through'
  },
  offertxt: {
    paddingRight: 5,
    fontFamily: Fonts.Assistant700,
    color: '#96AD66',
    fontSize: 12,
  },
});
