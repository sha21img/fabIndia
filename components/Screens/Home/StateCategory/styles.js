import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: Colors.backgroundColor,
  },
  imgContainer: {
    alignItems: 'center',
    margin: 10,
  },
  img: {
    height: 125,
    width: 125,
    borderRadius: 100,
    marginVertical: 10,
  },
  bottomText: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    lineHeight: 20,
  },
});
