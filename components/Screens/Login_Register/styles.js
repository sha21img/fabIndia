import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
    width: windowWidth,
  },
  titleText: {
    fontFamily: Fonts.Assistant600,
    fontSize: 20,
    lineHeight: 24,
    color: 'white',
    paddingHorizontal: 40,
    paddingTop: 10,
  },
  button: {
    width: '60%',
    backgroundColor: Colors.primarycolor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 8,
  },
  registerButton: {
    width: '60%',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 8,
  },
  buttonContainer: {
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    lineHeight: 21,
    color: 'white',
  },
  registerText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    lineHeight: 21,
    color: Colors.textcolor,
  },
  googleIcon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 5,
  },
  facebookIcon: {
    height: 35,
    width: 35,
    borderRadius: 50,
    margin: 5,
  },
  iconContainer: {
    flex: 1,
    height: 1,
    backgroundColor: '#ffffff',
  },
  orText: {
    width: 50,
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ffffff',
  },
  socialIconContainer: {flexDirection: 'row', marginTop: 20},
});
