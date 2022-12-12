import {View, Text} from 'react-native';
import React from 'react';
import CommonOtp from '../../../../Common/CommonOtp';
import {postData} from '../../Common/Helper';

export default function ChangeMobileNumber(props) {
  const {mobilePrefix, phoneNumber} = props;
  const [otp, setOtp] = React.useState('');
  const handleOTP = async () => {
    const params = {
      isLogin: false,
      isSignUp: false,
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: phoneNumber,
    };
    // let res = await postData(
    //   'fabindiab2c/otp/generate?lang=en&curr=INR',
    //   params,
    // );

    props.navigation.navigate('MyProfile', {isCheck: true});
  };
  return (
    <CommonOtp
      {...props}
      setOtp={setOtp}
      otp={otp}
      handleOTP={handleOTP}
      disable={otp.length != 4}
      handleResend={() => {
        Toast.showWithGravity('otp sent !', Toast.LONG, Toast.TOP);
      }}
      btntext="Confirm"
    />
  );
}
