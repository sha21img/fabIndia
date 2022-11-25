import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
export const Styles = StyleSheet.create({
  mainView: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  mainDivText: {
    // fontFamily: Fonts.openSansRegular,
    fontSize: 14,
  },
  mapViewstyle: {
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upperView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
    paddingVertical: 20,
  },
  topheadtext: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    color: Colors.textcolor,
  },
  topheadtext1: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.primarycolor,
  },
  btnbox: {
    padding: 12,
    backgroundColor: '#FDFDFD',
    elevation: 5,
  },
});
