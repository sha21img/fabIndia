import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  ButtonBox: {
    backgroundColor: 'rgba(74,74,74,0.7)',
    padding: 10,
    borderRadius: 40,
    position: 'absolute',
    left: 20,
    bottom: 25,
  },
  ButtonText: {
    fontSize: 16,
    color: 'white',
    fontFamily: Fonts.Assistant400,
  },
  dotBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
