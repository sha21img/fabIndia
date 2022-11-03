import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
const dimension = Dimensions.get('window');
export const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    paddingBottom: 20,
    flexGrow: 1,
  },
  space: {marginTop: 40},
});
