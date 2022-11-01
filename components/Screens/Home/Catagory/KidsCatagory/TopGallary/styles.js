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
    backgroundColor: 'rgba(151, 124, 104, 0.7)',
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
});
