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
    backgroundColor: 'rgba(224, 176, 112, 0.4)',
    paddingVertical: 3,
    position: 'absolute',
    marginLeft: 15,
    paddingHorizontal: 3,
    bottom: 15,
    borderRadius: 5,
    paddingVertical: 5,
  },
  imagetxt: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: Fonts.Assistant400,
  },
});
