import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  ImageBackground: {height: 360, padding: 20, position: 'relative'},
  SmallView: {
    backgroundColor: '#4D8299',
    opacity: 0.8,
    height: 166,
    width: 144,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  DotContainer1: {
    height: 10,
    width: 45,
    top: -5,
    left: 9,
    position: 'absolute',
  },
  DotContainer2: {
    height: 10,
    width: 45,
    top: 132,
    right: -23,
    position: 'absolute',
  },
  Design:{
    height: 121,
    width: 250,
    bottom: 0,
    right: 0,
    opacity: 0.8,
    position: 'absolute',
  }
});
