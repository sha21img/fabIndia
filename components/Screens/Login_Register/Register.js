import React, {useState} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {TextInput} from 'react-native-paper';
import CountryPicker from 'rn-country-picker';
import {Colors} from '../../../assets/Colors';
import CheckBox from 'react-native-check-box';
import InputText from '../../Common/InputText';
import CommonButton from '../../Common/CommonButton';
import Fonts from '../../../assets/fonts';
import {UnAuthPostData, postData} from '../../Common/Helper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Feather from 'react-native-vector-icons/Feather';

const faqs = [
  {
    id: '2',
    name: 'First name',
  },
  {
    id: '3',
    name: 'Last name',
  },
];
const data = [
  {label: 'Andhra Pradesh'},
  {label: 'Arunachal Pradesh'},
  {label: 'Bihar'},
  {label: 'Chhattisgarh'},
  {label: 'Goa'},
  {label: 'Gujarat'},
  {label: 'Haryana'},
  {label: 'Himachal Pradesh'},
  {label: 'Jharkhand'},
  {label: 'Karnataka'},
  {label: 'Kerala'},
  {label: 'Madhya Pradesh'},
  {label: 'Maharashtra'},
  {label: 'Manipur'},
  {label: 'Meghalaya'},
  {label: 'Mizoram'},
  {label: 'Nagaland'},
  {label: 'Odisha'},
  {label: 'Punjab'},
  {label: 'Rajasthan'},
  {label: 'Tamil Nadu'},
  {label: 'Telangana'},
  {label: 'Tripura'},
  {label: 'Uttar Pradesh'},
  {label: 'Uttarakhand'},
  {label: 'West Bengal'},
];
const Register = props => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [text, setText] = React.useState({
    'First name': '',
    'Last name': '',
    email: '',
    newPass: '',
    confPass: '',
  });
  const [mobilePrefix, setMobilePrefix] = useState('60');
  const [gender, SetGender] = useState('');
  const [generate, setgenerate] = useState(false);
  const [transactionId, settransactionId] = useState('');
  const [Otp, setOtp] = useState('');
  const [isCheckedSignup, setIsCheckedSignup] = useState(false);
  const [isAgree, setisAgree] = useState(false);
  const [DOB, setDOB] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const googleIcon = {
    uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
  };
  const facebookIcon = {
    uri: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png',
  };
  const _selectedValue = index => {
    setMobilePrefix(index);
  };

  const HandleRegister = async () => {
    let params = {
      consents: '',
      contactNumberCode: `+${mobilePrefix}`,
      contactNumber: phoneNumber,
      countryIsoCode: '',
      dateOfBirth: DOB,
      firstName: text['First name'],
      gender: {code: gender},
      lastName: text['Last name'],
      password: text.newPass,
      titleCode: '',
      transactionId: transactionId,
      uid: text.email,
    };
    console.log(params);
    const res = await UnAuthPostData(
      'fabindiab2c/users?lang=en&curr=INR',
      params,
    );
    console.log(res);
    props.navigation.navigate('RegisterSuccess');
    if (res.status) {
      // settransactionId(res?.data?.transactionId);
      // setgenerate(true);
    }
  };
  const showDatePicker = () => {
    console.log('yes');
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
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
  const GenerateOtp = async () => {
    let params = {
      isLogin: false,
      isSignUp: true,
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: phoneNumber,
    };
    console.log(params);
    const response = await UnAuthPostData(
      'fabindiab2c/otp/generate?lang=en&curr=INR',
      params,
    );
    console.log('res for regitser', response);
    if (!!res) {
      settransactionId(res?.data?.transactionId);
      setgenerate(true);
    }
  };

  const VerifyOTP = async () => {
    let params = {
      otp: Otp,
      transactionId: transactionId,
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: phoneNumber,
    };
    console.log(params);
    const res = await UnAuthPostData(
      'fabindiab2c/otp/validate?lang=en&curr=INR',
      params,
    );
    console.log(res);
    if (!!res) {
      setgenerate(false);
    }
  };

  console.log('DOB', DOB);
  return (
    <>
      <ScrollView
        contentContainerStyle={Styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={Styles.secondDiv}>
          <Text style={Styles.contacttxt}>Welcome to FabIndia!</Text>
          {faqs.map((faq, index) => (
            <InputText
              underlineColor="#EDEDED"
              activeUnderlineColor=" #979797"
              customStyle={Styles.textinput}
              label={faq.name}
              value={text[faq.name]}
              onChangeText={text =>
                setText(prev => {
                  return {...prev, [faq.name]: text};
                })
              }
            />
          ))}
          {generate ? (
            <View style={{marginVertical: 10}}>
              <Text style={{textAlign: 'center', color: '#222'}}>
                Verify with OTP Send to
                {`${phoneNumber[0]}${phoneNumber[1]}******${phoneNumber[8]}${phoneNumber[9]}`}
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
              <Text
                style={{
                  color: Colors.primarycolor,
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                Resend OTP
              </Text>
            </View>
          ) : (
            <View style={Styles.pickerbox}>
              <CountryPicker
                disable={false}
                animationType={'slide'}
                containerStyle={Styles.pickercontainer}
                pickerTitleStyle={Styles.pickertitle}
                selectedCountryTextStyle={Styles.selectedTextStyle}
                countryNameTextStyle={Styles.selectnametxt}
                pickerTitle={'Country Picker'}
                searchBarPlaceHolder={'Search......'}
                hideCountryFlag={false}
                hideCountryCode={false}
                searchBarStyle={Styles.searchbar}
                selectedValue={_selectedValue}
                countryCode={mobilePrefix}
              />
              <View style={{flex: 1, paddingHorizontal: 15}}>
                <TextInput
                  activeOutlineColor="white"
                  activeUnderlineColor="white"
                  underlineColor="white"
                  style={Styles.textinput1}
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
          )}
          {generate ? (
            <CommonButton
              disable={phoneNumber.length != 10}
              handleClick={VerifyOTP}
              txt="Confirm OTP"
              customViewStyle={{
                backgroundColor:
                  phoneNumber.length == 10 ? Colors.primarycolor : '#BDBDBD',
                marginVertical: 10,
              }}
            />
          ) : (
            <CommonButton
              disable={phoneNumber.length != 10}
              handleClick={GenerateOtp}
              txt="Generate OTP"
              customViewStyle={{
                backgroundColor:
                  phoneNumber.length == 10 ? Colors.primarycolor : '#BDBDBD',
              }}
            />
          )}

          <View style={{marginTop: 15}}>
            <InputText
              underlineColor="#EDEDED"
              activeUnderlineColor=" #979797"
              customStyle={Styles.textinput}
              label="Email address"
              value={text.email}
              onChangeText={text => setText(prev => ({...prev, email: text}))}
            />
            <InputText
              underlineColor="#EDEDED"
              activeUnderlineColor=" #979797"
              customStyle={Styles.textinput}
              label="New password"
              value={text.newPass}
              onChangeText={text => setText(prev => ({...prev, newPass: text}))}
            />
            <InputText
              underlineColor="#EDEDED"
              activeUnderlineColor=" #979797"
              customStyle={Styles.textinput}
              label="Confirm password"
              value={text.confPass}
              onChangeText={text =>
                setText(prev => ({...prev, confPass: text}))
              }
            />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
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
                marginTop: 20,
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
          </View>
          <View style={[Styles.defaultaddressbox]}>
            <CheckBox
              style={{paddingVertical: 5}}
              checkBoxColor={Colors.primarycolor}
              onClick={() => {
                setIsCheckedSignup(!isCheckedSignup);
              }}
              isChecked={isCheckedSignup}
            />
            <Text style={{paddingHorizontal: 7}}>
              Sign up for FabIndia newsletters
            </Text>
          </View>
          <View style={Styles.defaultaddressbox}>
            <CheckBox
              style={{paddingVertical: 5}}
              checkBoxColor={Colors.primarycolor}
              onClick={() => {
                setisAgree(!isAgree);
              }}
              isChecked={isAgree}
            />
            <Text style={{paddingHorizontal: 7, width: '85%'}}>
              By registering you agree to
              <Text style={{color: Colors.primarycolor}}>T&C</Text> and
              <Text style={{color: Colors.primarycolor}}>Privacy Policy</Text>
            </Text>
          </View>
          <View style={Styles.horizontalContainer}>
            <View style={Styles.horizontalLine} />
            <View>
              <Text style={Styles.orText}>Or</Text>
            </View>
            <View style={Styles.horizontalLine} />
          </View>

          {/* <InputText
              underlineColor="#EDEDED"
              activeUnderlineColor=" #979797"
              customStyle={Styles.textinput}
              label="Date of birth"
              // value={text.newPass}
              // onChangeText={text => setText(prev => ({...prev, newPass: text}))}
            /> */}
          <View style={Styles.iconContainer}>
            <TouchableOpacity onPress={() => facebookLoginHandler()}>
              <Image source={facebookIcon} style={Styles.facebookIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => googleLoginHandler()}>
              <Image source={googleIcon} style={Styles.googleIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={Styles.btncontainer}>
        <CommonButton
          handleClick={HandleRegister}
          backgroundColor="#BDBDBD"
          txt="Register"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
      {/* </View> */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
    //
    // </KeyboardAvoidingView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  mainView: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondDiv: {
    flex: 1,
    paddingVertical: 20,
  },
  contacttxt: {
    fontSize: 18,
    color: Colors.textcolor,
    paddingHorizontal: 10,
    fontFamily: Fonts.Assistant600,
  },
  pickercontainer: {
    width: 75,
    height: 40,
    justifyContent: 'center',
  },
  pickerbox: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomColor: '#EDEDED',
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
  textinput: {
    borderRadius: 1,
    fontSize: 14,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
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
  addresstxt: {
    fontSize: 18,
    color: Colors.textcolor,
    marginTop: 10,
    fontFamily: Fonts.Assistant600,
    // paddingHorizontal: 10,
  },
  dropdown: {
    height: 50,
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  defaultaddressbox: {
    flexDirection: 'row',
    paddingVertical: 7,
    alignItems: 'center',
  },
  defaultaddresstxt: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  btnbox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    paddingVertical: 15,
    borderRadius: 30,
  },
  btncontainer: {
    padding: 12,
    backgroundColor: '#FDFDFD',
    elevation: 5,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orText: {
    width: 50,
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#BDBDBD',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookIcon: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 10,
  },
  googleIcon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
});

export default Register;
