import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
export const Styles = StyleSheet.create({
  conatiner: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  mainbox: {
    borderBottomWidth: 1,
    paddingTop: 15,
    borderBottomColor: '#BDBDBD',
  },
  ticketnumber: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
  issuetext: {
    fontSize: 12,
    fontFamily: Fonts.Assistant400,
    color: '#979797',
  },
  statusbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  statustext: {
    width: '60%',
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
  progresstext: {
    color: '#FAA859',
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
  },
  datetimetext: {
    fontSize: 12,
    fontFamily: Fonts.Assistant400,
    color: '#979797',
  },
});
