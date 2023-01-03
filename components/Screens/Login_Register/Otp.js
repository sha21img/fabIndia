import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonButton from '../../Common/CommonButton';
import {Colors} from '../../../assets/Colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Fonts from '../../../assets/fonts';
import CommonOtp from '../../Common/CommonOtp';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AuthBaseUrl2,
  BaseURL2,
  getCartID,
  getWishID,
  postDataAuth,
  UnAuthPostData,
} from '../../Common/Helper';
import axios from 'axios';
import {CommonActions} from '@react-navigation/native';

export default function Otp(props) {
  const {transactionId, mobilePrefix, phoneNumber} = props.route.params;
  const [otp, setOtp] = React.useState('');

  const handleOTP = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    const data = {
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: phoneNumber,
      otp: otp,
      transactionId: transactionId,
    };
    let res = await axios
      .post(
        `${BaseURL2}/otp/validate?lang=en&curr=INR`,
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
        console.log('error', error?.response?.status);
        if (error?.response?.status == 400) {
          Toast.showWithGravity('Enter valied detail', Toast.LONG, Toast.TOP);
        }
      });
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
          // props.navigation.navigate('MyAccount', {
          //   screen: 'MyAccounts',
          // });
          props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'MyAccounts'}],
            }),
          );
          getCartID();
          getWishID();
        }
      });
  };
  const handleResend = async () => {
    let param = {
      isLogin: true,
      isSignUp: false,
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: phoneNumber,
    };
    let res = await UnAuthPostData(`otp/generate?lang=en&curr=INR`, param);
    Toast.showWithGravity('otp sent !', Toast.LONG, Toast.TOP);
  };
  return (
    <>
      <CommonOtp
        btntext="Log in"
        {...props}
        setOtp={setOtp}
        otp={otp}
        handleOTP={handleOTP}
        disable={otp.length != 4}
        handleResend={handleResend}
      />
    </>
  );
}
