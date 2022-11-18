import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../assets/Colors';
import CommonButton from '../../Common/CommonButton';
import Fonts from '../../../assets/fonts';
import CountryPicker from 'rn-country-picker';
import {TextInput} from 'react-native-paper';

export default function LoginMobile() {
  const [mobilePrefix, setMobilePrefix] = useState('60');
  const [phoneNumber, setPhoneNumber] = useState('');

  const _selectedValue = index => {
    setMobilePrefix(index);
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Log in with mobile number</Text>
        <View style={styles.pickerbox}>
          <CountryPicker
            disable={false}
            animationType={'slide'}
            containerStyle={styles.pickercontainer}
            pickerTitleStyle={styles.pickertitle}
            selectedCountryTextStyle={styles.selectedTextStyle}
            countryNameTextStyle={styles.selectnametxt}
            pickerTitle={'Country Picker'}
            searchBarPlaceHolder={'Search......'}
            hideCountryFlag={false}
            hideCountryCode={false}
            searchBarStyle={styles.searchbar}
            selectedValue={_selectedValue}
            countryCode={mobilePrefix}
          />
          <View style={{flex: 1, paddingHorizontal: 15}}>
            <TextInput
              activeOutlineColor="white"
              activeUnderlineColor="white"
              underlineColor="white"
              style={styles.textinput1}
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
    backgroundColor: 'white',
    flexGrow: 1,
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
  pickerbox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomColor: '#EDEDED',
  },
  textinput1: {
    letterSpacing: 2,
    borderBottomColor: 'white',
    fontSize: 18,
    color: 'black',
    height: 40,
    backgroundColor: 'white',
  },
  pickercontainer: {
    width: 75,
    height: 30,
    justifyContent: 'center',
  },
  pickertitle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  selectedTextStyle: {
    paddingLeft: 5,
    // paddingRight: 5,
    color: '#000',
    textAlign: 'right',
  },
  selectnametxt: {
    paddingLeft: 10,
    color: '#000',
    textAlign: 'right',
  },
  searchbar: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    // marginLeft: 8,
    // marginRight: 10,
  },
});
