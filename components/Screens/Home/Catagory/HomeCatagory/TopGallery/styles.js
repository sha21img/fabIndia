import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../../../../../assets/fonts';
const dimension = Dimensions.get('window');
export const Styles = StyleSheet.create({
  imagecontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundimg: {
    height: 214,
    width: dimension.width / 3,
  },
  txtbox: {
    backgroundColor: 'rgba(160, 154, 143, 0.7)',
    paddingVertical: 3,
    position: 'absolute',
    width: '100%',
    paddingLeft: 15,
  },
  imagetxt: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
  },
  categoryContainer: {
    width: 160,
    height: 160,
    backgroundColor: 'rgba(220, 121, 100, 0.8)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  logo: {
    height: 23,
    width: 67,
  },
  categoryContainerText: {
    color: '#FFFFFF',
    marginLeft: 3,
    fontSize: 20,
    fontFamily: Fonts.PlayfairDisplay400Italic,
  },
});
