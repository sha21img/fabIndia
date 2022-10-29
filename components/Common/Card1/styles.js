import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  imagedimension: {height: 212, width: '100%'},
  headingbox: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headingtxt: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4A4A4A',
    lineHeight: 21,
    fontFamily: Fonts.AssistantRegular,
  },
  pricebox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingVertical: 10,
  },
  mrptxt: {
    paddingRight: 5,
    fontWeight: '400',
    fontSize: 14,
    color: '#4A4A4A',
  },
  amounttxt: {
    paddingRight: 5,
    fontWeight: '400',
    fontSize: 13,
    color: '#4A4A4A',
  },
  priceofftxt: {
    paddingRight: 5,
    textDecorationLine: 'line-through',
    color: '#979797',
    fontSize: 12,
    fontWeight: '700',
  },
  offertxt: {
    paddingRight: 5,
    fontFamily: Fonts.AssistantRegular,
    color: '#96AD66',
    fontWeight: '700',
    fontSize: 12,
  },
});
