import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    padding: 20,
    width: width / 1.07,
    height: width / 1.07,
  },
  ButtonBox: {
    backgroundColor: 'rgba(74,74,74,0.7)',
    padding: 10,
    borderRadius: 40,
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
});
