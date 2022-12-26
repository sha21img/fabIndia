import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import React, {useState, useEffect} from 'react';
import InputText from '../../Common/InputText';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import axios from 'axios';
import {getCartID, getWishID, postDataAuth} from '../../Common/Helper';
import CommonButton from '../../Common/CommonButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {StackActions, CommonActions} from '@react-navigation/native';
import {FacebookLogin} from '../../SocialLogin/FacebookLogin';

export default function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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

  const handleSubmit = async () => {
    if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      var details = {
        grant_type: 'password',
        scope: '',
        client_id: 'mobile_android',
        client_secret: 'secret',
        username: email,
        password: password,
      };
      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
      fetch('https://apisap.fabindia.com/authorizationserver/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formBody,
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (res1) {
          const tokenGenerate = {...res1, isCheck: true};
          console.log('tokenGeneratetokenGeneratetokenGenerate', tokenGenerate);
          if (res1.error) {
            Toast.showWithGravity(
              'Enter correct Details',
              Toast.LONG,
              Toast.TOP,
            );
          } else {
            AsyncStorage.setItem('generatToken', JSON.stringify(tokenGenerate));
            props.navigation.navigate('MyAccount', {
              screen: 'MyAccounts',
            });
            // props.navigation.dispatch(
            //   CommonActions.reset({
            //     index: 0,
            //     routes: [{name: 'MyAccounts'}],
            //   }),
            // );
            getCartID();
            getWishID();
          }
        });
    } else {
      Toast.showWithGravity('Invalid Email', Toast.LONG, Toast.TOP);
    }
  };
  const generatTokenWithout = async () => {
    await axios
      .post(
        `https://apisap.fabindia.com/authorizationserver/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
      )
      .then(
        response => {
          const tokenGenerate = {...response.data, isCheck: false};
          console.log('tokenGeneratetokenGeneratetokenGenerate', tokenGenerate);
          AsyncStorage.setItem('generatToken', JSON.stringify(tokenGenerate));
        },
        error => {
          console.log('response-=-=-=-=-=-error', error);
        },
      );
  };
  const checkToken = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    if (getToken == null) {
      await generatTokenWithout();
    }
  };
  const facebookLoginHandler = () => {
    FacebookLogin();
  };
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
      <View></View>
        <Text style={styles.titleText}>Log in with email address</Text>
        <InputText
          label={'Email address'}
          onChangeText={text => setEmail(text)}
          value={email}
          customStyle={{marginTop: 10}}
        />
        <InputText
          label={'Password'}
          onChangeText={text => setPassword(text)}
          customStyle={{marginTop: 10}}
          value={password}
          secureTextEntry={hideOldPass}
          right={
            <TextInput.Icon
              name={() => (
                <Feather
                  name="eye-off"
                  color={hideOldPass ? Colors.primarycolor : Colors.textcolor}
                  size={20}
                  onPress={toggleOldHide}
                />
              )}
            />
          }
        />
        <TouchableOpacity
          style={styles.readText}
          onPress={() => {
            props.navigation.navigate('MyAccount', {
              screen: 'ResetPassword',
            });
          }}>
          <Text style={styles.forgetText}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={{paddingVertical: 10}}>
          <CommonButton
            handleClick={handleSubmit}
            backgroundColor="#BDBDBD"
            txt="Login"
            customViewStyle={{
              backgroundColor:
                !password || !email
                  ? Colors.inAactivecolor
                  : Colors.primarycolor,
            }}
            disable={!password || !email}
          />
        </View>

        <View
          style={{
            marginTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              paddingVertical: 5,
              fontFamily: Fonts.Assistant600,
              fontSize: 16,
            }}>
            Not a Registered user?
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Register')}>
            <Text
              style={{
                paddingVertical: 5,
                fontFamily: Fonts.Assistant600,
                fontSize: 16,
                color: Colors.primarycolor,
              }}>
              Sign Up
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
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => facebookLoginHandler()}>
            <Image source={facebookIcon} style={styles.facebookIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => googleLoginHandler()}>
            <Image source={googleIcon} style={styles.googleIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    marginLeft: 5,
  },
  facebookIcon: {
    height: 33,
    width: 33,
    borderRadius: 50,
    marginRight: 5,
  },
  readText: {
    paddingVertical: 7,
  },
  forgetText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
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
  btncontainer: {
    padding: 12,
    backgroundColor: '#FDFDFD',
    elevation: 5,
  },
});
