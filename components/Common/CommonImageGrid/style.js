import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  imageBackground: {},
  container: {
    padding: 16,
  },
  mainView: {paddingVertical: 25, paddingHorizontal: 15},
  txt1: {fontSize: 30, fontFamily: Fonts.PlayfairDisplay600},
  txt2: {
    fontSize: 18,
    fontFamily: Fonts.Assistant400,
    marginBottom: 15,
    paddingTop: 5,
  },
});
