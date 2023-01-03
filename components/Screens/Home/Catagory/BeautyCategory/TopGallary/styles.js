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
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
    backgroundColor: 'rgba(231, 177, 177, 0.9)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    flexDirection: 'row',
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
