import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // marginHorizontal: 15,
    backgroundColor: '#FFFFFF',
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
    width: 400,
    height: 250,
    backgroundColor: 'white',
  },
  nameTxtView: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  nameTxt: {
    fontSize: 14,
  },
  textInput: {
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEEEC',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  mobileNo: {
    fontSize: 14,
    marginTop: 30,
  },
  email: {
    fontSize: 14,
    marginTop: 30,
  },
  buttonView: {
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 16,
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
    marginBottom: 20,
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
});
