import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
export const Styles = StyleSheet.create({
  cardbox: {paddingHorizontal: 15, paddingVertical: 40},
  cardtxt: {
    fontFamily: Fonts.PlayfairDisplay600Italic,
    fontSize: 20,
    color: Colors.textcolor,
    paddingBottom: 10,
  },
  backgoundimage: {
    height: 180,
    width: '100%',
    overflow: 'hidden',
  },
  backgroundimagebox: {
    position: 'absolute',
    left: -40,
    bottom: 10,
    width: '100%',
    flexWrap: 'wrap',
  },
  backgoundimage1: {
    height: 140,
    width: 140,
    overflow: 'hidden',
    marginTop: 10,
    marginRight: 10,
  },
  backgroundimagebox1: {
    position: 'absolute',
    left: -23,
    bottom: 30,
    width: '100%',
    flexWrap: 'wrap',
  },
});
