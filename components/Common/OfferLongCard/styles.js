import {StyleSheet} from 'react-native';
import Fonts from '../../../assets/fonts';
export const Styles = StyleSheet.create({
  img: {
    height: 170,
    width: 260,
    marginRight: 10,
    marginTop: 5,
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  discountTextContainer: {
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(144,50,51,0.8)',
    margin: 10,
  },
  uptoText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.Assistant300,
  },
  offerText: { 
    color: '#fff',
    fontSize: 20,
    fontFamily: Fonts.Assistant700,
  },
  bottomText: {
    fontSize: 16,
    fontFamily: Fonts.PlayfairDisplay500Italic,
    color: '#fff',
    lineHeight: 16,
    margin: 10,
  },
});
