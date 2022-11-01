import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
export const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },

  imageContainer: {
    backgroundColor: '#F6EFE6',
    paddingLeft: '15%',
    paddingTop: 20,
    paddingBottom: 5,
    marginLeft: '17%',
  },

  imageBox: {
    padding: 5,
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'cover',
  },
  imageText: {
    color: '#4A4A4A',
    fontSize: 16,
    paddingVertical: 5,
    fontFamily: Fonts.Assistant400,
  },
});
