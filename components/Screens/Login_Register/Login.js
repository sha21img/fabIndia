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
import CountryPicker from 'rn-country-picker';
import InputText from '../../Common/InputText';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import axios from 'axios';
import {
  BaseURL2,
  getCartID,
  getWishID,
  postDataAuth,
  UnAuthPostData,
} from '../../Common/Helper';
import CommonButton from '../../Common/CommonButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {StackActions, CommonActions} from '@react-navigation/native';
import {FacebookLogin} from '../../SocialLogin/FacebookLogin';
import { AuthBaseUrl2 } from '../../Common/Helper';
export default function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [method, setMethod] = useState('Mobile');
  const [hideOldPass, setHideOldPass] = useState(true);
  const [mobilePrefix, setMobilePrefix] = useState('91');
  const [Otp, setOtp] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [transactionId, setTransectionId] = useState(false);
  const [generateOtp, setGenerateOtp] = useState(false);
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
  const saveTokenFab = async data => {
    await AsyncStorage.setItem('fabToken', JSON.stringify(data));
  };
  const tokenGenerationFabFamily = async () => {
    const params = {
      username: 'durgesh.yadav@fabindia.net',
      password: 'AIlqeFI4K',
    };
    await axios
      .post(`https://api.apm20.gravty.io/v1/login/`, params, {
        headers: {
          'x-api-key': 'ZIhuq8Igby1qOyhu1nnsb6JL5ibQJ2sf6V968DLk',
          'Content-Type': 'application/json',
        },
      })
      .then(async response => {
        saveTokenFab(response.data);
      })
      .catch(errors => {
        console.log('errors for token generation', errors);
      });
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
  const facebookLoginHandler = () => {
    FacebookLogin();
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
  const saveToken = async () => {
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
      .post(
        `${BaseURL2}otp/validate?lang=en&curr=INR`,
        data,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        console.log('this sis res', response?.data);
        if (response?.status == 200) {
          saveToken();
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
      <ScrollView style={styles.container}>
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
                height: 35,
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
                  <TextInput
                    activeOutlineColor="white"
                    activeUnderlineColor="white"
                    underlineColor="white"
                    style={styles.textinput1}
                    value={phoneNumber}
                    placeholder="phone number"
                    onChangeText={value =>
                      value.length <= 10 ? setPhoneNumber(value) : false
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
                        <Feather
                          name="eye-off"
                          color={
                            hideOldPass ? Colors.primarycolor : Colors.textcolor
                          }
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
              </>
            )}
          </>
        )}
        <View style={{paddingVertical: 10}}>
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
                    phoneNumber.length == 10 ? Colors.primarycolor : '#BDBDBD',
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
  textinput1: {
    letterSpacing: 2,
    borderBottomColor: 'white',
    fontSize: 18,
    color: 'black',
    height: 20,
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
    paddingVertical: 15,
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
