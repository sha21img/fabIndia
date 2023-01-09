import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {TextInput} from 'react-native-paper';
import CountryPicker from 'rn-country-picker';
import {Colors} from '../../../../../assets/Colors';
import CommonButton from '../../../../Common/CommonButton';
import InputText from '../../../../Common/InputText';
import CheckBox from 'react-native-check-box';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './styles';
import Fonts from '../../../../../assets/fonts';
import {BaseURL2, logout} from '../../../../Common/Helper';
import {useDispatch} from 'react-redux';

const EditAddress = props => {
  const dispatch = useDispatch();
  let editflag = props?.route?.params?.editData;
  let checkFrom = props?.route?.params?.from;
  const [phoneNumber, setPhoneNumber] = useState(
    !!editflag ? editflag?.phone : '',
  );
  const [nickName, SetNickName] = useState(
    !!editflag ? editflag?.nickName : null,
  );
  const [firstname, SetFirstname] = useState(
    !!editflag ? editflag?.firstName : null,
  );
  const [email, SetEmail] = useState(!!editflag ? editflag?.email : null);

  const [lastname, SetLastname] = useState(
    !!editflag ? editflag?.lastName : null,
  );

  const [pincode, SetPinCode] = useState(
    !!editflag ? editflag?.postalCode : null,
  );
  const [mobilePrefix, setMobilePrefix] = useState('91');
  const [isFocus, setIsFocus] = useState(false);
  const [State, setState] = useState(null);
  const [region, setRegion] = useState(null);

  const [isChecked, setIsChecked] = useState(
    !!editflag ? editflag?.defaultAddress : false,
  );
  const [validation, setvalidation] = useState({
    firstname: '',
    pincode: '',
    phoneNumber: '',
    addressfirst: '',
    email: '',
  });
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [error, setError] = useState(false);
  const [addressfirst, setaddressfirst] = useState(
    !!editflag ? editflag?.line1 : null,
  );
  const [addresssecond, setaddresssecond] = useState(
    !!editflag ? editflag?.line2 : null,
  );

  useEffect(() => {
    getCountrydata();
  }, []);

  const getCountrydata = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios
      .get(
        `${BaseURL2}/countries?fields=DEFAULT&type=SHIPPING`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        const newArrayOfObj = response.data?.countries.map(
          ({name: label, ...rest}) => ({
            label,
            ...rest,
          }),
        );
        setCountryData(newArrayOfObj);
        if (!!editflag) {
          checkpincode(editflag.postalCode, newArrayOfObj);
        }
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  const _selectedValue = index => {
    console.log(
      '_selectedValue_selectedValue_selectedValue_selectedValue_selectedValue',
      index,
    );
    setMobilePrefix(index);
  };

  const SubmitAddress = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    console.log('getToken', getToken);
    const body = {
      cellphone: phoneNumber,
      city: {
        isocode: 'CN-11-1, CN-11-2, CN-11-3',
        name: city,
      },
      cityDistrict: {
        isocode: 'string',
        name: city,
      },
      companyName: 'string',
      contactNumberCode: mobilePrefix,
      country: {
        isocode: country.isocode,
        name: country.label,
      },
      defaultAddress: true,
      district: city,
      email: email,
      firstName: firstname,
      formattedAddress: '',
      id: '',
      lastName: lastname,
      line1: addressfirst,
      line2: addresssecond,
      nickName: nickName,
      phone: phoneNumber,
      postalCode: pincode,
      region: region,
      shippingAddress: true,
      title: '',
      titleCode: '',
      town: city,
      visibleInAddressBook: true,
    };
    console.log('body', body);
    if (!!editflag) {
      const response = await axios
        .patch(`${BaseURL2}/users/current/addresses/${editflag.id}`, body, {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        })
        .then(response => {
          if (checkFrom == 'Order') {
            props.navigation.navigate('CartPage', {
              currPosition: 1,
            });
          } else {
            props.navigation.goBack();
          }
        })
        .catch(errors => {
          console.log('error', errors);
          if (errors.response.status == 401) {
            logout(dispatch);
          }
        });
    } else {
      const response = await axios
        .post(`${BaseURL2}/users/current/addresses`, body, {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        })
        .then(response => {
          if (response.data) {
            if (checkFrom == 'Order') {
              props.navigation.navigate('CartPage', {
                currPosition: 1,
              });
            } else {
              props.navigation.goBack();
            }
          }
        })
        .catch(errors => {
          console.log('aa', errors.response.data);
          if (errors.response.status == 401) {
            logout(dispatch);
          }
        });
    }
  };
  const finalCount = async (response, newArrayOfObj) => {
    if (Object.keys(response.data).length) {
      let finalcountryData = !!editflag ? newArrayOfObj : countryData;
      let filter = finalcountryData.filter(el => {
        return el.isocode == response.data?.region?.countryIso;
      });
      const state = await getStates(filter[0].isocode);
      setCountry(filter[0]);
      setError(false);

      setCity(response.data.city);
      setRegion(response.data.region);
      setState(response.data.region.name);
    } else {
      setCity(null);
      setRegion(null);
      setState(null);
      setCountry(null);
      setError(true);
    }
  };
  const checkpincode = async (data, newArrayOfObj) => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    SetPinCode(data);
    const response = await axios
      .get(
        `${BaseURL2}/pincodeService/pincodeDetails?pincode=${data}&lang=en&curr=INR`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        finalCount(response, newArrayOfObj);
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  const getStates = async code => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios
      .get(
        `${BaseURL2}/countries/${code}/regions?fields=DEFAULT`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        const newArrayOfObj = response.data?.regions.map(
          ({name: label, ...rest}) => ({
            label,
            ...rest,
          }),
        );
        setStateData(newArrayOfObj);
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.bodyContainer}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Styles.mainView}
          showsVerticalScrollIndicator={false}>
          <View style={Styles.secondDiv}>
            <Text style={Styles.contacttxt}>Contact details</Text>

            {/* {faqs.map((faq, index) => ( */}
            <InputText
              customStyle={Styles.textinput}
              label="Address nickname"
              value={nickName}
              onChangeText={text => SetNickName(text)}
            />
            <InputText
              customStyle={Styles.textinput}
              label="First name*"
              value={firstname}
              onChangeText={text => SetFirstname(text)}
              onBlur={() => {
                !!firstname
                  ? setvalidation(prev => ({...prev, firstname: ''}))
                  : setvalidation(prev => ({
                      ...prev,
                      firstname: 'This field is required',
                    }));
              }}
            />
            <Text style={{color: 'red'}}>{validation.firstname}</Text>
            <InputText
              customStyle={Styles.textinput}
              label="Last name"
              value={lastname}
              onChangeText={text => SetLastname(text)}
            />
            <InputText
              customStyle={Styles.textinput}
              label="Email"
              value={email}
              onChangeText={text => SetEmail(text)}
              onBlur={() => {
                !!email
                  ? setvalidation(prev => ({...prev, email: ''}))
                  : setvalidation(prev => ({
                      ...prev,
                      email: 'This field is required',
                    }));
              }}
            />
            <Text style={{color: 'red'}}>{validation.email}</Text>
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
                  placeholder="Your Mobile Number*"
                  onChangeText={value =>
                    value.length <= 10 ? setPhoneNumber(value) : false
                  }
                  placeholderTextColor="grey"
                  keyboardType={'number-pad'}
                  disableFullscreenUI={true}
                  onBlur={() => {
                    !!phoneNumber
                      ? setvalidation(prev => ({...prev, phoneNumber: ''}))
                      : setvalidation(prev => ({
                          ...prev,
                          phoneNumber: 'This field is required',
                        }));
                  }}
                />
              </View>
            </View>
            <Text style={{color: 'red'}}>{validation.phoneNumber}</Text>

            <View>
              <View>
                <Text style={Styles.addresstxt}>Address</Text>
              </View>
              <InputText
                customStyle={Styles.textinput}
                label="Pincode*"
                value={pincode}
                onChangeText={text =>
                  text.length < 7
                    ? text.length == 6
                      ? checkpincode(text)
                      : SetPinCode(text)
                    : null
                }
                onBlur={() => {
                  !!pincode
                    ? setvalidation(prev => ({...prev, pincode: ''}))
                    : setvalidation(prev => ({
                        ...prev,
                        pincode: 'This field is required',
                      }));
                }}
              />
              <Text style={{color: 'red'}}>{validation.pincode}</Text>
              {error ? (
                <Text
                  style={{
                    color: 'red',
                    fontSize: 14,
                    fontFamily: Fonts.Assistant500,
                  }}>
                  pincode not found
                </Text>
              ) : null}
              <Dropdown
                style={Styles.dropdown}
                placeholderStyle={{fontSize: 14}}
                selectedTextStyle={{
                  fontSize: 14,
                  fontFamily: Fonts.Assistant800,
                }}
                inputSearchStyle={{height: 40, fontSize: 14}}
                iconStyle={{width: 20, height: 20}}
                data={countryData}
                search
                maxHeight={300}
                labelField="label"
                valueField="label"
                placeholder={!isFocus ? 'Country*' : '...'}
                searchPlaceholder="Search..."
                value={country?.label}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setCountry(item.label);
                  getStates(item.isocode);
                  setIsFocus(false);
                }}
              />
              {/* 
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
                value={city}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setCity(item.label);
                  setIsFocus(false);
                }}
              /> */}
              <InputText
                customStyle={Styles.textinput}
                label="City*"
                value={city}
                onChangeText={text => setCity(text)}
                onBlur={() => {
                  !!city
                    ? setvalidation(prev => ({...prev, city: ''}))
                    : setvalidation(prev => ({
                        ...prev,
                        city: 'This field is required',
                      }));
                }}
              />
              <Text style={{color: 'red'}}>{validation.city}</Text>
              <Dropdown
                style={Styles.dropdown}
                placeholderStyle={{fontSize: 14}}
                selectedTextStyle={{
                  fontSize: 14,
                  fontFamily: Fonts.Assistant800,
                }}
                inputSearchStyle={{height: 40, fontSize: 14}}
                iconStyle={{width: 20, height: 20}}
                data={stateData}
                search
                maxHeight={300}
                labelField="label"
                valueField="label"
                placeholder={!isFocus ? 'State*' : '...'}
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
                customStyle={Styles.textinput}
                label="Address Line 1*"
                value={addressfirst}
                onChangeText={text => setaddressfirst(text)}
                onBlur={() => {
                  !!addressfirst
                    ? setvalidation(prev => ({...prev, addressfirst: ''}))
                    : setvalidation(prev => ({
                        ...prev,
                        addressfirst: 'This field is required',
                      }));
                }}
              />
              <Text style={{color: 'red'}}>{validation.addressfirst}</Text>
              <InputText
                customStyle={Styles.textinput}
                label="Address Line 2 (optional)"
                value={addresssecond}
                onChangeText={text => setaddresssecond(text)}
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
            disable={
              !(
                !!firstname &&
                !!phoneNumber &&
                !!pincode &&
                !!country?.label &&
                !!city &&
                !!State &&
                !!addressfirst &&
                !!email
              )
            }
            backgroundColor="#BDBDBD"
            handleClick={SubmitAddress}
            txt="Save address"
            customViewStyle={{
              backgroundColor: !(
                !!firstname &&
                !!phoneNumber &&
                !!pincode &&
                !!country?.label &&
                !!city &&
                !!State &&
                !!addressfirst &&
                !!email
              )
                ? '#BDBDBD'
                : Colors.primarycolor,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default EditAddress;
