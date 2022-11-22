import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    width: 210,
    height: 312,
    resizeMode: 'stretch',
    paddingVertical: 15,
    marginRight: 15,
  },
  exploreNowBox: {
    backgroundColor: '#ffffff',
    borderRadius: 40,
    position: 'absolute',
    left: 10,
    bottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  exploreNowText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    lineHeight: 21,
    color: '#903233',
  },
  headingContainer: {
    width: 192,
    marginHorizontal: 8,
  },
  heading: {
    fontFamily: Fonts.PlayfairDisplay400Italic,
    fontSize: 20,
    color: '#ffffff',
    lineHeight: 27,
  },
  text: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 21,
  },
});
