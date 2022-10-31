import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
export const Styles = StyleSheet.create({
  accordbox: {
    overflow: 'hidden',
    borderColor: '#dfdfdf',
  },
  titlebox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,

    borderColor: '#EDEDED',
  },
  titletxt: {
    fontSize: 16,
    color: Colors.textcolor,
  },
  activebox: {
    paddingHorizontal: 15,
    backgroundColor: '#F6F6F6',
    paddingBottom: 25,
  },
  activetxt: {
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
});
