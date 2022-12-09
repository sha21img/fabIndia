import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CommonButton from '../CommonButton';
import {Styles} from './style';

export default function CommonOtp({
  btntext = '',
  setOtp = null,
  otp = '',
  handleOTP = null,
  disable,
}) {
  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        <Text style={Styles.heading}>
          Please enter 4 digit code sent to your registered mobile number
        </Text>
        <View>
          <OTPInputView
            style={Styles.OtpContainer}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={Styles.otp}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
              setOtp(code);
            }}
          />
          <TouchableOpacity>
            <Text style={Styles.readText}>Resend code</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={Styles.btnBox}>
        <CommonButton
          disable={disable}
          handleClick={handleOTP}
          backgroundColor="#BDBDBD"
          txt={btntext}
          customViewStyle={{
            backgroundColor: disable ? '#BDBDBD' : Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
}
