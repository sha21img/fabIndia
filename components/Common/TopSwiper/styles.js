import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
export const Styles = StyleSheet.create({
  image: {
    width: width,
    height: 212,
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 5,
  },
  btnIcon: {
    fontSize: 25,
    color: 'rgba(255,255,255,0.7)',
  },
});
