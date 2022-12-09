import {StyleSheet} from 'react-native';
import Fonts from '../../../assets/fonts';
export const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 460,
    marginBottom: 110,
  },
  headingBox: {padding: 20},
  heading: {
    paddingVertical: 5,
    color: 'white',
    fontFamily: Fonts.PlayfairDisplay600,
    fontSize: 30,
    lineHeight: 40,
  },
  description: {
    color: 'white',
    fontFamily: Fonts.Assistant400,
    fontSize: 18,
    lineHeight: 24,
  },
  imageCardBox: {
    paddingHorizontal: '8%',
  },
  imageCard: {height: 450, weight: '100%'},
  innerImageCard: {
    width: '100%',
    marginTop: 'auto',
  },
  imageText: {
    padding: 15,
    paddingTop: 40,
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: 'white',
  },
});
