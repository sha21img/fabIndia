import {StyleSheet} from 'react-native';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../../assets/Colors';

export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingBottom: 30,
  },
  womencardbox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    backgroundColor: '#F3E0E0',
    paddingHorizontal: 15,
  },
  womentxt: {
    fontFamily: Fonts.PlayfairDisplay700Italic,
    fontSize: 24,
    color: Colors.textcolor,
    textAlign: 'center',
    lineHeight: 32,
  },
  headtxt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    color: Colors.textcolor,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 10,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  imagehead: {
    fontFamily: Fonts.PlayfairDisplay600Italic,
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 19,
  },
  imagedescription: {
    fontFamily: Fonts.PlayfairDisplay500Italic,
    fontSize: 24,
    color: '#FFFFFF',
    lineHeight: 32,
  },
  scrollimagetxt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 32,
  },
  chipbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  commontab: {marginLeft: 15, height: 520},
  eventbox: {
    marginTop: 40,
    alignItems: 'center',
    marginHorizontal: 14,
    padding: 5,
  },
  eventtxt: {
    fontFamily: Fonts.PlayfairDisplay700Italic,
    fontSize: 24,
    lineHeight: 31,
    color: Colors.textcolor,
  },
  eventdescriptiontxt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    color: Colors.textcolor,
    marginTop: 10,
  },
});
