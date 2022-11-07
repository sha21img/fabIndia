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
  topbox: {
    width: 160,
    height: 160,
    backgroundColor: 'rgba(144, 50, 51, 0.8)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    borderRadius: 100,
    top: 142,
  },
  toptxt: {
    fontSize: 14,
    fontFamily: Fonts.Assistant300,
    color: '#FFFFFF',
    lineHeight: 18,
    textAlign: 'center',
  },
  mantxt: {
    color: '#FFFFFF',
    marginLeft: 3,
    fontSize: 18,
    fontFamily: Fonts.PlayfairDisplay400,
  },
  imagebox: {
    flexDirection: 'row',
    paddingVertical: 6,
    alignItems: 'flex-end',
  },
  imagedimension: {height: 20, width: 67},
});
