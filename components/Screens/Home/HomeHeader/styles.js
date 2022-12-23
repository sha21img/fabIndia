import {StyleSheet} from 'react-native';
import Fonts from '../../../../assets/fonts';
export const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  logo: {
    backgroundColor: 'green',
    height: 25,
    width: 80,
  },
  detailContainer: {
    // width: '50%',
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  locationText: {
    color: '#792C27',
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
    color: '#792C27',
    fontSize: 22,
    fontFamily: Fonts.Assistant400,
  },
  currencyText: {
    color: '#792C27',
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    paddingLeft: 5,
  },
  cartContainer: {
    marginHorizontal: 5,
  },
  imagestyle: {
    width: 90,
    height: 40,
    marginLeft: 10,
    resizeMode: 'contain',
  },
});
