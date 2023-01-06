import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  // useWindowDimensions,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import React, {useEffect, useState} from 'react';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../../assets/Colors';
import InputText from '../../../Common/InputText';
import CommonButton from '../../../Common/CommonButton';
import {BaseURL2, logout} from '../../../Common/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import CountryPicker from 'rn-country-picker';
import Feather from 'react-native-vector-icons/Feather';
import {UnAuthPostData, postData} from '../../../Common/Helper';
import {useDispatch} from 'react-redux';
import {MaskedTextInput} from 'react-native-mask-text';
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
  const [isVerifyOtp, setIsVerifyOtp] = useState(false);
  const [DOB, setDOB] = useState(allProps.profiledata?.dateOfBirth || '');
  const [allField, setAllField] = useState({
    fname: true,
    lname: true,
    phone_number: true,
    email: true,
    DOB: true,
  });
  const [Otp, setOtp] = useState('');
  const [date, setDate] = useState('');
  const [valid, setValid] = useState(false);

  const [editUser, setEditUser] = useState({
    first: allProps?.profiledata?.firstName,
    last: allProps?.profiledata?.lastName,
    mobile: allProps?.profiledata?.contactNumber,
    email: allProps?.profiledata?.uid,
  });
  const [open, setOpen] = useState(false);
  // const win = useWindowDimensions();
  const [maskedValue, setMaskedValue] = useState(
    moment(new Date()).format('DD-MM-YYYY'),
  );
  useEffect(() => {
    setMaskedValue(maskedValue);
    const regexddmmyyyy =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](18|19|20)\d\d$/;
    if (regexddmmyyyy.test(date)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [date]);
  console.log(
    'oiuytfdrtfyguioiuytrrty111111111111111111111111111111111',
    moment(new Date()).format('DD-MM-YYYY'),
  );
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
      country: {
        isocode: allProps.profiledata?.defaultAddress?.country?.isocode,
      },
      dateOfBirth: DOB,
      firstName: editUser.first,
      gender: {code: gender},
      lastName: editUser.last,
      transactionId: transactionId ? transactionId : '',
      uid: editUser.email,
    };
    console.log('body==>', JSON.stringify(body));
    const response = await axios
      .patch(`${BaseURL2}/users/current?lang=en&curr=INR`, body, {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        if (res?.status == 200) {
          Toast.showWithGravity(
            'Profile updated successfully',
            Toast.LONG,
            Toast.TOP,
          );
          props.navigation.goBack();
        }
      })
      .catch(errors => {
        Toast.show(errors?.response?.data?.errors[0]?.message, Toast.LONG);
        if (errors?.response?.status == 401) {
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
        setIsVerifyOtp(true);
        setAllField({...allField, phone_number: true});
      }
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleConfirm = date => {
    // console.warn('A date has been picked: ', date);
    if (date) {
      console.log(
        'moment(date).formatiuygfgchiokiogyutfghoiuygtf44444444444444444444444444444444',
        moment(date).format('DD/MM/YYYY'),
      );
      setDOB(moment(date).format('DD/MM/YYYY'));
      setMaskedValue(moment(date).format('DD/MM/YYYY'));
    }

    hideDatePicker();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const isEmailValid = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      setEditUser({...editUser, email: text});
      setAllField({...allField, email: false});

      return false;
    } else {
      setAllField({...allField, email: true});
      setEditUser({...editUser, email: text});
      console.log('Email is Correct');
    }
  };
  // const isEmailValid = text => {
  //   setEditUser({...editUser, email: text});
  //   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (reg.test(editUser.email) === true) {
  //     console.log('isisisivalid');
  //   } else {
  //     console.log('not valid');
  //   }
  // };
  console.log('allField', allField);
  console.log(
    ' allProps.profiledata.contactNumber == editUser.mobile',
    allProps.profiledata.contactNumber == editUser.mobile,
  );
  console.log('editUser.mobile', editUser.mobile.length);

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicato={false}>
        <InputText
          minLength={3}
          maxLength={40}
          customStyle={[styles.textInput, {marginTop: 0}]}
          label="First Name"
          value={editUser.first}
          onChangeText={text => {
            setEditUser({
              ...editUser,
              first: text.replace(
                /[`~0-9!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                '',
              ),
            });
            // if (regex.test(text)) {
            if (!!editUser.first && text.length >= 3 && text.length <= 40) {
              setAllField({...allField, fname: true});
              // setEditUser({...editUser, first: text});
            } else {
              // setEditUser({...editUser, first: text});
              setAllField({...allField, fname: false});
            }
          }}
        />

        <InputText
          customStyle={styles.textInput}
          label="Last Name"
          value={editUser.last}
          // maxLength={40}
          minLength={3}
          maxLength={40}
          onChangeText={text => {
            setEditUser({
              ...editUser,
              last: text.replace(
                /[`~0-9!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
                '',
              ),
            });
            if (!!editUser.last && text.length >= 3 && text.length <= 40) {
              setAllField({...allField, lname: true});
              // setEditUser({...editUser, last: text});
            } else {
              // setEditUser({...editUser, last: text});
              setAllField({...allField, lname: false});
            }
            // setEditUser({...editUser, last: text}})
          }}
        />

        {generate ? (
          <>
            <View style={{marginTop: 20}}>
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
          </>
        ) : (
          <>
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
                  // activeOutlineColor="white"
                  // activeUnderlineColor="white"
                  // underlineColor="white"
                  style={styles.textinput1}
                  value={editUser.mobile}
                  placeholder="Your Mobile Number"
                  maxLength={10}
                  onChangeText={value => {
                    setIsVerifyOtp(false);
                    console.log(';oiuytfdxcghjkl;', value);
                    if (
                      value.length == 10 &&
                      allProps.profiledata.contactNumber == value
                    ) {
                      console.log('ojihugyfttyguhijokpl[poihugfghjk');
                      setAllField({...allField, phone_number: true});
                      setEditUser({...editUser, mobile: value});
                    } else {
                      console.log('elelelelel[poihugfghjk');

                      setEditUser({...editUser, mobile: value});

                      setAllField({...allField, phone_number: false});
                    }
                  }}
                  placeholderTextColor="grey"
                  keyboardType={'number-pad'}
                  disableFullscreenUI={true}
                />
              </View>
            </View>
            {!isVerifyOtp && (
              <CommonButton
                disable={
                  editUser.mobile.length == 10 &&
                  editUser.mobile == allProps.profiledata.contactNumber
                    ? true
                    : false
                }
                handleClick={GenerateOtp}
                txt="Generate OTP"
                customViewStyle={{
                  marginVertical: 10,
                  backgroundColor:
                    editUser.mobile.length < 10
                      ? '#BDBDBD'
                      : editUser.mobile == allProps.profiledata.contactNumber
                      ? '#BDBDBD'
                      : Colors.primarycolor,
                }}
              />
            )}
          </>
        )}
        {/* {generate ? (
         
        ) : (
          
        )} */}
        <InputText
          customStyle={styles.textInput}
          label="Email address"
          value={editUser.email}
          onChangeText={text => isEmailValid(text)}
        />

        <View style={styles.chooseContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.9}
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
                borderRadius: 25,
                borderWidth: 2,
                borderColor: '#d3d6db',
                backgroundColor:
                  gender == 'MALE' ? Colors.primarycolor : 'white',
              }}></TouchableOpacity>
            <Text
              style={{fontSize: 14, color: Colors.textcolor, marginLeft: 10}}>
              Male
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                if (gender == 'FEMALE') {
                  SetGender('');
                } else {
                  SetGender('FEMALE');
                }
              }}
              style={{
                height: 30,
                width: 30,
                borderRadius: 25,
                borderWidth: 2,
                borderColor: '#d3d6db',
                backgroundColor:
                  gender == 'FEMALE' ? Colors.primarycolor : 'white',
              }}></TouchableOpacity>
            <Text
              style={{fontSize: 14, color: Colors.textcolor, marginLeft: 10}}>
              Female
            </Text>
          </View>
        </View>
        {/* 
        <View
          style={{
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: Colors.inactiveicon,
          }}>
          <Text style={{fontSize: 16, color: Colors.textcolor}}>
            Date of birth
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 14, color: Colors.textcolor}}>
              {!!DOB ? DOB : 'dd-mm-yyyy'}
            </Text>
            <Feather
              name="calendar"
              color={Colors.primarycolor}
              size={20}
              onPress={showDatePicker}
            />
          </View>
        </View> */}
        <Text style={{fontSize: 16, color: Colors.textcolor}}>
          Date of birth
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
          }}>
          <MaskedTextInput
            mask="99-99-9999"
            value={maskedValue}
            style={{fontSize: 16}}
            onChangeText={(text, rawText) => {
              setMaskedValue(text);
              setDate(text);
              console.log('1234567890', text);
              if (text) {
                console.log('giigigigigigiigigi');
                setAllField({...allField, DOB: true});
              } else {
                console.log('kjhugytfdrtfyguhijokpelelelele');
                setAllField({...allField, DOB: false});
              }
            }}
            keyboardType="numeric"
          />
          <Feather
            name="calendar"
            color={Colors.primarycolor}
            size={20}
            onPress={showDatePicker}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{alignItems: 'center', paddingVertical: 20}}
          onPress={() => {
            props.navigation.navigate('ChangePassword');
          }}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.primarycolor,
              fontFamily: Fonts.Assistant400,
            }}>
            Change password
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={{padding: 15, backgroundColor: '#FDFDFD', elevation: 5}}>
        <CommonButton
          disable={
            allField.fname &&
            allField.lname &&
            allField.email &&
            allField.phone_number &&
            allField.DOB &&
            valid
              ? false
              : true
          }
          backgroundColor="#BDBDBD"
          txt="Update profile"
          customViewStyle={{
            backgroundColor:
              allField.fname &&
              allField.lname &&
              allField.email &&
              allField.phone_number &&
              allField.DOB &&
              valid
                ? Colors.primarycolor
                : Colors.textcolor,
          }}
          handleClick={updateProfileHandler}
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
    color: Colors.textcolor,
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
    marginTop: 16,
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
    borderBottomColor: 'white',
    marginVertical: Platform.OS === 'android' ? 5 : 10,
    fontSize: 16,
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
