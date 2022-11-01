import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';
const dimension = Dimensions.get('window');
export const Styles = StyleSheet.create({
  chipbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  commontab: {paddingLeft: 15, height: 490},
  backgroundimage: {height: 670, width: 'auto'},
  customkurtabox: {
    position: 'relative',
    top: 100,
    backgroundColor: 'rgba(16, 31, 60, 1)',
    alignSelf: 'flex-start',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  customtxt: {
    textAlign: 'center',
    fontSize: 32,
    color: '#FFFFFF',
    fontFamily: Fonts.BarlowRegular,
  },
  kurtatxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: Fonts.BarlowRegular,
    letterSpacing: 7,
  },
  descriptionbox: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: 'rgba(45, 53, 71, 0.8)',
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: '100%',
  },
  descriptiontxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    lineHeight: 21,
  },
  btnbox: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 20,
    borderRadius: 40,
    alignSelf: 'flex-start',
  },
  btntxt: {
    color: Colors.primarycolor,
    fontSize: 16,
    lineHeight: 21,
    fontFamily: Fonts.Assistant400,
  },
  offerDatabox: {flexDirection: 'row', alignSelf: 'center'},
  dotactive: {
    margin: 3,
    color: Colors.primarycolor,
    fontSize: 16,
  },
  dotinactive: {
    margin: 3,
    color: '#ABABAB',
    fontSize: 16,
  },
});
