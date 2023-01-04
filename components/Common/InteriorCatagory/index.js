import {
  View,
  Text,
  Image,
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';
import InputText from '../InputText';
import {TextInput} from 'react-native-paper';
import CountryPicker from 'rn-country-picker';
import CommonButton from '../CommonButton';
import Toast from 'react-native-simple-toast';
import {UnAuthPostData, postData, AuthBaseUrl2} from '../Helper';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const dimension = Dimensions.get('window');
const InteriorCatagory = ({buttonText}) => {
  const [name, setName] = useState(null);
  const [generate, setgenerate] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Otp, setOtp] = useState('');
  const [mobilePrefix, setMobilePrefix] = useState('91');
  const [email, setEmail] = useState(null);
  const [city, setCity] = useState(null);
  const [transactionId, settransactionId] = useState('');
  const [pincode, setPincode] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const _selectedValue = index => {
    setMobilePrefix(index);
  };
  const GenerateOtp = async () => {
    let params = {
      isLogin: false,
      isSignUp: false,
      mobileDailCode: `+${mobilePrefix}`,
      mobileNumber: phoneNumber,
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
      mobileNumber: phoneNumber,
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
  const HandleRegister = async () => {
    console.log('hihihi');
    let params = {
      city: city,
      email: email,
      fullName: name,
      mobileDailCode: `+${mobilePrefix}`,
      mobile: phoneNumber,
      pinCode: pincode,
      transactionId: transactionId,
    };
    console.log(params, 'register all data==params');
    const res = await axios
      .post(
        'https://apisap.fabindiahome.com/occ/v2/fabindiab2c/ids/create?lang=en&curr=INR',
        params,
      )
      .then(res => {
        if (res?.errors) {
          Toast.showWithGravity(res.errors[0].message, Toast.LONG, Toast.TOP);
        } else {
          // props.navigation.navigate('RegisterSuccess');
          console.log('000000000000000000000000000000000000', res.data);
          setModalVisible(true)
        }
      });
  };
  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{margin: 20}}>
          <Image
            source={image.kidinterior1}
            style={{height: 261, width: '100%'}}
          />
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontFamily: Fonts.Assistant400,
                marginTop: 20,
              }}>
              What is Interior Design Solutions?
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 12, paddingRight: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontSize: 14}}>{'\u2B24'}</Text>
            <Text
              style={{
                color: '#4A4a4a',
                fontSize: 14,
                marginHorizontal: 10,
                marginBottom: 10,
              }}>
              Efficient space planning with layout options.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontSize: 14}}>{'\u2B24'}</Text>
            <Text
              style={{
                color: '#4A4a4a',
                fontSize: 14,
                marginHorizontal: 10,
                marginBottom: 10,
              }}>
              Engage in a discussion with our qualified interior designers at
              any experience centre.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontSize: 14}}>{'\u2B24'}</Text>
            <Text
              style={{
                color: '#4A4a4a',
                fontSize: 14,
                marginHorizontal: 10,
                marginBottom: 10,
              }}>
              Support in selection of products to suit your requirements.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontSize: 14}}>{'\u2B24'}</Text>
            <Text
              style={{
                color: '#4A4a4a',
                fontSize: 14,
                marginHorizontal: 10,
                marginBottom: 10,
              }}>
              Curtain and blinds customisation.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black', fontSize: 14}}>{'\u2B24'}</Text>
            <Text
              style={{
                color: '#4A4a4a',
                fontSize: 14,
                marginHorizontal: 10,
                marginBottom: 10,
              }}>
              Personalised hard and soft furnishing solutions.
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              elevation: 5,
              margin: 10,
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: Fonts.Assistant400,
                color: 'black',
              }}>
              The home of your dreams is a call away!
            </Text>
            <View>
              <InputText
                underlineColor="#EDEDED"
                activeUnderlineColor=" #979797"
                customStyle={{
                  borderRadius: 1,
                  fontSize: 14,
                  marginBottom: 20,
                  backgroundColor: '#FFFFFF',
                }}
                label="Full Name*"
                value={name}
                onChangeText={text => setName(text)}
              />
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
                      placeholder="Your Mobile Number"
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
                  disable={phoneNumber.length != 10}
                  handleClick={GenerateOtp}
                  txt="Generate OTP"
                  customViewStyle={{
                    backgroundColor:
                      phoneNumber.length == 10
                        ? Colors.primarycolor
                        : '#BDBDBD',
                  }}
                />
              )}
              <InputText
                underlineColor="#EDEDED"
                activeUnderlineColor=" #979797"
                customStyle={{
                  borderRadius: 1,
                  fontSize: 14,
                  marginBottom: 20,
                  backgroundColor: '#FFFFFF',
                }}
                label="Email id*"
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <InputText
                underlineColor="#EDEDED"
                activeUnderlineColor=" #979797"
                customStyle={{
                  borderRadius: 1,
                  fontSize: 14,
                  marginBottom: 20,
                  backgroundColor: '#FFFFFF',
                }}
                label="City of Residence*"
                value={city}
                onChangeText={text => setCity(text)}
              />
              <InputText
                underlineColor="#EDEDED"
                activeUnderlineColor=" #979797"
                customStyle={{
                  borderRadius: 1,
                  fontSize: 14,
                  marginBottom: 20,
                  backgroundColor: '#FFFFFF',
                }}
                label="Pincode*"
                value={pincode}
                onChangeText={text => setPincode(text)}
              />
              <View style={Styles.btncontainer}>
                <CommonButton
                  handleClick={HandleRegister}
                  backgroundColor="#BDBDBD"
                  txt="Register"
                  disable={
                    !(!!name && !!phoneNumber && !!email && !!city && !!pincode)
                  }
                  customViewStyle={{
                    backgroundColor: !(
                      !!name &&
                      !!phoneNumber &&
                      !!pincode &&
                      !!city &&
                      !!email
                    )
                      ? '#BDBDBD'
                      : Colors.primarycolor,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: 22,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              // alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              width: '90%',
              height: '40%',
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'flex-end'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <AntDesign
                name="closecircleo"
                color={Colors.primarycolor}
                size={30}
              />
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Ionicons
                name="checkmark-done-circle-sharp"
                color={'green'}
                size={80}
              />
              <Text
                style={{
                  marginBottom: 15,
                  textAlign: 'center',
                  color: 'black',
                  fontFamily: Fonts.Assistant400,
                }}>
                Thank you
              </Text>
            </View>
            <Text
              style={{
                marginBottom: 15,
                textAlign: 'center',
                color: 'black',
                fontFamily: Fonts.Assistant300,
              }}>
              We will reach out to you soon.
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                backgroundColor: Colors.primarycolor,
              }}
              onPress={() => setModalVisible(false)}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom:15
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
    // elevation: 5,
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

export default InteriorCatagory;
