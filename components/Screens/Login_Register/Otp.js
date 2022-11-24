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

export default function Otp() {
  return (
    <>
      <CommonOtp btntext="Log in" />
      {/* <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>
          Please enter 4 digit code sent to your registered mobile number
        </Text>

        <View>
          <OTPInputView
            style={styles.OtpContainer}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.otp}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <TouchableOpacity>
            <Text style={styles.readText}>Resend code</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.btnBox}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Log in"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View> */}
    </>
  );
}
