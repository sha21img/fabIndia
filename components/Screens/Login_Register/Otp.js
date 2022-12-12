import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CommonButton from '../../Common/CommonButton';
import {Colors} from '../../../assets/Colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Fonts from '../../../assets/fonts';
import CommonOtp from '../../Common/CommonOtp';
import Toast from 'react-native-simple-toast';

import {getCartID, UnAuthPostData} from '../../Common/Helper';

export default function Otp(props) {
  const {transactionId, mobilePrefix, phoneNumber} = props;
  const [otp, setOtp] = React.useState('');
  const handleOTP = async () => {
    const params = {
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: phoneNumber,
      otp: otp,
      transactionId: transactionId,
    };
    // let res = await UnAuthPostData(
    //   'fabindiab2c/otp/validate?lang=en&curr=INR',
    //   params,
    // );
    // getCartID();

    props.navigation.navigate('MyAccounts');
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
        handleResend={() => {
          Toast.showWithGravity('otp sent !', Toast.LONG, Toast.TOP);
        }}
      />
    </>
  );
}
