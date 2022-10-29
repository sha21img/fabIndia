import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
const dimension = Dimensions.get('window');

export const Styles = StyleSheet.create({
  CollectionHead: {
    marginLeft: 15,
    fontFamily: Fonts.PlayfairDisplayItalic,
    fontWeight: '600',
    fontSize: 20,
    color: Colors.textcolor,
    marginBottom: 10,
  },
  imagecontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
  },
  backgroundimg: {
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
  chipbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  commontab: {marginLeft: 15, height: 470, marginBottom:40},
  backgroundimage: {height: 670, width: 'auto'},
  customkurtabox: {
    position: 'relative',
    top: 100,
    backgroundColor: 'rgba(16, 31, 60, 1)',
    alignSelf: 'flex-start',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  customtxt: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: Fonts.BarlowRegular,
  },
  kurtatxt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '400',
    fontFamily: Fonts.BarlowRegular,
  },
});
