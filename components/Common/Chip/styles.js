import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from '../../../assets/Colors';
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
  },
  chipBoxInactive: {
    backgroundColor: Colors.inAactivecolor,
    alignSelf: 'flex-start',
    borderRadius: 40,
    marginVertical: 7,
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
