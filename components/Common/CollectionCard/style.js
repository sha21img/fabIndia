import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    width: 210,
    height: 312,
    resizeMode: 'cover',
    paddingVertical:15,
    marginLeft:15
  },
  exploreNowBox: {
    backgroundColor: '#ffffff',
    borderRadius: 40,
    position: 'absolute',
    left: 20,
    bottom: 20,
    paddingHorizontal:10,
    paddingVertical:4
  },
  exploreNowText: {
    fontFamily:Fonts.AssistantRegular,
    fontSize: 16,
    fontWeight: '400',
    color: '#903233',
  },
  headingContainer: {
    width:192,
    marginHorizontal:8
  },
  heading: {
    fontFamily:Fonts.PlayfairDisplayItalic,
    fontSize: 20,
    fontWeight: '400',
    color: '#ffffff',
  },
  text: {
    fontFamily:Fonts.AssistantRegular,
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
  },
});
