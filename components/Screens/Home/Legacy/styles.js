import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
const width = Dimensions.get('window').width;
export const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#903233',
    paddingVertical: 15,
    paddingLeft: 15,
  },
  headingBox: {
    flexDirection: 'row',
  },
  header: {
    fontSize: 24,
    marginBottom: 15,
    fontFamily: Fonts.PlayfairDisplay500,
    color: '#fff',
  },
  header1: {
    fontSize: 24,
    marginBottom: 15,
    paddingLeft: 7,
    fontFamily: Fonts.PlayfairDisplay500Italic,
    color: '#fff',
  },
  img: {
    resizeMode: 'contain',
    height: 180,
    width: 180,
    marginRight: 15,
  },
});
