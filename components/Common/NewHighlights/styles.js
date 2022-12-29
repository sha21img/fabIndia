import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
export const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  headingBox: {
    position: 'absolute',
    top: '37%',
    left: '4%',
    zIndex: 10,
  },
  headingText: {
    fontSize: 14,
    color: '#4A4A4A',
    fontFamily: Fonts.Assistant300,
  },
  headingTitle: {
    color: '#4A4A4A',
    fontSize: 24,
    fontFamily: Fonts.PlayfairDisplay700,
  },
  imageContainer: {
    paddingLeft: '15%',
    paddingTop: 20,
    paddingBottom: 5,
    marginLeft: '17%',
    width: '100%',
    backgroundColor: '#F3E0E0',
  },
  imageBox: {
    marginRight: 10,
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  imageText: {
    color: '#4A4A4A',
    fontSize: 16,
    paddingVertical: 5,
    fontFamily: Fonts.Assistant400,
  },
});
