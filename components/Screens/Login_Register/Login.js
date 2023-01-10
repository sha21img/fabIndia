import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  Linking,
  TextInput as Tp,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import CountryPicker from 'rn-country-picker';
import InputText from '../../Common/InputText';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import axios from 'axios';
import {
  addWishlist,
  BaseURL2,
  getCartID,
  getWishID,
  postDataAuth,
  tokenGenerationFabFamily,
  UnAuthPostData,
} from '../../Common/Helper';
import CommonButton from '../../Common/CommonButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {StackActions, CommonActions} from '@react-navigation/native';
import {FacebookLogin} from '../../SocialLogin/FacebookLogin';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthBaseUrl2} from '../../Common/Helper';
import {useDispatch} from 'react-redux';
import NumberCheck from '../../Common/NumberCheck';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {
  AccessToken,
  GraphRequest,
  LoginManager,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import LoadingComponent from '../../Common/LoadingComponent';

export default function Login(props) {
  const From = props?.route?.params?.From || '';
  const productCode = props?.route?.params?.productCode || '';
  const code = props?.route?.params?.code || '';
  const sizeCode = props?.route?.params?.sizeCode || '';
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [method, setMethod] = useState('Mobile');
  const [hideOldPass, setHideOldPass] = useState(true);
  const [mobilePrefix, setMobilePrefix] = useState('91');
  const [Otp, setOtp] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [transactionId, setTransectionId] = useState(false);
  const [generateOtp, setGenerateOtp] = useState(false);

  //
  const [numberRequire, setNumberRequire] = useState(false);
  const [userGoogleInfo, setUserGoogleInfo] = useState({});
  const [userEmailToken, setUserEmailToken] = useState({});
  const [fbDetails, setFbDetails] = useState();
  const [from, setFrom] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  //

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
  // const saveTokenFab = async data => {
  //   await AsyncStorage.setItem('fabToken', JSON.stringify(data));
  // };
  // const tokenGenerationFabFamily = async () => {
  //   const params = {
  //     username: 'durgesh.yadav@fabindia.net',
  //     password: 'AIlqeFI4K',
  //     // username: email,
  //     // password: password,
  //   };
  //   await axios
  //     .post(`https://api.apm20.gravty.io/v1/login/`, params, {
  //       headers: {
  //         'x-api-key': 'ZIhuq8Igby1qOyhu1nnsb6JL5ibQJ2sf6V968DLk',
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then(response => {
  //       console.log('resaaaaaaaaaaaa', response.data);
  //       saveTokenFab(response.data);
  //     })
  //     .catch(errors => {
  //       console.log('errors for token generation', errors);
  //     });
  // };
  const isAddWishlist = async from => {
    if (sizeCode.code !== '') {
      await addWishlist({code: productCode}, dispatch);
    }
    // props.navigation.goBack();
    if (from == 'PLP') {
      props.navigation.navigate('LandingPageSaris_Blouses', {
        code: code,
      });
    } else {
      props.navigation.navigate('ProductDetailed', {
        productId: productCode,
        imageUrlCheck: code,
      });
    }
    // props.navigation.navigate('YourWishlist');
  };

  const handleSubmit = async () => {
    if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      setIsLoading(true);
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
          tokenGenerationFabFamily();

          const tokenGenerate = {...res1, isCheck: true};
          console.log('tokenGeneratetokenGeneratetokenGenerate', tokenGenerate);

          if (res1.error) {
            Toast.showWithGravity(
              'Enter correct Details',
              Toast.LONG,
              Toast.TOP,
            );
            setIsLoading(false);
          } else {
            AsyncStorage.setItem('generatToken', JSON.stringify(tokenGenerate));
            getCartID(dispatch);
            getWishID(dispatch);
            if (From == 'PLP' || From == 'PDP') {
              isAddWishlist(From);
            } else {
              props.navigation.navigate('MyAccounts');
            }
            setIsLoading(false);
          }
        });
    } else {
      Toast.showWithGravity('Invalid Email', Toast.LONG, Toast.TOP);
    }
  };
  const generatTokenWithout = async () => {
    await axios
      .post(
        `${AuthBaseUrl2}/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
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

  const checkPhone = async (userInfo, code) => {
    let FbEmail = userInfo?.user?.email;
    console.log('this is in the check phone', FbEmail);
    await axios
      .get(`${BaseURL2}/users?uid=${FbEmail}&lang=en&curr=INR`)
      .then(response => {
        console.log('response-=-=-=-=-=-number', response.data);
        if (response.status == 200) {
          response.data
            ? saveTokenGoogle(userInfo, code)
            : setNumberRequire(true);
        }
      })
      .catch(error => {
        console.log(error, 'error');
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
  useEffect(() => {
    checkToken();
  }, []);

  const _selectedValue = index => {
    setMobilePrefix(index);
  };
  const handleOTP = async () => {
    console.log('handle otp');
    let param = {
      isLogin: true,
      isSignUp: false,
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: phoneNumber,
    };
    let res = await UnAuthPostData(`otp/generate?lang=en&curr=INR`, param);
    if (res.transactionId) {
      console.log('this sis send otp response', res);
      setTransectionId(res.transactionId);
      setGenerateOtp(true);
      // props.navigation.navigate('Otp', {
      //   transactionId: res.transactionId,
      //   mobilePrefix: mobilePrefix,
      //   phoneNumber: phoneNumber,
      // });
    } else {
      Toast.showWithGravity(res.errors[0].message, Toast.LONG, Toast.TOP);
    }
  };
  const saveTokenNumber = async () => {
    var details = {
      grant_type: 'custom',
      scope: '',
      client_id: 'mobile_android',
      client_secret: 'secret',
      provider: 'MOBILE',
      contactNumber: phoneNumber,
      contactNumberDailCode: `+${mobilePrefix}`,
      transactionId: transactionId,
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
          AsyncStorage.setItem('generatToken', JSON.stringify(tokenGenerate));
          // props.navigation.navigate('MyAccounts');
          getCartID(dispatch);
          getWishID(dispatch);

          if (From == 'PLP' || From == 'PDP') {
            isAddWishlist(From);
          } else {
            props.navigation.navigate('MyAccounts');
          }
        }
      });
  };
  const VerifyOTP = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    const data = {
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: phoneNumber,
      otp: Otp,
      transactionId: transactionId,
    };
    let res = await axios
      .post(`${BaseURL2}/otp/validate?lang=en&curr=INR`, data, {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      })
      .then(response => {
        console.log('this sis res', response?.data);
        if (response?.status == 200) {
          saveTokenNumber();
        } else {
          console.log('in else');
        }
      })
      .catch(error => {
        if (error?.response?.status == 400) {
          Toast.showWithGravity(
            error?.response?.data?.errors[0].message,
            Toast.LONG,
            Toast.TOP,
          );
        }
      });
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
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled">
          {generateOtp ? (
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#222',
                  fontSize: 20,
                  fontFamily: Fonts.Assistant600,
                  paddingVertical: 5,
                }}>
                Verify with OTP
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#222',
                  fontSize: 16,
                  fontFamily: Fonts.Assistant600,
                  paddingVertical: 5,
                }}>
                Send to{' '}
                {`${phoneNumber[0]}${phoneNumber[1]}******${phoneNumber[8]}${phoneNumber[9]}`}
              </Text>
              <TextInput
                value={Otp}
                activeOutlineColor="white"
                activeUnderlineColor="white"
                underlineColor="white"
                onChangeText={value =>
                  value.length <= 4 ? setOtp(value) : false
                }
                multiline={true}
                keyboardType="numeric"
                style={{
                  backgroundColor: '#fff',
                  height: 40,
                  textAlign: 'center',
                  borderBottomColor: Colors.inactiveicon,
                  borderBottomWidth: 1,
                  marginVertical: 10,
                  width: '85%',
                  alignSelf: 'center',
                }}
                placeholder="Enter 4-digit OTP"
              />
              <TouchableOpacity onPress={() => handleOTP()}>
                <Text
                  style={{
                    color: Colors.primarycolor,
                    textAlign: 'center',
                    marginVertical: 10,
                  }}>
                  Resend OTP
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity
                  onPress={() => setMethod('Mobile')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor:
                        method == 'Mobile' ? Colors.primarycolor : 'grey',
                      width: 22,
                      height: 22,
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor:
                          method == 'Mobile' ? Colors.primarycolor : 'grey',
                        width: 12,
                        height: 12,
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: Fonts.Assistant700,
                      paddingHorizontal: 7,
                    }}>
                    Mobile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setMethod('Email')}
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor:
                        method == 'Email' ? Colors.primarycolor : 'grey',
                      width: 22,
                      height: 22,
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor:
                          method == 'Email' ? Colors.primarycolor : 'grey',
                        width: 12,
                        height: 12,
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: Fonts.Assistant700,
                      paddingHorizontal: 7,
                    }}>
                    Email
                  </Text>
                </TouchableOpacity>
              </View>
              {method == 'Mobile' ? (
                <View style={styles.pickerbox}>
                  <CountryPicker
                    disable={false}
                    animationType={'slide'}
                    containerStyle={styles.pickercontainer}
                    pickerTitleStyle={styles.pickertitle}
                    selectedCountryTextStyle={styles.selectedTextStyle}
                    countryNameTextStyle={styles.selectnametxt}
                    pickerTitle={'Country Picker'}
                    searchBarPlaceHolder={'Search......'}
                    hideCountryFlag={false}
                    hideCountryCode={false}
                    searchBarStyle={styles.searchbar}
                    selectedValue={_selectedValue}
                    countryCode={mobilePrefix}
                  />
                  <View style={{flex: 1, paddingHorizontal: 15}}>
                    <Tp
                      // activeOutlineColor="white"
                      // activeUnderlineColor="white"
                      // underlineColor="white"
                      // style={styles.textinput1}
                      value={phoneNumber}
                      placeholder="Your Mobile Number"
                      onChangeText={value =>
                        value.length <= 10 && setPhoneNumber(value)
                      }
                      placeholderTextColor="grey"
                      keyboardType={'number-pad'}
                      disableFullscreenUI={true}
                    />
                  </View>
                </View>
              ) : (
                <>
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
                          <TouchableOpacity
                            onPress={toggleOldHide}
                            style={{
                              padding: 10,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Feather
                              name="eye-off"
                              color={
                                hideOldPass
                                  ? Colors.primarycolor
                                  : Colors.textcolor
                              }
                              size={16}
                            />
                          </TouchableOpacity>
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
                </>
              )}
            </>
          )}
          <View style={{paddingVertical: 10}}>
            {isLoading ? (
              <LoadingComponent backgroundColor="white" />
            ) : (
              <>
                {method == 'Mobile' ? (
                  generateOtp ? (
                    <CommonButton
                      disable={Otp.length != 4}
                      handleClick={VerifyOTP}
                      txt="Confirm OTP"
                      customViewStyle={{
                        backgroundColor:
                          Otp.length == 4 ? Colors.primarycolor : '#BDBDBD',
                      }}
                    />
                  ) : (
                    <CommonButton
                      disable={phoneNumber.length != 10}
                      backgroundColor="#BDBDBD"
                      txt="Send OTP"
                      handleClick={handleOTP}
                      customViewStyle={{
                        backgroundColor:
                          phoneNumber.length == 10
                            ? Colors.primarycolor
                            : '#BDBDBD',
                      }}
                    />
                  )
                ) : (
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
                )}
              </>
            )}
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
              onPress={() =>
                props.navigation.navigate('Register', {
                  From: From,
                  productCode: productCode,
                  code: code,
                })
              }>
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
            <TouchableOpacity onPress={() => signIn()}>
              <Image source={googleIcon} style={styles.googleIcon} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
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
  textinput1: {
    // letterSpacing: 2,
    borderBottomColor: 'white',
    fontSize: 16,
    color: 'black',
    // height: 40,
    backgroundColor: 'white',
    width: '100%',
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
  pickerbox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
    // paddingVertical: 15,
    borderBottomColor: '#EDEDED',
    marginVertical: 20,
  },
  pickercontainer: {
    width: 75,
    height: 30,
    justifyContent: 'center',
  },
  pickertitle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  selectedTextStyle: {
    paddingLeft: 5,
    // paddingRight: 5,
    color: '#000',
    textAlign: 'right',
  },
  selectnametxt: {
    paddingLeft: 10,
    color: '#000',
    textAlign: 'right',
  },
  searchbar: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    // marginLeft: 8,
    // marginRight: 10,
  },
});
