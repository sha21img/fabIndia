import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';

export default Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  noCardText: {
    fontFamily: Fonts.Assistant600,
    fontSize: 18,
    color: Colors.textcolor,
    margin: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    elevation: 5,
    margin: 15,
  },
  cardType: {
    width: 80,
    height: 40,
  },
  title: {
    fontFamily: Fonts.Assistant600,
    fontSize: 14,
    color: Colors.textcolor,
    paddingVertical: 2,
  },
  title1: {
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    paddingVertical: 2,
    fontSize: 14,
  },
  titleBox: {
    paddingVertical: 5,
  },
  iconContainer: {
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  menuIcon: {
    alignSelf: 'flex-end',
  },
  addContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 2,
    alignItems: 'center',
  },
  addCardText: {
    fontFamily: Fonts.Assistant400,
    color: Colors.primarycolor,
    paddingLeft: 5,
    fontSize: 16,
  },
  btnBox: {
    padding: 12,
  },
});
