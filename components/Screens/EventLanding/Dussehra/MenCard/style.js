import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';

export const Styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'pink',
    overflow: 'hidden',
  },
  headingText: {
    fontSize: 24,
    fontFamily: Fonts.PlayfairDisplay700Italic,
    lineHeight: 32,
    color: Colors.primarycolor,
  },
  headingBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backgroundImage: {
    width: 68,
    height: 308,
    position: 'absolute',
    top: 0,
  },
  imageDime: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  description: {
    paddingTop: 10,
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    color: Colors.textcolor,
    paddingHorizontal: 30,
  },
  sliderContainer: {
    padding: 10,
  },
  cardText: {
    alignSelf: 'center',
    marginTop: 'auto',
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginVertical: 20,
    maxWidth: 120,
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: 'white',
    fontFamily: Fonts.PlayfairDisplay600,
    fontSize: 16,
  },
});
