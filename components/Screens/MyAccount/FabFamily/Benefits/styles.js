import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';

export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EEEDE7',
  },
  headerTxt: {
    fontSize: 22,
    color: '#750000',
  },
  stretch: {
    width: 410,
    height: 250,
    backgroundColor: 'white',
  },
  txtMainView: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  txtOne: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
  txtTwo: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
  },
  txtThree: {
    fontSize: 18,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
  txtEight: {
    fontSize: 20,
    marginTop: 30,
    fontFamily: Fonts.PlayfairDisplay600,
    color: Colors.textcolor,
  },
  benefitstext: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    lineHeight: 21,
  },
});
