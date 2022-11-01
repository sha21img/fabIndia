import {StyleSheet} from 'react-native';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  cardGradient: {
    position: 'absolute',
    bottom: 0,
    height: 130,
    width: '100%',
  },
  OfferContainer: {
    height: 97,
    width: 97,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    marginHorizontal: 20,
  },
  OfferValueText: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: Fonts.PlayfairDisplay400Italic,
    lineHeight: 20,
  },
  UptoText: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: Fonts.PlayfairDisplay400,
    lineHeight: 26,
  },
  OfferValue: {
    color: '#ffffff',
    fontSize: 30,
    fontFamily: Fonts.Assistant700,
    lineHeight: 30,
  },
  ShopTablet: {
    height: 123,
    paddingHorizontal: 20,
  },
  ShopNowContainer: {
    alignItems: 'flex-start',
    bottom: '25%',
    position: 'absolute',
    marginHorizontal: 20,
  },
  ShopNowContainerText: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 50,
  },
  CardDescription: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: Fonts.Assistant400,
  },
  btntext: {
    color: '#903233',
    fontFamily: Fonts.Assistant400,
  },
});
