import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';
const dimension = Dimensions.get('window');
export const Styles = StyleSheet.create({
  collectiontxt: {
    paddingHorizontal: 15,
    fontFamily: Fonts.PlayfairDisplay600Italic,
    fontSize: 20,
    color: Colors.textcolor,
    paddingBottom: 10,
  },
  container: {paddingHorizontal: 15},
});
