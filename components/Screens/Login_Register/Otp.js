import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// import OtpInputs from 'react-native-otp-inputs';

export default function Otp() {
  const handleOtpInputs = e => {
    console.log(e);
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            Please enter 4 digit code sent to your registered mobile number
          </Text>
        </View>
        <View>
          {/* <View style={{paddingHorizontal: '10%', marginTop: 100}}>
            <OtpInputs
              inputStyles={{
                margin: 5,
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              numberOfInputs={4}
              handleChange={e => handleOtpInputs(e)}
            />
          </View> */}
          <TouchableOpacity style={{}} onPress={() => focusOTP()}>
            <Text
              style={{
                color: '#903233',
                marginTop: 20,
                textAlign: 'center',
              }}>
              Resend code
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{marginTop: 370}}>
        <View style={{paddingBottom: 10}}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => updateProfileHandler()}>
            <Text
              style={{
                color: 'white',
              }}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    padding: 15,
  },

  confirmButton: {
    width: '90%',
    height: 40,
    backgroundColor: '#903233',
    marginHorizontal: '5%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
