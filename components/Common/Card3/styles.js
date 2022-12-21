import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  imagedimension: {height: 212, width: 'auto'},
  headingbox: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flex: 1,
  },
  headingtxt: {
    fontSize: 12,
    color: '#4A4A4A',
    lineHeight: 21,
    fontFamily: Fonts.Assistant400,
  },
  pricebox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingBottom: 10,
  },
  mrptxt: {
    paddingRight: 5,
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: '#4A4A4A',
  },
  amounttxt: {
    paddingRight: 5,
    fontSize: 13,
    color: '#4A4A4A',
    fontFamily: Fonts.RupeeForadian,
  },
  priceofftxt: {
    paddingRight: 5,
    textDecorationLine: 'line-through',
    color: '#979797',
    fontSize: 12,
    fontFamily: Fonts.RupeeForadian,
  },
  offertxt: {
    paddingRight: 5,
    fontFamily: Fonts.Assistant700,
    color: '#96AD66',
    fontSize: 12,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#FAFAFA',
  },
  dash: {height: '100%', width: 1, backgroundColor: '#BDBDBD'},
  actionstxt: {
    fontSize: 14,
    fontFamily: Fonts.Assistant600,
    color: '#4A4A4A',
  },
});
