import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, { useEffect, useState } from 'react';
import Fonts from '../../../../assets/fonts';
import { Colors } from '../../../../assets/Colors';
import InputText from '../../../Common/InputText';
import CommonButton from '../../../Common/CommonButton';
import { BaseURL2, logout } from '../../../Common/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import CountryPicker from 'rn-country-picker';
import Feather from 'react-native-vector-icons/Feather';
import { UnAuthPostData, postData } from '../../../Common/Helper';
import { useDispatch } from 'react-redux';
import moment from 'moment';

const MyProfile = props => {
  const dispatch = useDispatch();
  const allProps = props.route.params;
  const isCheck = props.route.params?.isCheck ?? false;
  const [generate, setgenerate] = useState(false);
  const [mobilePrefix, setMobilePrefix] = useState('91');
  const [gender, SetGender] = useState(allProps.profiledata?.gender?.code);
  const [transactionId, settransactionId] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [DOB, setDOB] = useState(allProps.profiledata?.dateOfBirth || '');
  const [Otp, setOtp] = useState('');
  const [editUser, setEditUser] = useState({
    first: allProps?.profiledata?.firstName,
    last: allProps?.profiledata?.lastName,
    mobile: allProps?.profiledata?.contactNumber,
    email: allProps?.profiledata?.uid,
  });

  useEffect(() => {
    if (isCheck == true) {
      updateProfileHandler();
    }
  }, []);

  const checkUpdateProfile = () => {
    if (editUser.mobile != allProps.profiledata.contactNumber) {
      props.navigation.navigate('ChangeMobileNumber');
    } else {
      updateProfileHandler();
    }
  };

  const updateProfileHandler = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const body = {
      contactNumber: editUser.mobile,
      contactNumberCode: mobilePrefix,
      country: { isocode: allProps.profiledata?.defaultAddress?.country?.isocode },
      dateOfBirth: DOB,
      firstName: editUser.first,
      gender: { code: gender },
      lastName: editUser.last,
      transactionId: transactionId ? transactionId : '',
      uid: editUser.email,
    };
    console.log('body==>', JSON.stringify(body))
    const response = await axios
      .patch(
        `${BaseURL2}/users/current?lang=en&curr=INR`,
        body,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        if (res.status == 200) {
          console.log('this is a patch sata', res);
          Toast.showWithGravity(
            'Profile updated successfully',
            Toast.LONG,
            Toast.TOP,
          );
          props.navigation.goBack();
        }
      })
      .catch(errors => {
        console.log('errors', errors.response.data);
        Toast.show(errors.response.data.errors[0].message, Toast.LONG)
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  const _selectedValue = index => {
    setMobilePrefix(index);
  };

  const GenerateOtp = async () => {
    let params = {
      isLogin: false,
      isSignUp: true,
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: editUser.mobile,
    };
    console.log(params);
    await UnAuthPostData('otp/generate?lang=en&curr=INR', params).then(res => {
      console.log('res for regitser number sent', res);
      if (res.transactionId) {
        Toast.showWithGravity('OTP Sent !', Toast.LONG, Toast.TOP);
        settransactionId(res?.transactionId);
        setgenerate(true);
      } else {
        Toast.showWithGravity(res.errors[0].message, Toast.LONG, Toast.TOP);
      }
    });
  };

  const VerifyOTP = async () => {
    let params = {
      otp: Otp,
      transactionId: transactionId,
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: editUser.mobile,
    };
    console.log(params);
    const res = await UnAuthPostData(
      'otp/validate?lang=en&curr=INR',
      params,
    ).then(res => {
      if (res?.errors) {
        Toast.showWithGravity(res.errors[0].message, Toast.LONG, Toast.TOP);
      } else {
        Toast.showWithGravity('Done', Toast.LONG, Toast.TOP);
        setgenerate(false);
      }
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleConfirm = date => {
    // console.warn('A date has been picked: ', date);
    if (date)
      setDOB(moment(date).format('DD/MM/YYYY'));
    hideDatePicker();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicato={false}>
        <InputText
          customStyle={[styles.textInput, { marginTop: 0 }]}
          label="First Name"
          value={editUser.first}
          onChangeText={text => setEditUser({ ...editUser, first: text })}
        />

        <InputText
          customStyle={styles.textInput}
          label="Last Name"
          value={editUser.last}
          onChangeText={text => setEditUser({ ...editUser, last: text })}
        />

        {generate ? (
          <View style={{ marginTop: 20 }}>
            <Text style={{ textAlign: 'center', color: '#222' }}>
              Verify with OTP Send to
              {`${editUser.mobile[0]}${editUser.mobile[1]}******${editUser.mobile[8]}${editUser.mobile[9]}`}
            </Text>

            <TextInput
              value={Otp}
              activeOutlineColor="white"
              activeUnderlineColor="white"
              underlineColor="white"
              onChangeText={value =>
                value.length <= 4 ? setOtp(value) : false
              }
              multiline={true}
              keyboardType="numeric"
              style={{
                backgroundColor: '#fff',
                height: 50,
                textAlign: 'center',
                borderBottomColor: Colors.inactiveicon,
                borderBottomWidth: 1,
              }}
              placeholder="Enter 4-digit OTP"
            />
            <TouchableOpacity onPress={() => GenerateOtp()}>
              <Text
                style={{
                  color: Colors.primarycolor,
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
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
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
              <TextInput
                activeOutlineColor="white"
                activeUnderlineColor="white"
                underlineColor="white"
                style={styles.textinput1}
                value={editUser.mobile}
                placeholder="phone number"
                onChangeText={value =>
                  value.length <= 10
                    ? setEditUser({ ...editUser, mobile: value })
                    : false
                }
                placeholderTextColor="grey"
                keyboardType={'number-pad'}
                disableFullscreenUI={true}
              />
            </View>
          </View>
        )}
        {generate ? (
          <CommonButton
            disable={Otp.length != 4}
            handleClick={VerifyOTP}
            txt="Confirm OTP"
            customViewStyle={{
              backgroundColor:
                Otp.length == 4 ? Colors.primarycolor : '#BDBDBD',
              marginVertical: 10,
            }}
          />
        ) : (
          <CommonButton
            disable={editUser.mobile.length != 10}
            handleClick={GenerateOtp}
            txt="Generate OTP"
            customViewStyle={{
              marginVertical: 10,
              backgroundColor:
                editUser.mobile.length == 10
                  ? Colors.primarycolor
                  : '#BDBDBD',
            }}
          />
        )}
        <InputText
          customStyle={styles.textInput}
          label="Email address"
          value={editUser.email}
          onChangeText={text => setEditUser({ ...editUser, email: text })}
        />

        <View style={styles.chooseContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                if (gender == 'MALE') {
                  SetGender('');
                } else {
                  SetGender('MALE');
                }
              }}
              style={{
                height: 30, width: 30, borderRadius: 25, borderWidth: 2, borderColor: '#d3d6db',
                backgroundColor: gender == 'MALE' ? Colors.primarycolor : 'white'
              }}>
            </TouchableOpacity>
            <Text style={{ fontSize: 14, color: Colors.textcolor, marginLeft: 10 }}>Male</Text>
          </View>
          <View
            style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                if (gender == 'FEMALE') {
                  SetGender('');
                } else {
                  SetGender('FEMALE');
                }
              }}
              style={{
                height: 30, width: 30, borderRadius: 25, borderWidth: 2, borderColor: '#d3d6db',
                backgroundColor: gender == 'FEMALE' ? Colors.primarycolor : 'white',
              }}>
            </TouchableOpacity>
            <Text style={{ fontSize: 14, color: Colors.textcolor, marginLeft: 10 }}>Female</Text>
          </View>
        </View>

        <View style={{ paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: Colors.inactiveicon }}>
          <Text style={{ fontSize: 16, color: Colors.textcolor }}>Date of birth</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, color: Colors.textcolor }}>{!!DOB ? DOB : 'dd-mm-yyyy'}</Text>
            <Feather
              name="calendar"
              color={Colors.primarycolor}
              size={20}
              onPress={showDatePicker}
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{ alignItems: 'center', paddingVertical: 20 }}
          onPress={() => {
            props.navigation.navigate('ChangePassword');
          }}>
          <Text style={{ fontSize: 16, color: Colors.primarycolor, fontFamily: Fonts.Assistant400 }}>Change password</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={{ padding: 15, backgroundColor: '#FDFDFD', elevation: 5 }}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Update profile"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
          handleClick={checkUpdateProfile}
        />
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  profile: {
    alignItems: 'center',
    paddingTop: 50,
  },
  profileImage: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  textInput: {
    marginTop: 8,
    fontSize: 14,
    color: Colors.textcolor
  },
  updateButton: {
    paddingVertical: 15,
    backgroundColor: Colors.primarycolor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerbox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomColor: '#EDEDED',
    marginTop: 16
  },
  pickercontainer: {
    width: 75,
    height: 40,
    justifyContent: 'center',
  },
  pickertitle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    fontWeight: 'bold',
    flex: 1,
    // marginLeft: 10,
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
  },
  textinput1: {
    height: 40,
    letterSpacing: 2,
    borderBottomColor: 'white',
    marginVertical: Platform.OS === 'android' ? 5 : 10,
    fontSize: 18,
    color: 'black',
    backgroundColor: 'white',
  },
  chooseContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
});
