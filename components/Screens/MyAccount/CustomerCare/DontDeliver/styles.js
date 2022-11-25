import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 16,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
    paddingVertical: 20,
  },
  description: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    paddingTop: 15,
    lineHeight: 22,
  },
  customstyle: {marginTop: 30, paddingHorizontal: 0},
  commonbtncustom: {
    backgroundColor: '#FFFFFF',
    borderColor: '#BDBDBD',
    borderWidth: 1,
    marginTop: 30,
  },
  commonbtnbox: {
    padding: 12,
    backgroundColor: '#FDFDFD',
    elevation: 5,
  },
  modalcontainer: {width: '100%', flex: 1, backgroundColor: 'rgba(0,0,0,0.6)'},
  modalbox: {
    marginTop: 'auto',
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 15,
  },
  modaltopbox: {flexDirection: 'row', justifyContent: 'space-between'},
  modalhead: {
    fontSize: 18,
    fontFamily: Fonts.Assistant600,
    lineHeight: 22,
  },
});
