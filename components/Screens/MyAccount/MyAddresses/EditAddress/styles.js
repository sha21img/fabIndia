import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flexGrow: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondDiv: {
    flex: 1,
    padding: 20,
  },
  contacttxt: {
    fontSize: 18,
    color: Colors.textcolor,
    paddingHorizontal: 10,
    fontFamily: Fonts.Assistant600,
  },
  pickercontainer: {
    width: 75,
    height: 40,
    justifyContent: 'center',
  },
  pickerbox: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomColor: '#EDEDED',
  },
  pickertitle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold',
    flex: 1,
    // marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  selectedTextStyle: {
    paddingLeft: 5,
    // paddingRight: 5,
    color: '#000',
    textAlign: 'right',
  },
  selectnametxt: {
    paddingLeft: 10,
    color: '#000',
    textAlign: 'right',
  },
  searchbar: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    // marginLeft: 8,
    // marginRight: 10,
  },
  textinput: {
    borderRadius: 1,
    fontSize: 14,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  textinput1: {
    // paddingLeft: 20,
    letterSpacing: 2,
    borderBottomColor: 'white',
    marginVertical: Platform.OS === 'android' ? 5 : 10,
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
  },
  addresstxt: {
    fontSize: 18,
    color: Colors.textcolor,
    marginTop: 10,
    fontFamily: Fonts.Assistant600,
    // paddingHorizontal: 10,
  },
  dropdown: {
    height: 50,
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  defaultaddressbox: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  defaultaddresstxt: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  btnbox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    paddingVertical: 15,
    borderRadius: 30,
  },
  btntxt: {},
});
export default Styles;
