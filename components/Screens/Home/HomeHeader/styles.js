import {StyleSheet} from 'react-native';
import Fonts from '../../../../assets/fonts';
export const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
  },
  logoBox: {
    width: '50%',
  },
  logo: {
    height: 30,
    width: 90,
  },
  detailContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  locationText: {
    color: 'white',
    fontSize: 12,
    paddingLeft: 5,
    width: 75,
    fontFamily: Fonts.Assistant400,
  },
  currencyContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  currencyIcon: {
    color: 'white',
    fontSize: 22,
    fontFamily: Fonts.Assistant400,
  },
  currencyText: {
    color: 'white',
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    paddingLeft: 5,
  },
  cartContainer: {
    marginHorizontal: 5,
  },
});
