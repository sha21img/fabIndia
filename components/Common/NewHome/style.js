import {StyleSheet} from 'react-native';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 15,
    marginTop: 15,
  },
  linearContainer: {
    position: 'absolute',
    bottom: 0,
    height: 67,
    width: '100%',
  },
  cardText: {
    marginLeft: 5,
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    lineHeight: 21,
    position: 'absolute',
    bottom: 12,
    left: 12,
    color: '#ffffff',
  },
});
