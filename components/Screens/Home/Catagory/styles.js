import {StyleSheet} from 'react-native';
import Fonts from '../../../../assets/fonts';
export const Styles = StyleSheet.create({
  mainContainer: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  catagory: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  imgDim: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  catagoryText: {
    textAlign: 'center',
    fontFamily: Fonts.Assistant600,
    fontSize: 18,
    paddingTop: 2,
  },
});
