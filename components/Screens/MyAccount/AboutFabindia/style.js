import {StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';

export const Styles = StyleSheet.create({
  BannerTape: {
    height: 31,
    width: '100%',
    backgroundColor: Colors.primarycolor,
    position: 'absolute',
    bottom: 13,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  BannerTapeText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.Assistant300,
    lineHeight: 16,
  },
  SubBannerTape: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 13,
    marginVertical: 13,
  },
});
