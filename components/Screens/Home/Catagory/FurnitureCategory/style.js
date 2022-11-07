import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
const dimension = Dimensions.get('window');

export const Styles = StyleSheet.create({
  chipbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  commontab: {marginLeft: 15, height: 500, marginBottom: 40},
  box: {marginTop: 40},
  storycardbox: {marginTop: 40, backgroundColor: '#908EA6'},
});
