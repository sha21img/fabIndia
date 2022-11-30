import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';

export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },

  product: {
    marginHorizontal: 16,
    marginTop: 16,
    flexDirection: 'row',
    borderRadius: 3,
    elevation: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  imageContainer: {
    margin: 10,
  },
  txt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    color: Colors.textcolor,
  },
  image: {
    width: 69,
    height: 89,
  },
  textContainer: {
    justifyContent: 'space-evenly',
  },
  bold: {
    fontFamily: Fonts.Assistant600,
    fontSize: 14,
    color: Colors.textcolor,
  },
  price: {
    fontFamily: Fonts.RupeeForadian,
    fontSize: 14,
    color: Colors.textcolor,
  },
  policyContainer: {
    borderBottomWidth: 1,
    paddingVertical: 16,
    borderBottomColor: '#EDEDED',
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewPolicy: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.primarycolor,
  },
  reasonsContainer: {
    marginHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  boldTitle: {
    fontSize: 16,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
  },
  inputContainer: {
    marginVertical: 20,
  },
  returntxt: {
    fontSize: 18,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
  },

  input: {
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 4,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    textAlignVertical: 'top',
  },
  bottomContainer: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: '#EDEDED',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appButtonContainer: {
    backgroundColor: Colors.primarycolor,
    borderRadius: 20,
    paddingVertical: 10,
  },
  appButtonText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
  },
});
