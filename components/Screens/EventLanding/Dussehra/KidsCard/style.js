import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
const width = Dimensions.get('window').width;
const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'space-between',
    paddingTop: 70,
  },
  textBox: {
    width: '35%',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontFamily: Fonts.IndieFlower,
    fontSize: 24,
    color: Colors.primarycolor,
    paddingVertical: 10,
    lineHeight: 35,
    letterSpacing: 2,
  },
  description: {
    fontFamily: Fonts.Assistant400,
    lineHeight: 18,
    color: Colors.textcolor,
    fontSize: 14,
    paddingTop: 10,
  },
  imageContainer1: {
    width: '60%',
  },
  titleBox: {
    width: '100%',
    backgroundColor: 'rgba(109,114,122,0.6)',
    marginTop: 'auto',
    marginBottom: 15,
  },
  title: {
    fontFamily: Fonts.IndieFlower,
    fontSize: 14,
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  imageContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  imageDim: {
    height: 180,
    width: width / 2.32,
  },
});
export default Styles;
