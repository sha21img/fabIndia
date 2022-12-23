import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, {useEffect, useState} from 'react';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../../assets/Colors';
import InputText from '../../../Common/InputText';
import CommonButton from '../../../Common/CommonButton';
import {logout, patchComponentData} from '../../../Common/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import CountryPicker from 'rn-country-picker';
import Feather from 'react-native-vector-icons/Feather';
import {UnAuthPostData, postData} from '../../../Common/Helper';
import {useDispatch} from 'react-redux';
const MyProfile = props => {
  const dispatch = useDispatch();
  const allProps = props.route.params;
  console.log('all props', allProps);
  const isCheck = props.route.params?.isCheck ?? false;
  const [generate, setgenerate] = useState(false);
  const [mobilePrefix, setMobilePrefix] = useState('91');
  const [gender, SetGender] = useState(allProps.profiledata.gender.code);
  const [transactionId, settransactionId] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [DOB, setDOB] = useState('');
  const [Otp, setOtp] = useState('');
  const [editUser, setEditUser] = useState({
    first: allProps.profiledata.firstName,
    last: allProps.profiledata.lastName,
    mobile: allProps.profiledata.contactNumber,
    email: allProps.profiledata.uid,
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
      country: {isocode: allProps.profiledata.country.isocode},
      dateOfBirth: DOB,
      firstName: editUser.first,
      gender: {code: gender},
      lastName: editUser.last,
      transactionId: transactionId ? transactionId : '',
      uid: editUser.email,
    };
    const response = await axios
      .patch(
        'https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current?lang=en&curr=INR',
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
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  console.log('user', editUser);
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
    console.log('yes');
    setDatePickerVisibility(true);
  };
  const handleConfirm = date => {
    let Newdate = new Date(date);
    console.warn('A date has been picked: ', date);
    setDOB(
      `${
        `${Newdate.getDate()}`.length == 1
          ? `0${Newdate.getDate()}`
          : Newdate.getDate()
      }/${
        `${Newdate.getMonth()}`.length == 1
          ? `0${Newdate.getMonth()}`
          : Newdate.getMonth()
      }/${Newdate.getFullYear()}`,
    );
    hideDatePicker();
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://www.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-600w-1194497251.jpg',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.primarycolor,
                  fontFamily: Fonts.Assistant400,
                }}>
                Edit
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: 20}}>
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.primarycolor,
                  fontFamily: Fonts.Assistant400,
                }}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={styles.fields}
          showsVerticalScrollIndicato={false}>
          <InputText
            customStyle={{
              borderRadius: 1,
              fontSize: 14,
              marginTop: 5,
              backgroundColor: '#FFFFFF',
            }}
            label="First Name"
            value={editUser.first}
            onChangeText={text => setEditUser({...editUser, first: text})}
          />
          <InputText
            customStyle={{
              borderRadius: 1,
              fontSize: 14,
              marginTop: 5,
              backgroundColor: '#FFFFFF',
            }}
            label="Last Name"
            value={editUser.last}
            onChangeText={text => setEditUser({...editUser, last: text})}
          />

          {generate ? (
            <View style={{marginTop: 15}}>
              <Text style={{textAlign: 'center', color: '#222'}}>
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
              <View style={{flex: 1, paddingHorizontal: 15}}>
                <TextInput
                  activeOutlineColor="white"
                  activeUnderlineColor="white"
                  underlineColor="white"
                  style={styles.textinput1}
                  value={editUser.mobile}
                  placeholder="phone number"
                  onChangeText={value =>
                    value.length <= 10
                      ? setEditUser({...editUser, mobile: value})
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
                backgroundColor:
                  editUser.mobile.length == 10
                    ? Colors.primarycolor
                    : '#BDBDBD',
              }}
            />
          )}
          <InputText
            customStyle={{
              borderRadius: 1,
              fontSize: 14,
              backgroundColor: '#FFFFFF',
            }}
            label="Email address"
            value={editUser.email}
            onChangeText={text => setEditUser({...editUser, email: text})}
          />

          <View style={styles.chooseContainer}>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                // activeOpacity={1}
                onPress={() => {
                  if (gender == 'MALE') {
                    SetGender('');
                  } else {
                    SetGender('MALE');
                  }
                }}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: '#d3d6db',
                  backgroundColor:
                    gender == 'MALE' ? Colors.primarycolor : 'white',
                }}></TouchableOpacity>
              <Text style={{marginLeft: 10}}>Male</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (gender == 'FEMALE') {
                    SetGender('');
                  } else {
                    SetGender('FEMALE');
                  }
                }}
                activeOpacity={1}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: '#d3d6db',
                  backgroundColor:
                    gender == 'FEMALE' ? Colors.primarycolor : 'white',
                }}></TouchableOpacity>
              <Text style={{marginLeft: 10}}>Female</Text>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 10,
              borderBottomWidth: 1,
            }}>
            <Text style={{fontsize: 12}}>Date of birth</Text>
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
              ]}>
              <Text
                style={{
                  fontSize: 18,
                }}>
                {!!DOB ? DOB : 'dd-mm-yyyy'}
              </Text>
              <Feather
                name="calendar"
                color={Colors.primarycolor}
                size={20}
                onPress={showDatePicker}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{paddingVertical: 10}}
            onPress={() => {
              props.navigation.navigate('ChangePassword');
            }}>
            <Text
              style={{
                color: '#903233',
                fontFamily: Fonts.Assistant400,
                fontSize: 14,
              }}>
              Change password
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>

      <View
        style={{
          padding: 15,
          backgroundColor: '#FDFDFD',
          elevation: 5,
        }}>
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
    // justifyContent: 'space-between',
    backgroundColor: '#ffffff',
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
  fields: {
    paddingHorizontal: 15,
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
    paddingVertical: 5,
    borderBottomColor: '#EDEDED',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
});
