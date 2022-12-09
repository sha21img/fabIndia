import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import React, {useState} from 'react';
import InputText from '../../Common/InputText';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Login() {
  const [text, setText] = React.useState('');

  const [hideOldPass, setHideOldPass] = useState(true);
  const googleIcon = {
    uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
  };
  const facebookIcon = {
    uri: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png',
  };
  const icon = {
    uri: 'https://img.icons8.com/ios-glyphs/512/visible.png',
  };

  const toggleOldHide = () => {
    setHideOldPass(!hideOldPass);
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleText}>Log in with email address</Text>
        <InputText
          label={'Email address'}
          onChangeText={text => setText(text)}
          value={text}
          customStyle={{marginTop: 10}}
        />
        <InputText
          label={'Password'}
          onChangeText={text => setText(text)}
          customStyle={{marginTop: 10}}
          value={text}
          right={
            <TextInput.Icon
              name={() => (
                <Feather
                  name="eye-off"
                  color={Colors.primarycolor}
                  size={20}
                  onPress={() => {}}
                />
              )}
            />
          }
        />
        <TouchableOpacity style={styles.readText}>
          <Text style={styles.forgetText}>Forgot password</Text>
        </TouchableOpacity>
        <View style={styles.horizontalContainer}>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={styles.orText}>Or</Text>
          </View>
          <View style={styles.horizontalLine} />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => facebookLoginHandler()}>
            <Image source={facebookIcon} style={styles.facebookIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => googleLoginHandler()}>
            <Image source={googleIcon} style={styles.googleIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    padding: 15,
    backgroundColor: '#ffffff',
  },
  titleText: {
    fontFamily: Fonts.Assistant600,
    fontSize: 18,
    paddingVertical: 10,
    color: Colors.textcolor,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  googleIcon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
  facebookIcon: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 10,
  },
  readText: {
    paddingVertical: 7,
  },
  forgetText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    color: '#903233',
  },
  orText: {
    width: 50,
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#BDBDBD',
  },
});
