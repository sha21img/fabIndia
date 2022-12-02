import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../../assets/Colors';
import Fonts from '../../../../../../assets/fonts';

export const Styles = StyleSheet.create({
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
  replacecolortxt: {
    fontFamily: Fonts.Assistant600,
    fontSize: 16,
    color: Colors.textcolor,
  },
  originalcolortxt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    color: Colors.textcolor,
  },
  saritetx: {
    fontFamily: Fonts.PlayfairDisplay600Italic,
    fontSize: 18,
    color: Colors.textcolor,
  },
});
