import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';

export default Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    padding: 15,
  },
  noCardText: {
    fontFamily: Fonts.Assistant600,
    fontSize: 18,
    color: Colors.textcolor,
  },
  InputTextContainer: {
    paddingVertical: 15,
  },
  expireBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textinput: {
    borderRadius: 1,
    fontSize: 14,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  textinput1: {
    borderRadius: 1,
    fontSize: 14,
    marginBottom: 10,
    width: '47%',
    backgroundColor: 'white',
  },
  btnBox: {
    padding: 12,
  },
});
