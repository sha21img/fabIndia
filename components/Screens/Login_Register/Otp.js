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

export default function Otp() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  heading: {
    marginVertical: 20,
    fontSize: 18,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
  },
  readText: {
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    color: '#903233',
    paddingVertical: 10,
    textAlign: 'center',
  },
  btnBox: {
    padding: 15,
    backgroundColor: '#FDFDFD',
    elevation: 5,
  },
  OtpContainer: {
    width: '100%',
    height: 60,
    paddingHorizontal: 15,
    marginTop: 25,
  },
  otp: {
    width: 65,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#EDEDED',
    color: Colors.textcolor,
    fontSize: 18,
    fontFamily: Fonts.Assistant700,
  },
});
