import {StyleSheet} from 'react-native';
import Fonts from '../../../../assets/fonts';
export const Styles = StyleSheet.create({
  mainContainer: {
    // position: 'absolute',
    // top: -60,
    // zIndex: 10,
  },
  container: {
    backgroundColor: 'transparent',
    padding: 15,
  },
  catagory: {
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 10,
    marginRight: 10,
  },
  catagoryText: {
    textAlign: 'center',
    fontFamily: Fonts.Assistant400,
  },
});
