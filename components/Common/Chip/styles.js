import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  chipBoxActive: {
    backgroundColor: Colors.primarycolor,
    alignSelf: 'flex-start',
    borderRadius: 40,
    marginRight: 10,
  },
  chipTextActive: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: Fonts.Assistant400,
  },
  chipBoxInactive: {
    backgroundColor: Colors.inAactivecolor,
    alignSelf: 'flex-start',
    borderRadius: 40,
    marginRight: 10,
  },
  chipTextInactive: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
});
