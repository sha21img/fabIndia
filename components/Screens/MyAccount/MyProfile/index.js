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
import React, {useState} from 'react';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../../assets/Colors';
import InputText from '../../../Common/InputText';
import CommonButton from '../../../Common/CommonButton';

const MyProfile = () => {
  const [text, setText] = React.useState('');
  const [editUser, setEditUser] = useState({
    name: '',
    mobile: '',
    email: '',
  });

  const updateProfileHandler = () => {
    Alert.alert(
      ` Name: ${editUser.name}  Mobile: ${editUser.mobile}  Email: ${editUser.email}`,
    );
  };
  console.log('user', editUser);
  const faqs = [
    {
      id: '1',
      name: 'Name',
    },
    {
      id: '2',
      name: 'Mobile number',
    },
    {
      id: '3',
      name: 'Email address',
    },
  ];
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
          {faqs.map((faq, index) => (
            <InputText
              underlineColor="#EDEDED"
              activeUnderlineColor=" #979797"
              customStyle={{
                borderRadius: 1,
                fontSize: 14,
                marginTop: 30,
                backgroundColor: '#FFFFFF',
              }}
              label={faq.name}
              value={text}
              onChangeText={text => setText(text)}
            />
          ))}

          <TouchableOpacity style={{paddingTop: 10}}>
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
