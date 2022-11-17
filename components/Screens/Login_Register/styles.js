import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    height: windowHeight,
    width: windowWidth,
  },
  titleText: {color: '#ffffff', fontSize: 17},
  button: {
    width: '70%',
    height: 40,
    backgroundColor: '#903233',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  registerButton: {
    width: '70%',
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {color: 'white', fontSize: 16},
  registerText: {color: '#903233', fontSize: 16},
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
  iconContainer: {flex: 1, height: 1, backgroundColor: '#ffffff'},
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
  horizontalLine: {flex: 1, height: 1, backgroundColor: '#ffffff'},
  socialIconContainer: {flexDirection: 'row', marginTop: 20},
});
