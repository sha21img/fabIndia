import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';

export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFFF',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EEEDE7',
  },
  headerTxt: {
    fontSize: 22,
    color: '#750000',
  },
  stretch: {
    width: 410,
    height: 250,
    backgroundColor: 'white',
  },
  headingTextView: {
    paddingVertical: 22,
  },
  headingText: {
    fontSize: 16,
    fontFamily: Fonts.PlayfairDisplay500Italic,
    color: Colors.textcolor,
  },
  circleView: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 18,
    width: '100%',
  },
  circleContainer: {
    width: '15%',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#EEEDE7',
  },
  referTextView: {
    width: '80%',
  },
  referText: {
    fontSize: 16,
  },
  referTextBold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  termsAndConditions: {
    color: Colors.primarycolor,
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
  },
  buttonView: {
    // marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    width: '100%',
    backgroundColor: '#750000',
    // marginBottom: 20,/
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTxt: {
    color: 'white',
  },
  line: {
    borderBottomWidth: 5,
    borderBottomColor: '#EDEEEC',
  },
  modalShadow: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalMainView: {
    marginTop: 'auto',
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  headingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  modalHeadingTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 20,
    color: '#750000',
  },
  modalTxtView: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  modalTxtOne: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
  modalTxtTwo: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    marginTop: 20,
  },
});
