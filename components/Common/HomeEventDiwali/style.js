import {Dimensions, StyleSheet} from 'react-native';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  Container: {
    // height:527,
    backgroundColor: '#C4C4C4',
    // width:"100%"
  },
  ImageContainer: {
    height: 140,
    position: 'absolute',
    top: 0,
  },
  HeadingContainer: {
    marginTop: 40,
    alignItems: 'center',
    marginHorizontal: 14,
    padding: 5,
  },
  ImageBackContainer: {
    marginBottom: 24,
  },
  CardText: {fontFamily: Fonts.Assistant400, fontSize: 16, color: '#ffffff'},
  CardTextContainer: {
    color: '#ffffff',
  },
  CardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});
