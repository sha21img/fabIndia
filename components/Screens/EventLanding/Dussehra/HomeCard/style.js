import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
const width = Dimensions.get('window').width;
const Styles = StyleSheet.create({
  textContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  descriptionBox: {
    width: '70%',
    paddingRight: 30,
  },
  detail: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
  },
  detail1: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
  headingBox: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: Fonts.PlayfairDisplay700Italic,
    color: Colors.primarycolor,
  },
  mainImage: {
    height: 385,
    width: '100%',
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cardText: {
    padding: 10,
    fontSize: 14,
    lineHeight: 19,
    fontFamily: Fonts.PlayfairDisplay600Italic,
    color: 'white',
  },
});
export default Styles;
