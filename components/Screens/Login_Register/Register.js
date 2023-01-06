import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Linking,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
// import {TextInput} from 'react-native-paper';
import CountryPicker from 'rn-country-picker';
import {Colors} from '../../../assets/Colors';
import CheckBox from 'react-native-check-box';
import InputText from '../../Common/InputText';
import CommonButton from '../../Common/CommonButton';
import Fonts from '../../../assets/fonts';
import {UnAuthPostData, BaseURL2, AuthBaseUrl2} from '../../Common/Helper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import moment from 'moment';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import NumberCheck from '../../Common/NumberCheck';
import {
  AccessToken,
  GraphRequest,
  LoginManager,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import {MaskedTextInput} from 'react-native-mask-text';
const faqs = [
  {
    id: '2',
    name: 'First name',
  },
  {
    id: '3',
    name: 'Last name',
  },
];
const Register = props => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [text, setText] = React.useState({
    'First name': '',
    'Last name': '',
    email: '',
    newPass: '',
    confPass: '',
  });
  const [maskedValue, setMaskedValue] = useState(
    moment(new Date()).format('DD-MM-YYYY'),
  );
  const [valid, setValid] = useState(false);
  const [mobilePrefix, setMobilePrefix] = useState('91');
  const [gender, SetGender] = useState('');
  const [generate, setgenerate] = useState(false);
  const [transactionId, settransactionId] = useState('');
  const [Otp, setOtp] = useState('');
  const [isCheckedSignup, setIsCheckedSignup] = useState(false);
  const [isAgree, setisAgree] = useState(false);
  const [DOB, setDOB] = useState('');
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  //
  const [numberRequire, setNumberRequire] = useState(false);
  const [userGoogleInfo, setUserGoogleInfo] = useState({});
  const [userEmailToken, setUserEmailToken] = useState({});
  const [emailError, setemailError] = useState('');
  const [isVerifyOtp, setIsVerifyOtp] = useState(false);

  const [fbDetails, setFbDetails] = useState();
  const [from, setFrom] = useState('');
  const dispatch = useDispatch();
  //
  const googleIcon = {
    uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
  };
  const facebookIcon = {
    uri: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png',
  };
  const _selectedValue = index => {
    setMobilePrefix(index);
  };
  useEffect(() => {
    setMaskedValue(maskedValue);
    const regexddmmyyyy =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](18|19|20)\d\d$/;
    if (regexddmmyyyy.test(date)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [date]);
  const generatTokenWithout = async () => {
    await axios
      .post(
        `${AuthBaseUrl2}/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
      )
      .then(
        response => {
          const tokenGenerate = {...response.data, isCheck: false};
          // console.log('tokenGenerate==>', tokenGenerate);
          AsyncStorage.setItem('generatToken', JSON.stringify(tokenGenerate));
        },
        error => {
          console.log('response-=-=-=-=-=-error', error);
        },
      );
  };
  const HandleRegister = async () => {
    let params = {
      consents: [],
      contactNumberCode: `+${mobilePrefix}`,
      contactNumber: phoneNumber,
      countryIsoCode: '',
      dateOfBirth: maskedValue,
      firstName: text['First name'],
      gender: {code: gender},
      lastName: text['Last name'],
      password: text.newPass,
      titleCode: '',
      transactionId: transactionId,
      uid: text.email,
    };
    console.log(params, 'register all data==params');
    const res = await UnAuthPostData('users?lang=en&curr=INR', params).then(
      res => {
        if (res?.errors) {
          Toast.showWithGravity(res.errors[0].message, Toast.LONG, Toast.TOP);
        } else {
          props.navigation.navigate('RegisterSuccess');
          console.log(res);
        }
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
  useEffect(() => {
    checkToken();
  });
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    // console.log('datePicked==>', date, moment(date).format('DD/MM/YYYY'));
    if (date) {
      setDOB(moment(date).format('DD/MM/YYYY')),
        setMaskedValue(moment(date).format('DD/MM/YYYY'));
    }
    hideDatePicker();
  };
  const GenerateOtp = async () => {
    let params = {
      isLogin: false,
      isSignUp: true,
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: phoneNumber,
    };
    console.log(params);
    await UnAuthPostData('otp/generate?lang=en&curr=INR', params).then(res => {
      console.log('res for regitser number sent', res);
      if (res.transactionId) {
        Toast.showWithGravity('OTP Sent !', Toast.LONG, Toast.TOP);
        settransactionId(res?.transactionId);
        setgenerate(true);
      } else {
        Toast.showWithGravity(res.errors[0].message, Toast.LONG, Toast.TOP);
      }
    });
  };
  const VerifyOTP = async () => {
    let params = {
      otp: Otp,
      transactionId: transactionId,
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: phoneNumber,
    };
    console.log(params);
    const res = await UnAuthPostData(
      'otp/validate?lang=en&curr=INR',
      params,
    ).then(res => {
      if (res?.errors) {
        Toast.showWithGravity(res.errors[0].message, Toast.LONG, Toast.TOP);
      } else {
        Toast.showWithGravity('Done', Toast.LONG, Toast.TOP);
        setIsVerifyOtp(true);
        setgenerate(false);
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
                // const isSuccess = setData(Labels.userDataId, userData);
                // if (isSuccess) {
                //   console.log('naviagteeee');
                //   props.navigation.navigate('MainScreens', {userData: userData});
                // } else {
                //   console.log('errorr');
                //   //   onError([Messages.codeErrorMessage]);
                // }
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
            new GraphRequestManager().addRequest(infoRequest).start();
          });
        }
      },
      function (error) {
        alert('Login fail with error: ' + error);
      },
    );
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
        <>
          <ScrollView
            contentContainerStyle={Styles.mainView}
            showsVerticalScrollIndicator={false}>
            <View style={Styles.secondDiv}>
              <Text style={Styles.contacttxt}>Welcome to FabIndia!</Text>
              {faqs.map((faq, index) => (
                <InputText
                  underlineColor="#EDEDED"
                  activeUnderlineColor=" #979797"
                  customStyle={Styles.textinput}
                  label={faq.name}
                  value={text[faq.name]}
                  maxLength={40}
                  onChangeText={text => {
                    setText(prev => {
                      return {
                        ...prev,
                        [faq.name]: text.replace(
                          /[`~0-9!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                          '',
                        ),
                      };
                    });
                  }}
                />
              ))}
              {generate ? (
                <View style={{marginVertical: 10}}>
                  <Text style={{textAlign: 'center', color: '#222'}}>
                    Verify with OTP Send to
                    {`${phoneNumber[0]}${phoneNumber[1]}******${phoneNumber[8]}${phoneNumber[9]}`}
                  </Text>

                  <TextInput
                    value={Otp}
                    activeOutlineColor="white"
                    activeUnderlineColor="black"
                    underlineColor="white"
                    onChangeText={value =>
                      value.length <= 4 ? setOtp(value) : false
                    }
                    multiline={true}
                    keyboardType="numeric"
                    style={{
                      backgroundColor: '#fff',
                      height: 50,
                      textAlign: 'center',
                      borderBottomColor: Colors.inactiveicon,
                      borderBottomWidth: 1,
                    }}
                    placeholder="Enter 4-digit OTP"
                  />
                  <TouchableOpacity onPress={() => GenerateOtp()}>
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
                <View style={Styles.pickerbox}>
                  <CountryPicker
                    disable={false}
                    animationType={'slide'}
                    containerStyle={Styles.pickercontainer}
                    pickerTitleStyle={Styles.pickertitle}
                    selectedCountryTextStyle={Styles.selectedTextStyle}
                    countryNameTextStyle={Styles.selectnametxt}
                    pickerTitle={'Country Picker'}
                    searchBarPlaceHolder={'Search......'}
                    hideCountryFlag={false}
                    hideCountryCode={false}
                    searchBarStyle={Styles.searchbar}
                    selectedValue={_selectedValue}
                    countryCode={mobilePrefix}
                  />
                  <View style={{flex: 1, paddingHorizontal: 15}}>
                    <TextInput
                      activeOutlineColor="white"
                      activeUnderlineColor="grey"
                      underlineColor="white"
                      style={Styles.textinput1}
                      value={phoneNumber}
                      placeholder="Your Mobile Number"
                      onChangeText={value => {
                        setIsVerifyOtp(false);
                        value.length <= 10 ? setPhoneNumber(value) : false;
                      }}
                      placeholderTextColor="grey"
                      keyboardType={'number-pad'}
                      disableFullscreenUI={true}
                    />
                  </View>
                </View>
              )}
              {generate ? (
                <CommonButton
                  disable={Otp.length != 4}
                  handleClick={VerifyOTP}
                  txt="Confirm OTP"
                  customViewStyle={{
                    backgroundColor:
                      Otp.length == 4 ? Colors.primarycolor : '#BDBDBD',
                    marginVertical: 10,
                  }}
                />
              ) : (
                <CommonButton
                  disable={phoneNumber.length != 10}
                  handleClick={GenerateOtp}
                  txt="Generate OTP"
                  customViewStyle={{
                    backgroundColor:
                      phoneNumber.length == 10
                        ? Colors.primarycolor
                        : '#BDBDBD',
                  }}
                />
              )}

              <View style={{marginTop: 15}}>
                <InputText
                  underlineColor="#EDEDED"
                  activeUnderlineColor=" #979797"
                  customStyle={Styles.textinput}
                  label="Email address"
                  value={text.email}
                  onChangeText={text => {
                    let regm = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                    if (regm.test(text)) {
                      setemailError('');
                    } else {
                      setemailError('Please enter valid email');
                    }
                    setText(prev => ({...prev, email: text}));
                  }}
                />
                <Text style={{color: 'red'}}>{emailError}</Text>
                <InputText
                  underlineColor="#EDEDED"
                  activeUnderlineColor=" #979797"
                  customStyle={Styles.textinput}
                  secureTextEntry={true}
                  label="New password"
                  value={text.newPass}
                  onChangeText={text =>
                    setText(prev => ({...prev, newPass: text}))
                  }
                />
                <InputText
                  underlineColor="#EDEDED"
                  activeUnderlineColor=" #979797"
                  secureTextEntry={true}
                  customStyle={Styles.textinput}
                  label="Confirm password"
                  value={text.confPass}
                  onChangeText={text =>
                    setText(prev => ({...prev, confPass: text}))
                  }
                />
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '50%',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      // activeOpacity={1}
                      onPress={() => {
                        if (gender == 'MALE') {
                          SetGender('');
                        } else {
                          SetGender('MALE');
                        }
                      }}
                      style={{
                        height: 30,
                        width: 30,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: '#d3d6db',
                        backgroundColor:
                          gender == 'MALE' ? Colors.primarycolor : 'white',
                      }}></TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        if (gender == 'MALE') {
                          SetGender('');
                        } else {
                          SetGender('MALE');
                        }
                      }}>
                      <Text style={{marginLeft: 10}}>Male</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '50%',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        if (gender == 'FEMALE') {
                          SetGender('');
                        } else {
                          SetGender('FEMALE');
                        }
                      }}
                      activeOpacity={1}
                      style={{
                        height: 30,
                        width: 30,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: '#d3d6db',
                        backgroundColor:
                          gender == 'FEMALE' ? Colors.primarycolor : 'white',
                      }}></TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        if (gender == 'FEMALE') {
                          SetGender('');
                        } else {
                          SetGender('FEMALE');
                        }
                      }}>
                      <Text style={{marginLeft: 10}}>Female</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    paddingVertical: 10,
                    // borderBottomWidth: 1,
                  }}>
                  <Text style={{fontsize: 12}}>Date of birth</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderBottomColor: 'gray',
                    }}>
                    <MaskedTextInput
                      mask="99-99-9999"
                      value={maskedValue}
                      style={{fontSize: 16}}
                      onChangeText={(text, rawText) => {
                        setMaskedValue(text);
                        setDate(text);
                        console.log('1234567890', text);
                      }}
                      keyboardType="numeric"
                    />
                    <Feather
                      name="calendar"
                      color={Colors.primarycolor}
                      size={20}
                      onPress={showDatePicker}
                    />
                  </View>
                  <Text style={{color: 'red'}}>
                    {!valid ? 'Please Enter Valid Date' : null}
                  </Text>
                </View>
              </View>
              <View style={[Styles.defaultaddressbox]}>
                <CheckBox
                  style={{paddingVertical: 5}}
                  checkBoxColor={Colors.primarycolor}
                  onClick={() => {
                    setIsCheckedSignup(!isCheckedSignup);
                  }}
                  isChecked={isCheckedSignup}
                />
                <Text style={{paddingHorizontal: 7}}>
                  Sign up for FabIndia newsletters
                </Text>
              </View>
              <View style={Styles.defaultaddressbox}>
                <CheckBox
                  style={{paddingVertical: 5}}
                  checkBoxColor={Colors.primarycolor}
                  onClick={() => {
                    setisAgree(!isAgree);
                  }}
                  isChecked={isAgree}
                />
                <Text style={{paddingHorizontal: 7, width: '85%'}}>
                  By registering you agree to{' '}
                  <Text
                    onPress={() => {
                      Linking.openURL(
                        'https://www.fabindiahome.com/term-of-use',
                      );
                    }}
                    style={{color: Colors.primarycolor}}>
                    T&C{' '}
                  </Text>
                  {/* </TouchableOpacity> */}
                  and{' '}
                  <Text
                    onPress={() => {
                      Linking.openURL(
                        'https://www.fabindiahome.com/term-of-use',
                      );
                    }}
                    style={{color: Colors.primarycolor}}>
                    Privacy Policy
                  </Text>
                </Text>
              </View>
              <View style={Styles.horizontalContainer}>
                <View style={Styles.horizontalLine} />
                <View>
                  <Text style={Styles.orText}>Or</Text>
                </View>
                <View style={Styles.horizontalLine} />
              </View>

              {/* <InputText
              underlineColor="#EDEDED"
              activeUnderlineColor=" #979797"
              customStyle={Styles.textinput}
              label="Date of birth"
              // value={text.newPass}
              // onChangeText={text => setText(prev => ({...prev, newPass: text}))}
            /> */}
              <View style={Styles.iconContainer}>
                <TouchableOpacity onPress={() => facebookLoginHandler()}>
                  <Image source={facebookIcon} style={Styles.facebookIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => signIn()}>
                  <Image source={googleIcon} style={Styles.googleIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <View style={Styles.btncontainer}>
            <CommonButton
              handleClick={HandleRegister}
              backgroundColor="#BDBDBD"
              txt="Register"
              disable={
                !(
                  !!text['First name'] &&
                  text['First name'].length >= 3 &&
                  text['First name'].length <= 40 &&
                  !!text['Last name'] &&
                  text['Last name'].length >= 3 &&
                  text['Last name'].length <= 40 &&
                  !!text.confPass &&
                  !!text.newPass &&
                  !!text.email &&
                  !!mobilePrefix &&
                  !!gender &&
                  !!DOB &&
                  !!phoneNumber &&
                  !!isVerifyOtp &&
                  !!valid
                )
              }
              customViewStyle={{
                backgroundColor:
                  !!text['First name'] &&
                  text['First name'].length >= 3 &&
                  text['First name'].length <= 40 &&
                  !!text['Last name'] &&
                  text['Last name'].length >= 3 &&
                  text['Last name'].length <= 40 &&
                  !!text.confPass &&
                  !!text.newPass &&
                  !!text.email &&
                  !!mobilePrefix &&
                  !!gender &&
                  !!DOB &&
                  !!phoneNumber &&
                  !!isVerifyOtp &&
                  !!valid
                    ? Colors.primarycolor
                    : 'grey',
              }}
            />
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </>
      )}
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondDiv: {
    flex: 1,
    paddingVertical: 20,
  },
  contacttxt: {
    fontSize: 18,
    color: Colors.textcolor,
    paddingHorizontal: 10,
    fontFamily: Fonts.Assistant600,
  },
  pickercontainer: {
    width: 75,
    height: 40,
    justifyContent: 'center',
  },
  pickerbox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomColor: '#EDEDED',
  },
  pickertitle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold',
    flex: 1,
    // marginLeft: 10,
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
  },
  textinput: {
    borderRadius: 1,
    fontSize: 14,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  textinput1: {
    // height: 40,
    // letterSpacing: 2,
    borderBottomColor: 'white',
    marginVertical: Platform.OS === 'android' ? 5 : 10,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
  },
  addresstxt: {
    fontSize: 18,
    color: Colors.textcolor,
    marginTop: 10,
    fontFamily: Fonts.Assistant600,
    // paddingHorizontal: 10,
  },
  dropdown: {
    height: 50,
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  defaultaddressbox: {
    flexDirection: 'row',
    paddingVertical: 7,
    alignItems: 'center',
  },
  defaultaddresstxt: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  btnbox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    paddingVertical: 15,
    borderRadius: 30,
  },
  btncontainer: {
    padding: 12,
    backgroundColor: '#FDFDFD',
    elevation: 5,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orText: {
    width: 50,
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#BDBDBD',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookIcon: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 10,
  },
  googleIcon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
});

export default Register;
