import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    flexGrow: 1,
    paddingBottom: 20,
  },
  inputField: {
    marginVertical: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },

  textAreaContainer: {
    marginTop: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 5,
  },
  textArea: {
    height: 100,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  submitButton: {
    height: 40,
    backgroundColor: '#903233',

    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileNo: {
    fontSize: 16,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
  },
  email: {
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.primarycolor,
  },
  text: {
    width: '80%',

    color: 'gray',
  },
});
