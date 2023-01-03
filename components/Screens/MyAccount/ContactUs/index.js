import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import InputText from '../../../Common/InputText';
import CommonButton from '../../../Common/CommonButton';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';

export default function ContactUs() {
  const [text, setText] = React.useState('');
  const [user, setUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
    subject: '',
    description: '',
  });

  const emailHandler = text => {
    setUser({...user, email: text});
  };
  const firstNameHandler = text => {
    setUser({...user, firstName: text});
  };
  const lastNameHandler = text => {
    setUser({...user, lastName: text});
  };
  const subjectHandler = text => {
    setUser({...user, subject: text});
  };
  const discriptionNameHandler = text => {
    setUser({...user, description: text});
  };

  const changePasswordHandler = () => {
    Alert.alert('user', user.email);
  };

  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        <View
          style={{
            width: '90%',
          }}>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 16,
              fontFamily: Fonts.Assistant400,
              color: Colors.textcolor,
            }}>
            If you have a question or a comment, please call us{' '}
            <Text style={Styles.mobileNo}> +91 8010488888</Text> (9:30 am to
            5:30 pm, monday to Sunday) or email us at{' '}
            <Text style={Styles.email}>support@fabindia.net </Text> or use the
            form below us
          </Text>
        </View>
        <InputText
          label={'Email address'}
          onChangeText={text => emailHandler(text)}
          value={user.email}
          customStyle={{marginTop: 30, paddingHorizontal: 0}}
        />
        <InputText
          label={'First name'}
          onChangeText={text => firstNameHandler(text)}
          value={user.firstName}
          customStyle={{marginTop: 30, paddingHorizontal: 0}}
        />
        <InputText
          label={'Last name'}
          onChangeText={text => lastNameHandler(text)}
          value={user.lastName}
          customStyle={{marginTop: 30, paddingHorizontal: 0}}
        />
        <InputText
          label={'Subject'}
          onChangeText={text => subjectHandler(text)}
          value={user.subject}
          customStyle={{marginTop: 30, paddingHorizontal: 0}}
        />

        {/* <View style={Styles.textAreaContainer}> */}
        <InputText
          placeholder="Description"
          placeholderTextColor="#979797"
          onChangeText={text => discriptionNameHandler(text)}
          value={user.description}
          numberOfLines={4}
          multiline={true}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          customStyle={{
            marginTop: 30,
            textAlignVertical: 'top',
            borderWidth: 1,
            borderColor: '#EDEDED',
          }}
        />
        {/* <TextInput
          style={Styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Discription"
          placeholderTextColor="grey"
          numberOfLines={5}
          multiline={true}
          onChangeText={text => discriptionNameHandler(text)}
        /> */}
        {/* </View> */}
        {/* </View> */}

        {/* <View style={{}}>
        <TouchableOpacity
          style={Styles.submitButton}
          onPress={() => changePasswordHandler()}>
          <Text style={{color: 'white'}}>Register</Text>
        </TouchableOpacity>
      </View> */}
      </ScrollView>
      <View
        style={{
          padding: 12,
          backgroundColor: '#FDFDFD',
          elevation: 5,
        }}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Submit"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
}
