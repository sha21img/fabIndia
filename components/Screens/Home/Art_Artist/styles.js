import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
export const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    overflow: 'hidden',
    marginVertical: 20,
  },
  backgroundBox: {
    width: '72%',
    backgroundColor: '#EDE8E7',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    right: 0,
    bottom: 100,
  },
  headingBox: {
    padding: 20,
  },
  heading: {
    fontFamily: Fonts.PlayfairDisplay400,
    fontSize: 24,
    color: '#903233',
  },
  description: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    lineHeight: 21,
    paddingVertical: 10,
  },
  imageBox: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    width: '48%',
    marginVertical: 7,
    height: 170,
  },
});
