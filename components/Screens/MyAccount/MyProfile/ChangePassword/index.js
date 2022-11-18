import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputText from '../../../../Common/InputText';

export default function ChangePassword() {
  const icon = {
    uri: 'https://img.icons8.com/ios-glyphs/512/visible.png',
  };
  const [hideOldPass, setHideOldPass] = useState(true);
  const [hideNewPass, setHideNewPass] = useState(true);
  const [passwordNotMatch, setPasswordNotMatch] = useState(false);
  const [desable, setDesable] = useState();
  const [text, setText] = React.useState('');

  const [password, setPassword] = useState({
    oldPass: '',
    newPass: '',
    confirmPass: '',
  });

  const toggleOldHide = () => {
    setHideOldPass(!hideOldPass);
  };
  const toggleNewHide = () => {
    setHideNewPass(!hideNewPass);
  };

  const changePasswordHandler = () => {
    if (password.newPass === password.confirmPass) {
      setPasswordNotMatch(false);
      setDesable(false);
    } else {
      setPasswordNotMatch(true);
    }
  };

  useEffect(() => {
    if (password.newPass === password.confirmPass) {
      setPasswordNotMatch(false);
      setDesable(false);
    } else {
      setPasswordNotMatch(true);
      setDesable(true);
    }
  }, [password.confirmPass]);

  console.log('user', password.newPass.length, password.confirmPass.length);

  return (
    // <ScrollView contentContainerStyle={styles.container}>
    //   <View style={{paddingHorizontal: 10, marginTop: 100}}>
    <>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 55,
          backgroundColor: '#FFFFFF',
          flexGrow: 1,
        }}>
        <View style={styles.fieldContainer}>
          <View style={{width: '90%'}}>
            <InputText
              underlineColor="#EDEDED"
              activeUnderlineColor=" #979797"
              customStyle={{
                borderRadius: 1,
                fontSize: 14,
                marginBottom: 5,
                backgroundColor: '#FFFFFF',
              }}
              label="Pincode"
              value={password.oldPass}
              onChangeText={pass => setPassword({...password, oldPass: pass})}
            />
            {/* {password.oldPass && (
              <Text style={styles.fieldLabel}>Old password</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder={'Old password'}
              secureTextEntry={hideOldPass}
              autoCorrect={false}
              textContentType={'password'}
              onChangeText={pass => setPassword({...password, oldPass: pass})}
              defaultValue={password.oldPass}
            /> */}
          </View>
          <TouchableOpacity onPress={() => toggleOldHide()}>
            <Image source={icon} style={styles.eyeButton} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={{color: '#903233', paddingLeft: 5}}>
              Forgot password
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fieldContainer}>
          <View style={{width: '90%'}}>
            {password.newPass && (
              <Text style={styles.fieldLabel}>New password</Text>
            )}
            <TextInput
              style={styles.input}
              // underlineColorAndroid={'#afafaf'}
              placeholder={'New password'}
              secureTextEntry={hideNewPass}
              autoCorrect={false}
              textContentType={'password'}
              onChangeText={pass => setPassword({...password, newPass: pass})}
              defaultValue={password.newPass}
            />
          </View>
          <TouchableOpacity onPress={() => toggleNewHide()}>
            <Image source={icon} style={styles.eyeButton} />
          </TouchableOpacity>
        </View>
        <View style={styles.confirmContainer}>
          {password.confirmPass && (
            <Text style={styles.fieldLabel}>Confirm Password</Text>
          )}
          <TextInput
            style={styles.confirmInput}
            placeholder={'Confirm password'}
            onChangeText={pass => setPassword({...password, confirmPass: pass})}
            defaultValue={password.confirmPass}
          />
        </View>
        {passwordNotMatch && (
          <View
            style={{
              paddingLeft: 5,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#903233',
                }}>
                Password not matching
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      <View style={{paddingBottom: 10}}>
        <TouchableOpacity
          style={
            !desable ? styles.updateButtonEnable : styles.updateButtonDesable
          }
          desabled={desable}
          onPress={() => changePasswordHandler()}>
          <Text
            style={{
              color: 'white',
            }}>
            Change password
          </Text>
        </TouchableOpacity>
      </View>
    </>
    // </ScrollView>
  );
}
const styles = StyleSheet.create({
  updateButtonEnable: {
    width: '90%',
    height: 40,
    backgroundColor: '#903233',
    marginHorizontal: '5%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 35,
    borderBottomColor: '#afafaf',
    borderBottomWidth: 1,
    width: Dimensions.get('window').width - 20,
  },
  confirmInput: {
    height: 35,
    borderBottomColor: '#afafaf',
    borderBottomWidth: 1,

    width: Dimensions.get('window').width,
  },
  fieldLabel: {
    padding: 0,
  },
  fieldContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  confirmContainer: {
    marginTop: 30,
  },
  updateButtonDesable: {
    width: '90%',

    height: 40,
    backgroundColor: 'gray',
    marginHorizontal: '5%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeButton: {height: 25, width: 25, marginTop: 35},
});
