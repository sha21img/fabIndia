import React, {useState} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {TextInput} from 'react-native-paper';
import CountryPicker from 'rn-country-picker';
import {Colors} from '../../../../../assets/Colors';
import CommonButton from '../../../../Common/CommonButton';
import InputText from '../../../../Common/InputText';
import CheckBox from 'react-native-check-box';

import Styles from './styles';
const faqs = [
  {
    id: '1',
    name: 'Address nickname',
  },
  {
    id: '2',
    name: 'first name',
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
const EditAddress = props => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [text, setText] = React.useState('');
  const [mobilePrefix, setMobilePrefix] = useState('60');
  const [isFocus, setIsFocus] = useState(false);
  const [State, setState] = useState('');
  const [isChecked, setIsChecked] = useState(false);

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
            <Text style={Styles.contacttxt}>Contact details</Text>

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
              <View>
                <Text style={Styles.addresstxt}>Address</Text>
              </View>
              <Dropdown
                style={Styles.dropdown}
                placeholderStyle={{fontSize: 14}}
                selectedTextStyle={{fontSize: 14}}
                inputSearchStyle={{height: 40, fontSize: 14}}
                iconStyle={{width: 20, height: 20}}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="label"
                placeholder={!isFocus ? 'Country' : '...'}
                searchPlaceholder="Search..."
                value={State}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setState(item.label);
                  setIsFocus(false);
                }}
              />
              <InputText
                underlineColor="#EDEDED"
                activeUnderlineColor=" #979797"
                customStyle={Styles.textinput}
                label="Pincode"
                value={text}
                onChangeText={text => setText(text)}
              />
              <InputText
                underlineColor="#EDEDED"
                activeUnderlineColor=" #979797"
                customStyle={Styles.textinput}
                label="Country"
                value={text}
                onChangeText={text => setText(text)}
              />
              <Dropdown
                style={Styles.dropdown}
                placeholderStyle={{fontSize: 14}}
                selectedTextStyle={{fontSize: 14}}
                inputSearchStyle={{height: 40, fontSize: 14}}
                iconStyle={{width: 20, height: 20}}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="label"
                placeholder={!isFocus ? 'City' : '...'}
                searchPlaceholder="Search..."
                value={State}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setState(item.label);
                  setIsFocus(false);
                }}
              />
              <Dropdown
                style={Styles.dropdown}
                placeholderStyle={{fontSize: 14}}
                selectedTextStyle={{fontSize: 14}}
                inputSearchStyle={{height: 40, fontSize: 14}}
                iconStyle={{width: 20, height: 20}}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="label"
                placeholder={!isFocus ? 'State' : '...'}
                searchPlaceholder="Search..."
                value={State}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setState(item.label);
                  setIsFocus(false);
                }}
              />

              <InputText
                underlineColor="#EDEDED"
                activeUnderlineColor=" #979797"
                customStyle={Styles.textinput}
                label="Address Line 1"
                value={text}
                onChangeText={text => setText(text)}
              />
              <InputText
                underlineColor="#EDEDED"
                activeUnderlineColor=" #979797"
                customStyle={Styles.textinput}
                label="Address Line 2 (optional)"
                value={text}
                onChangeText={text => setText(text)}
              />
              <View style={Styles.defaultaddressbox}>
                <CheckBox
                  checkBoxColor={Colors.primarycolor}
                  onClick={() => {
                    setIsChecked(!isChecked);
                  }}
                  isChecked={isChecked}
                />
                <Text style={{paddingHorizontal: 12}}>
                  Make as default address
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={Styles.btncontainer}>
          <CommonButton
            backgroundColor="#BDBDBD"
            txt="Save address"
            customViewStyle={{
              backgroundColor: Colors.primarycolor,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default EditAddress;
