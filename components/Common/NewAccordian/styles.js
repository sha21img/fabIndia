import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
export const Styles = StyleSheet.create({
  accordbox: {
    overflow: 'hidden',
  },
  headingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 10,
    backgroundColor: '#e9e9e9',
  },
  activetxt: {
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    marginLeft: 20,
  },
  listBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    paddingVertical: 10,
    paddingTop: 10,
    backgroundColor: '#f6f6f6',
    // marginLeft: 45
  },
});
