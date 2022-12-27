import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../assets/Colors';
import CommonButton from '../../Common/CommonButton';
import Fonts from '../../../assets/fonts';
import CountryPicker from 'rn-country-picker';
import {TextInput} from 'react-native-paper';
import InputText from '../../Common/InputText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthBaseUrl2, BaseURL2, logout, UnAuthPostData} from '../../Common/Helper';
import Toast from 'react-native-simple-toast';
import axios from 'axios';
import {useDispatch} from 'react-redux';
export default function ResetPassword(props) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const generatTokenWithout = async () => {
    await axios
      .post(
        `${AuthBaseUrl2}/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
      )
      .then(
        response => {
          const tokenGenerate = {...response.data, isCheck: false};
          console.log('tokenGeneratetokenGeneratetokenGenerate', tokenGenerate);
          AsyncStorage.setItem('generatToken', JSON.stringify(tokenGenerate));
        },
        error => {
          console.log('response-=-=-=-=-=-error', error);
        },
      );
  };
  const resetPassword = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const details = {
      userId: text,
    };
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    const response = await fetch(
      `${BaseURL2}/forgottenpasswordtokens?lang=en&curr=INR`,
      {
        method: 'POST',
        headers: {
          Authorization: `${getToken?.token_type} ${getToken?.access_token}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formBody,
      },
    )
      .then(function (res) {
        if (res.ok == true) {
          console.log(res);
          Toast.showWithGravity(
            'Reset link send to your email',
            Toast.LONG,
            Toast.TOP,
          );
          props.navigation.goBack();
        } else {
          Toast.showWithGravity('Problem', Toast.LONG, Toast.TOP);
        }
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  const handleSubmit = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    if (getToken == null) {
      await generatTokenWithout();
    }
    if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(text)) {
      resetPassword();
    } else {
      Toast.showWithGravity('Invalid Email', Toast.LONG, Toast.TOP);
    }
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Reset Password</Text>
        <InputText
          label={'Email address'}
          onChangeText={text => setText(text)}
          value={text}
          customStyle={{marginTop: 10}}
        />
      </ScrollView>
      <View style={styles.btnBox}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Send request"
          customViewStyle={{
            backgroundColor: !text
              ? Colors.inAactivecolor
              : Colors.primarycolor,
          }}
          disable={!text}
          handleClick={handleSubmit}
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
    paddingVertical: 15,
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
