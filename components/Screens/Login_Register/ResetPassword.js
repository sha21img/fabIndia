import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../assets/Colors';
import CommonButton from '../../Common/CommonButton';
import Fonts from '../../../assets/fonts';
import CountryPicker from 'rn-country-picker';
import {TextInput} from 'react-native-paper';
import InputText from '../../Common/InputText';
import {UnAuthPostData} from '../../Common/Helper';
import Toast from 'react-native-simple-toast';
export default function ResetPassword(props) {
  const [text, setText] = useState('');
  const handleSubmit = async () => {
    const body = {userId: text};
    if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(text)) {
      const res = await UnAuthPostData(
        'fabindiab2c/forgottenpasswordtokens?lang=en&curr=INR',
        body,
      );
      console.log(res);
      Toast.showWithGravity(
        'reset link send to your email',
        Toast.LONG,
        Toast.TOP,
      );
      props.navigation.goBack();
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
