import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';
const dimension = Dimensions.get('window');
export const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    paddingBottom: 20,
    flexGrow: 1,
  },
  chipbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  commontabbox: {
    paddingHorizontal: 10,
    height: 450,
  },
  box: {marginTop: 40},
  commontabbox1: {marginLeft: 15, height: 520},
  storycardbox: {marginTop: 40, backgroundColor: '#908EA6'},
});
