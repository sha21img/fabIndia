import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
export const Styles = StyleSheet.create({
  mainContainer: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 7,
  },
  catagory: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    elevation: 10,
  },
  imgDim: {
    width: 70,
    height: 70,
    elevation: 10,
    borderRadius: 100,
  },
  catagoryText: {
    textAlign: 'center',
    fontFamily: Fonts.Assistant500,
    fontSize: 12,
    paddingTop: 2,
    color: Colors.textcolor,
  },
});
