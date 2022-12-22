import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
export const Styles = StyleSheet.create({
  accordbox: {
    overflow: 'hidden',
    // borderColor: '#dfdfdf',
  },
  titlebox: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '100%',
    // paddingHorizontal:15,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  titletxt: {
    fontSize: 16,
    color: Colors.textcolor,
  },
  activebox: {
    // paddingHorizontal: 15,
    // backgroundColor: '#F6F6F6',
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: ,
  },
  activetxt: {
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
});
