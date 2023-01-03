import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import CountryPicker from 'rn-country-picker';
import {useState} from 'react';
import {TextInput} from 'react-native-paper';
import CommonButton from '../CommonButton';
import {UnAuthPostData} from '../Helper';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NumberCheck({
  setNumberRequire,
  userGoogleInfo = {},
  userEmailToken = {},
}) {
  console.log('this is auth token form email', userEmailToken);
  const [mobilePrefix, setMobilePrefix] = useState('91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Otp, setOtp] = useState('');
  const [generate, setgenerate] = useState(false);
  const [transactionId, settransactionId] = useState('');

  const _selectedValue = index => {
    setMobilePrefix(index);
  };
  const GenerateOtp = async () => {
    let params = {
      isLogin: false,
      isSignUp: true,
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: phoneNumber,
    };
    console.log(params);
    await UnAuthPostData('otp/generate?lang=en&curr=INR', params)
      .then(res => {
        console.log('res for regitser number sent', res);
        if (res.transactionId) {
          Toast.showWithGravity('OTP Sent !', Toast.LONG, Toast.TOP);
          settransactionId(res?.transactionId);
          setgenerate(true);
        } else {
          Toast.showWithGravity(res.errors[0].message, Toast.LONG, Toast.TOP);
        }
      })
      .catch(error => {
        console.log('this is error', error);
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
        // setgenerate(false);
        userDetails();
      }
    });
  };
  const userDetails = async () => {
    console.log('adsfasdfasdfasdfasdfasdfasdfasdfasdfasdfasd]f[sd[f][sd]f[');
    let data = {
      firstName: userGoogleInfo?.user?.givenName,
      lastName: userGoogleInfo?.user?.familyName,
      uid: userGoogleInfo?.user?.email,
      password: `${userGoogleInfo?.user?.givenName}#${phoneNumber}`,
      titleCode: '',
      contactNumber: phoneNumber,
      contactNumberCode: '+91',
      authToken: userEmailToken.accessToken,
      provider: 'GOOGLE',
      transactionId: transactionId,
      consents: [
        {
          id: 'MARKETING_NEWSLETTER',
        },
      ],
    };
    console.log('tjis', data);
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    await axios
      .post(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users?lang=en&curr=INR`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer rLcepewFKp8YUipkMcpZsvRGDNs`,
            Accept: 'application/json',
          },
        },
      )
      .then(response => {
        console.log('response-=-=-=-=-=-user details', response.data);
        // saveTokenGoogle();
      })
      .catch(error => {
        console.log('error', error);
        Toast.showWithGravity(
          error.response.data.errors[0].message,
          Toast.LONG,
          Toast.TOP,
        );
      });
  };
  const saveTokenGoogle = () => {
    var details = {
      grant_type: 'custom',
      scope: '',
      client_id: 'mobile_android',
      client_secret: 'secret',
      provider: 'GOOGLE',
      username: userGoogleInfo.user.email,
      authToken: userEmailToken.accessToken,
    };
    console.log('detailsdetailsdetails', details);
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    fetch(`https://apisap.fabindiahome.com/authorizationserver/oauth/token`, {
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
          getCartID();
          getWishID();
        }
      });
  };
  // useEffect(() => {
  //   userDetails();
  // }, []);
  return (
    <View
      style={{
        width: '100%',
        // backgroundColor: 'rgba(0,0,0,0.3)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '90%',
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 15, fontWeight: Fonts.Assistant300}}>
            Mobile Number is mandatory for Registration
          </Text>
          <TouchableOpacity onPress={() => setNumberRequire(false)}>
            <Entypo
              name="circle-with-cross"
              color={Colors.primarycolor}
              size={20}
            />
          </TouchableOpacity>
        </View>
        {generate ? (
          <>
            <View style={{marginVertical: 10}}>
              <Text style={{textAlign: 'center', color: '#222'}}>
                Verify with OTP Send to
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
          </>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              alignItems: 'center',
              paddingHorizontal: 12,
              borderBottomColor: '#EDEDED',
            }}>
            <CountryPicker
              disable={false}
              animationType={'slide'}
              containerStyle={{width: 75, height: 40, justifyContent: 'center'}}
              pickerTitleStyle={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignSelf: 'center',
                fontWeight: 'bold',
                flex: 1,
                fontSize: 16,
                color: '#000',
              }}
              selectedCountryTextStyle={{
                paddingLeft: 5,
                color: '#000',
                textAlign: 'right',
              }}
              countryNameTextStyle={{
                paddingLeft: 10,
                color: '#000',
                textAlign: 'right',
              }}
              pickerTitle={'Country Picker'}
              searchBarPlaceHolder={'Search......'}
              hideCountryFlag={false}
              hideCountryCode={false}
              searchBarStyle={{
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
              }}
              selectedValue={_selectedValue}
              countryCode={mobilePrefix}
            />
            <View style={{flex: 1, paddingHorizontal: 15}}>
              <TextInput
                activeOutlineColor="white"
                activeUnderlineColor="white"
                underlineColor="white"
                style={{
                  height: 40,
                  letterSpacing: 2,
                  borderBottomColor: 'white',
                  marginVertical: Platform.OS === 'android' ? 5 : 10,
                  fontSize: 18,
                  color: 'black',
                  backgroundColor: 'white',
                }}
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
              marginTop: 15,
              backgroundColor:
                phoneNumber.length == 10 ? Colors.primarycolor : '#BDBDBD',
            }}
          />
        )}
      </View>
    </View>
  );
}
