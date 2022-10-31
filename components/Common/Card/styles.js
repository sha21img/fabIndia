import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  headingbox: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headingtxt: {
    fontSize: 16,
    color: '#4A4A4A',
    lineHeight: 21,
    fontFamily: Fonts.Assistant400,
  },
  amountbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingVertical: 10,
  },
  amounttxt: {
    paddingRight: 10,
    fontSize: 16,
    color: '#4A4A4A',
    fontWeight: '400',
    fontFamily: Fonts.RupeeForadian,
  },
  amountoff: {
    paddingRight: 10,
    textDecorationLine: 'line-through',
    color: '#979797',
    fontFamily: Fonts.RupeeForadian,
    fontSize: 12,
  },
  offertxt: {
    paddingRight: 10,
    fontFamily: Fonts.Assistant700,
    color: '#96AD66',
    fontSize: 16,
  },
});
