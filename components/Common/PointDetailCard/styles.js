import {StyleSheet} from 'react-native';
import Fonts from '../../../assets/fonts';
export const Styles = StyleSheet.create({
  image: {
    height: 300,
    width: 290,
  },
  detailContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4A4A4A',
    lineHeight: 21,
    fontFamily: Fonts.AssistantRegular,
  },
  headingTextBox: {
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4A4A4A',
    lineHeight: 21,
    fontFamily: Fonts.AssistantRegular,
  },
  financeBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  financeMoney: {
    paddingRight: 10,
    fontWeight: '400',
    fontSize: 16,
    color: '#4A4A4A',
    fontFamily: Fonts.RupeeForadian,
  },
  financeOff: {
    paddingRight: 10,
    textDecorationLine: 'line-through',
    color: '#979797',
    fontSize: 14,
  },
  financeOffer: {
    paddingRight: 10,
    fontFamily: Fonts.AssistantRegular,
    color: '#96AD66',
    fontWeight: '700',
    fontSize: 16,
  },
});
