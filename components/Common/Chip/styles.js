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
    marginVertical: 7,
    marginRight: 15,
  },
  chipTextActive: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontWeight: '400',
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: Fonts.AssistantRegular,
  },
  chipBoxInactive: {
    backgroundColor: Colors.inAactivecolor,
    alignSelf: 'flex-start',
    borderRadius: 40,
    marginVertical: 7,
    fontFamily: Fonts.AssistantRegular,
    marginRight: 15,
  },
  chipTextInactive: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.textcolor,
  },
});
