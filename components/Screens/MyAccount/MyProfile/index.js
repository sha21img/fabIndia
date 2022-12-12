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
import React, {useEffect, useState} from 'react';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../../assets/Colors';
import InputText from '../../../Common/InputText';
import CommonButton from '../../../Common/CommonButton';
import {patchComponentData} from '../../../Common/Helper';
import Toast from 'react-native-simple-toast';
const MyProfile = props => {
  const isCheck = props.route.params?.isCheck ?? false;
  const [text, setText] = React.useState('');
  const [editUser, setEditUser] = useState({
    name: '',
    mobile: '9999999999',
    email: '',
  });
  useEffect(() => {
    if (isCheck == true) {
      updateProfileHandler();
    }
  }, []);
  const checkUpdateProfile = () => {
    if (editUser.mobile != 9999999999) {
      props.navigation.navigate('ChangeMobileNumber');
    } else {
      updateProfileHandler();
    }
  };
  const updateProfileHandler = () => {
    const body = {
      contactNumber: editUser.mobile,
      contactNumberCode: '+91',
      country: {isocode: 'IN'},
      dateOfBirth: '29/11/2022',
      firstName: editUser.name,
      gender: {code: 'MALE'},
      lastName: 'Prajapati',
      transactionId: '',
      uid: editUser.email,
    };
    const res = patchComponentData(
      'fabindiab2c/users/current/password?lang=en&curr=INR',
      body,
    );
    console.log(res, 'resresresresresres');
    Toast.showWithGravity(
      'Profile updated successfully',
      Toast.LONG,
      Toast.TOP,
    );
  };
  console.log('user', editUser);

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
              marginTop: 30,
              backgroundColor: '#FFFFFF',
            }}
            label="Name"
            value={editUser.name}
            onChangeText={text => setEditUser({...editUser, name: text})}
          />
          <InputText
            customStyle={{
              borderRadius: 1,
              fontSize: 14,
              marginTop: 30,
              backgroundColor: '#FFFFFF',
            }}
            label="Mobile number"
            value={editUser.mobile}
            onChangeText={text => setEditUser({...editUser, mobile: text})}
          />
          <InputText
            customStyle={{
              borderRadius: 1,
              fontSize: 14,
              marginTop: 30,
              backgroundColor: '#FFFFFF',
            }}
            label="Email address"
            value={editUser.email}
            onChangeText={text => setEditUser({...editUser, email: text})}
          />

          <TouchableOpacity
            style={{paddingTop: 10}}
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
});
