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
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {TextInput} from 'react-native-paper';
import CountryPicker from 'rn-country-picker';
import {Colors} from '../../../assets/Colors';
import CheckBox from 'react-native-check-box';
import InputText from '../../Common/InputText';
import CommonButton from '../../Common/CommonButton';
import Fonts from '../../../assets/fonts';
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
  const [text, setText] = React.useState('');
  const [mobilePrefix, setMobilePrefix] = useState('60');
  const [isFocus, setIsFocus] = useState(false);
  const [State, setState] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const googleIcon = {
    uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
  };
  const facebookIcon = {
    uri: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png',
  };
  const _selectedValue = index => {
    setMobilePrefix(index);
  };
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.bodyContainer}>
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
                value={text}
                onChangeText={text => setText(text)}
              />
            ))}
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
            <View>
              <InputText
                underlineColor="#EDEDED"
                activeUnderlineColor=" #979797"
                customStyle={Styles.textinput}
                label="Email address"
                value={text}
                onChangeText={text => setText(text)}
              />
              <InputText
                underlineColor="#EDEDED"
                activeUnderlineColor=" #979797"
                customStyle={Styles.textinput}
                label="New password"
                value={text}
                onChangeText={text => setText(text)}
              />
              <InputText
                underlineColor="#EDEDED"
                activeUnderlineColor=" #979797"
                customStyle={Styles.textinput}
                label="Confirm password"
                value={text}
                onChangeText={text => setText(text)}
              />
            </View>
            <View style={Styles.defaultaddressbox}>
              <CheckBox
                checkBoxColor={Colors.primarycolor}
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
                isChecked={isChecked}
              />
              <Text style={{paddingHorizontal: 7}}>
                Sign up for FabIndia newsletters
              </Text>
            </View>
            <View style={Styles.defaultaddressbox}>
              <CheckBox
                checkBoxColor={Colors.primarycolor}
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
                isChecked={isChecked}
              />
              <Text style={{paddingHorizontal: 7}}>
                By registering you agree to T&C and Privacy Policy
              </Text>
            </View>
            <View style={Styles.horizontalContainer}>
              <View style={Styles.horizontalLine} />
              <View>
                <Text style={Styles.orText}>Or</Text>
              </View>
              <View style={Styles.horizontalLine} />
            </View>
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
            backgroundColor="#BDBDBD"
            txt="Register"
            customViewStyle={{
              backgroundColor: Colors.primarycolor,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flexGrow: 1,
    paddingBottom: 20,
    marginHorizontal: 15,
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
