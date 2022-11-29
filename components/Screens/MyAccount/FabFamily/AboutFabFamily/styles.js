import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';

export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
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
  },
  txtView: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  txtOne: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
  txtTwo: {
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    paddingVertical: 10,
  },
  circleView: {
    paddingVertical: 20,
    paddingLeft: 15,
    flexDirection: 'row',
    backgroundColor: '#EDEDED',
    width: '100%',
    flexWrap: 'wrap',
  },
  circleInnerView: {
    width: 100,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primarycolor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  circleTxt: {
    color: '#FFFFFF',
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
  },
  circleBottomTxt: {
    textAlign: 'center',
    color: Colors.textcolor,
    fontFamily: Fonts.Assistant400,
    fontSize: 12,
  },
  lineView: {
    backgroundColor: Colors.primarycolor,
    height: 3,
    width: 15,
    marginTop: 50,
  },
  btnbox: {
    padding: 12,
    backgroundColor: '#FDFDFD',
    elevation: 5,
  },
});
