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

const MyProfile = () => {
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
          <View>
            <Text style={{fontFamily: Fonts.Assistant400, fontSize: 12}}>
              Name
            </Text>
            <TextInput
              style={{height: 35}}
              underlineColorAndroid={'#EDEDED'}
              onChangeText={newText =>
                setEditUser({...editUser, name: newText})
              }
              defaultValue={editUser.name}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontFamily: Fonts.Assistant400, fontSize: 12}}>
              Mobile number
            </Text>
            <TextInput
              style={{height: 35}}
              underlineColorAndroid={'#EDEDED'}
              onChangeText={newText =>
                setEditUser({...editUser, mobile: newText})
              }
              defaultValue={editUser.mobile}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontFamily: Fonts.Assistant400, fontSize: 12}}>
              Email address
            </Text>
            <TextInput
              style={{height: 35}}
              underlineColorAndroid={'#EDEDED'}
              onChangeText={newText =>
                setEditUser({...editUser, email: newText})
              }
              defaultValue={editUser.email}
            />
          </View>

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
          backgroundColor: 'rgba(253, 253, 253, 0.7)',
          marginTop: 2,
        }}>
        <TouchableOpacity
          style={styles.updateButton}
          onPress={() => updateProfileHandler()}>
          <Text
            style={{
              color: 'white',
            }}>
            Update profile
          </Text>
        </TouchableOpacity>
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
    paddingTop: 28,
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
