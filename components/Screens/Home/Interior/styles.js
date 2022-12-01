import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
const width = Dimensions.get('window').width;
export const Styles = StyleSheet.create({
  imagebg: {
    width: '100%',
    height: 213,
    marginTop: 40,
    resizeMode: 'contain',
  },
  thoughtBox: {
    backgroundColor: '#288196',
    padding: 15,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thoughtText: {
    fontSize: 18,
    fontFamily: Fonts.Assistant400,
    color: 'white',
  },
  headingBox: {
    backgroundColor: '#68523E',
    padding: 15,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  headingText: {
    fontSize: 20,
    fontFamily: Fonts.PlayfairDisplay600,
    color: 'white',
  },
  headingText1: {
    fontSize: 26,
    fontFamily: Fonts.RunWildDemo,
    color: 'white',
  },
  buttonBox: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: '#903233',
  },
});
