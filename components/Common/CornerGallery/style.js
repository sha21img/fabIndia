import {StyleSheet} from 'react-native';
import Fonts from '../../../assets/fonts';

export const Styles = StyleSheet.create({
  CardContainer: {
    height: 297,
    width: 258,
    zIndex: 100,
    marginLeft: 15,
    elevation: 4,
    marginTop:15,
  },
  CardGradient: {
    position: 'absolute',
    bottom: 0,
    height: 67,
    width: '100%',
  },
  CardFooter: {
    marginLeft: 10,
    marginVertical: 5,
    fontWeight:"400",
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    lineHeight: 21,
    position: 'absolute',
    bottom: 12,
    left: 12,
    color: '#ffffff',
  },
  Container: {
    paddingTop: 48,
    height: 648,
    position: 'relative',
  },
  ContainerHeader: {
    fontSize: 18,
    fontFamily: Fonts.Assistant400,
    color: '#4A4A4A',
    lineHeight: 23,
    marginHorizontal: 20,
  },
  CardCarousole: {
    height: 660,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});
