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
    fontFamily: Fonts.PlayfairDisplayItalic,
    lineHeight: 20,
  },
  UptoText: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: Fonts.PlayfairDisplayRegular,
  },
  OfferValue: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '700',
    fontFamily: Fonts.AssistantRegular,
  },
  ShopTablet: {
    height: 123,
    paddingHorizontal: 20,
  },
  ShopNowContainer: {
    alignItems: 'flex-start',
    bottom: '10%',
    position: 'absolute',
    marginHorizontal: 20,
  },
  ShopNowContainerText: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 50,
  },
  CardDescription: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: Fonts.AssistantRegular,
    fontWeight: '400',
  },
});
