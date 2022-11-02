import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  backgroundContainer: {
    width: '100%',
    height: '75%',
    backgroundColor: '#F3ECE8',
    position: 'absolute',
  },
  headingBox: {
    width: '100%',
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 15,
  },
  headingText: {
    fontSize: 30,
    color: Colors.textcolor,
    fontFamily: Fonts.PlayfairDisplay600Italic,
  },
  headingDescription: {
    fontSize: 20,
    color: Colors.textcolor,
    fontFamily: Fonts.Assistant400,
    lineHeight: 26,
  },
});
