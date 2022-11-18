import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
export default function Login() {
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
        <View>
          <Text style={styles.titleText}>Log in with email address</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            // underlineColorAndroid={'#afafaf'}
            placeholder="Email address"
            autoCorrect={false}
            textContentType={'email'}
          />

          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{width: '90%'}}>
              <TextInput
                style={styles.input}
                // underlineColorAndroid={'#afafaf'}
                placeholder="Password"
                secureTextEntry={hideOldPass}
                autoCorrect={false}
                textContentType={'password'}
              />
            </View>
            <TouchableOpacity onPress={() => toggleOldHide()}>
              <Image
                onPress={() => toggleOldHide()}
                source={icon}
                style={{height: 25, width: 25, marginTop: 35}}
              />
            </TouchableOpacity>
          </View>

          <View style={{paddingBottom: 20}}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#903233',
                }}>
                Forgot password
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.horizontalContainer}>
            <View style={styles.horizontalLine} />
            <View>
              <Text style={styles.orText}>Or</Text>
            </View>
            <View style={styles.horizontalLine} />
          </View>
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: 10,
    paddingTop: 100,
    backgroundColor: '#ffffff',
  },

  titleText: {
    fontSize: 17,
    color: 'black',
    width: Dimensions.get('window').width - 20,
  },

  textInputContainer: {
    width: Dimensions.get('window').width - 20,
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    marginTop: 20,
    height: 50,
    borderBottomColor: '#afafaf',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: Dimensions.get('window').width - 20,
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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

  orText: {
    width: 50,
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 15,
    marginTop: 20,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#bdbdbd',
  },
  socialIconContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
