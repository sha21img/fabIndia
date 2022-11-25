import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';
import {Styles} from './styles';
import CommonButton from '../../../../Common/CommonButton';

export default function PersonalDetail() {
  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        <Text style={Styles.heading}>
          How can I update my personal details?
        </Text>
        <View style={{marginTop: 15}}>
          <Text style={Styles.toptext}>
            For updating your personal details like your email address or
            address :
          </Text>
          <Text style={Styles.toptext}>1. Go to 'My Account'</Text>
          <Text style={Styles.toptext}>2. Click on your profile details</Text>
          <Text style={Styles.toptext}>3. Update your personal details</Text>
        </View>
      </ScrollView>
      <View
        style={{
          padding: 12,
          backgroundColor: '#FDFDFD',
          elevation: 5,
        }}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Call us"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
}
