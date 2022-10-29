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
    fontWeight: '400',
    color: '#4A4A4A',
    lineHeight: 21,
    fontFamily: Fonts.AssistantRegular,
  },
  amountbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingVertical: 10,
  },
  amounttxt: {
    paddingRight: 10,
    fontWeight: '400',
    fontSize: 16,
    color: '#4A4A4A',
    fontFamily: Fonts.RupeeForadian,
  },
  amountoff: {
    paddingRight: 10,
    textDecorationLine: 'line-through',
    color: '#979797',
    fontSize: 14,
  },
  offertxt: {
    paddingRight: 10,
    fontFamily: Fonts.AssistantRegular,
    color: '#96AD66',
    fontWeight: '700',
    fontSize: 16,
  },
});
