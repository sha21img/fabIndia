import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/Colors';
import CommonButton from '../../Common/CommonButton';
import Fonts from '../../../assets/fonts';

export default function LoginMobile() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Log in with mobile number</Text>
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
  btnBox: {
    padding: 15,
    backgroundColor: '#FAFAFA',
    elevation: 5,
  },
});
