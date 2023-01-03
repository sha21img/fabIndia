import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  cardContainer: {
    width: 192,
    elevation: 5,
    marginRight: 10,
    marginBottom: 1,
    marginLeft: 1,
    backgroundColor: Colors.inAactivecolor,
  },
  headingbox: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: Colors.WHITE
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
    paddingVertical: 5,
    marginBottom: 5
  },
  amounttxt: {
    paddingRight: 10,
    fontSize: 13,
    color: '#4A4A4A',
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
