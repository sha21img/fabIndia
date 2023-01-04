import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  Stylesheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import Otp from './Otp';
import {image} from '../../../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fonts from '../../../assets/fonts';
import {FacebookLogin} from '../../SocialLogin/FacebookLogin';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import NumberCheck from '../../Common/NumberCheck';
import {
  AccessToken,
  GraphRequest,
  LoginManager,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import {BaseURL2, AuthBaseUrl2} from '../../Common/Helper';

export default function Login_Register(props) {
  const [numberRequire, setNumberRequire] = useState(false);
  const [from, setFrom] = useState('');
  const [userGoogleInfo, setUserGoogleInfo] = useState({});
  const [userEmailToken, setUserEmailToken] = useState({});
  const [fbDetails, setFbDetails] = useState();
  const dispatch = useDispatch();

  //
  const googleIcon = {
    uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
  };
  const facebookIcon = {
    uri: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png',
  };

  const facebookLoginHandler = () => {
    LoginManager;
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            let accessToken = data.accessToken;
            const responseInfoCallback = (error, result) => {
              if (error) {
                console.log(error);
              } else {
                console.log('122result123456789', result);
                let userData = Object.assign(
                  {},
                  {
                    api_key: accessToken,
                    id: result.id,
                    name: result.name,
                    photo: result.picture.data.url,
                    email: result.email,
                    type: 'regular',
                    role: 'facebook',
                    phone: null,
                    phone_prefix: null,
                  },
                );
                console.log('demo12345678', userData);
                setFbDetails(userData);
                checkPhoneFB(userData);
              }
            };
            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken: accessToken,
                parameters: {
                  fields: {
                    string:
                      'email,name,first_name,middle_name,last_name,picture',
                  },
                },
              },
              responseInfoCallback,
            );
            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
          });
        }
      },
      function (error) {
        alert('Login fail with error: ' + error);
      },
    );
  };
  const resisterHandler = () => {
    props.navigation.navigate('Register');
  };
  const login = () => {
    props.navigation.navigate('Login');
  };
  const checkPhone = async (userInfo, code) => {
    let FbEmail = userInfo?.user?.email;
    await axios
      .get(`${BaseURL2}/users?uid=${FbEmail}&lang=en&curr=INR`)
      .then(response => {
        console.log('response-=-=-=-=-=-number', response.data);
        if (response.status == 200) {
          response.data ? saveTokenGoogle(userInfo, code) : setFrom('Email'),
            setNumberRequire(true);
        }
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };
  const checkPhoneFB = async userData => {
    let FbEmail = userData?.email;
    console.log('this is in the check phone', FbEmail);
    await axios
      .get(`${BaseURL2}/users?uid=${FbEmail}&lang=en&curr=INR`)
      .then(response => {
        console.log('response-=-=-=-=-=-number', response.data);
        if (response.status == 200) {
          response.data ? saveTokenFb(userData) : setFrom('Facebook'),
            setNumberRequire(true);
        }
      })
      .catch(error => {
        console.log(error, 'error');
      });
  };
  const saveTokenFb = userData => {
    console.log('user data from facebook', userData);
    var details = {
      grant_type: 'custom',
      scope: '',
      client_id: 'mobile_android',
      client_secret: 'secret',
      provider: 'FACEBOOK',
      authToken: userData?.api_key,
      username: userData?.email,
    };
    console.log('detailsdetailsdetails', details);
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    fetch(`${AuthBaseUrl2}/oauth/token`, {
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
        console.log('response==>-=-=-=', res1);
        const tokenGenerate = {...res1, isCheck: true};
        if (res1.error) {
          Toast.showWithGravity(res1.error_description, Toast.LONG, Toast.TOP);
        } else {
          console.log('tokenGeneratetokenGeneratetokenGenerate', tokenGenerate);
          setNumberRequire(false);
          AsyncStorage.setItem('generatToken', JSON.stringify(tokenGenerate));
          props.navigation.navigate('MyAccount', {
            screen: 'MyAccounts',
          });
          getCartID(dispatch);
          getWishID(dispatch);
        }
      });
  };
  const saveTokenGoogle = (userInfo, code) => {
    var details = {
      grant_type: 'custom',
      scope: '',
      client_id: 'mobile_android',
      client_secret: 'secret',
      provider: 'GOOGLE',
      username: userInfo.user.email,
      authToken: code.accessToken,
    };
    console.log('detailsdetailsdetails', details);
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    fetch(`${AuthBaseUrl2}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
    })
      .then(function (res) {
        console.log('resresresresresresres', res);
        return res.json();
      })
      .then(function (res1) {
        console.log('response==>-=-=-=', res1);
        const tokenGenerate = {...res1, isCheck: true};
        if (res1.error) {
          Toast.showWithGravity(res1.error_description, Toast.LONG, Toast.TOP);
        } else {
          console.log('tokenGeneratetokenGeneratetokenGenerate', tokenGenerate);
          AsyncStorage.setItem('generatToken', JSON.stringify(tokenGenerate));
          props.navigation.navigate('MyAccount', {
            screen: 'MyAccounts',
          });
          getCartID(dispatch);
          getWishID(dispatch);
        }
      });
  };
  const signIn = async () => {
    try {
      GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        // androidClientId:
        //   '880463673394-hp2s28e6hjdcm65qjqrlogfohevk5296.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        webClientId:
          '919208314385-n31m1r91p6jcfflgru2f2ktnogkrqo3a.apps.googleusercontent.com',
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        hostedDomain: '', // specifies a hosted domain restriction
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        accountName: '', // [Android] specifies an account name on the device that should be used
        // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
        openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
        profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
      });
      await GoogleSignin.hasPlayServices();
      console.log('reached google sign in');
      const userInfo = await GoogleSignin.signIn();
      const code = await GoogleSignin.getTokens();
      console.log('userInfouserInfouserInfouserInfouserInfo', code);
      setUserGoogleInfo(userInfo);
      setUserEmailToken(code);
      if (code.accessToken) {
        console.log('in the ifff');
        checkPhone(userInfo, code);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {numberRequire ? (
        <NumberCheck
          setNumberRequire={setNumberRequire}
          userGoogleInfo={userGoogleInfo}
          userEmailToken={userEmailToken}
          fbDetails={fbDetails}
          checkFrom={from}
        />
      ) : (
        <ImageBackground
          source={image.loginBg}
          resizeMode="cover"
          style={Styles.container}>
          <Image
            style={{
              width: 140,
              height: 150,
              top: 0,
              position: 'absolute',
              resizeMode: 'contain',
              right: 0,
              transform: [{rotate: '0deg'}, {scaleY: -1}],
            }}
            source={image.fabfamilyflower}
          />
          <Image
            style={{
              width: 140,
              height: 150,
              bottom: 0,
              position: 'absolute',
              resizeMode: 'contain',
              left: 0,
              transform: [{rotate: '0deg'}, {scaleX: -1}],
            }}
            source={image.fabfamilyflower}
          />
          <Text
            style={{
              fontFamily: Fonts.PlayfairDisplay600Italic,
              fontSize: 26,
              lineHeight: 24,
              color: 'white',
              paddingHorizontal: 20,
            }}>
            Hello!
          </Text>
          <Text style={Styles.titleText}>
            Log in or register to manage your orders
          </Text>
          <View style={Styles.buttonContainer}>
            {/* <TouchableOpacity
          style={Styles.button}
          onPress={() => loginWithMobileHandler()}>
          <Text style={Styles.loginText}>Log in with moble no.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => loginWithEmailHandler()}>
          <Text style={Styles.loginText}>Log in with email</Text>
        </TouchableOpacity> */}
            <TouchableOpacity style={Styles.button} onPress={() => login()}>
              <Text style={Styles.loginText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.registerButton}
              onPress={() => resisterHandler()}>
              <Text style={Styles.registerText}>Register</Text>
            </TouchableOpacity>
            <View style={Styles.horizontalContainer}>
              <View style={Styles.horizontalLine} />
              <View>
                <Text style={Styles.orText}>or</Text>
              </View>
              <View style={Styles.iconContainer} />
            </View>
            <View style={Styles.socialIconContainer}>
              <TouchableOpacity onPress={() => facebookLoginHandler()}>
                <Image source={facebookIcon} style={Styles.facebookIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => signIn()}>
                <Image source={googleIcon} style={Styles.googleIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
    </>
  );
}
