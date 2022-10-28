import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../assets/Colors';
const width = Dimensions.get('window').width;
export const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#903233',
    paddingVertical: 15,
    paddingLeft: 15,
  },
  header: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: '500',
    color: '#fff',
  },
  img: {
    resizeMode: 'contain',
    height: 180,
    width: 180,
    marginRight: 15,
  },
});
