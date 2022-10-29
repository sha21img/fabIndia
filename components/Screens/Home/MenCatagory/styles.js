import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
const dimension = Dimensions.get('window');
export const Styles = StyleSheet.create({
  imagecontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundimage: {
    height: 214,
    width: dimension.width / 3,
  },
  imagetxt: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: Fonts.AssistantRegular,
  },
  txtbox: {
    backgroundColor: 'rgba(151, 124, 104, 0.7)',
    paddingVertical: 3,
    position: 'absolute',
    width: '100%',
    paddingLeft: 15,
  },
});
