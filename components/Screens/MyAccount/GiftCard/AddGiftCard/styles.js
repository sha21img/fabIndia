import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
const width = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3ECE8',
    paddingVertical: 15,
    marginTop: 15,
  },
  headerTxtOne: {
    fontSize: 16,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
  },
  headerTxtTwo: {
    fontSize: 16,
    fontFamily: Fonts.RupeeForadian,
    color: Colors.primarycolor,
  },
  stretch: {
    width: width,
    height: 250,
  },
  cardDetailsView: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  cardDetailsTxt: {
    fontSize: 18,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
  },
  cardNumTxt: {
    fontSize: 16,
    marginTop: 10,
  },
  buttonView: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#EEEDE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    width: '100%',
    backgroundColor: '#750000',
    marginBottom: 20,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTxt: {
    color: 'white',
  },
  textInputOne: {
    fontSize: 18,
    textDecorationLine: 'underline',
    textDecorationColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEEEC',
    paddingHorizontal: 0,
  },
  textInputTwoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  textInputTwo: {
    fontSize: 18,
    textDecorationLine: 'underline',
    textDecorationColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEEEC',
    paddingHorizontal: 0,
  },
});
