import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputText from '../../../../Common/InputText';
import {TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../../../../assets/Colors';
import {Styles} from './style';
import CommonButton from '../../../../Common/CommonButton';
import Fonts from '../../../../../assets/fonts';
import {UnAuthPostData} from '../../../../Common/Helper';
import Toast from 'react-native-simple-toast';

export default function ChangePassword(props) {
  const icon = {
    uri: 'https://img.icons8.com/ios-glyphs/512/visible.png',
  };
  const [hideOldPass, setHideOldPass] = useState(true);
  const [hideNewPass, setHideNewPass] = useState(true);
  const [passwordNotMatch, setPasswordNotMatch] = useState(false);
  const [desable, setDesable] = useState();
  const [toggle, setToggle] = useState({
    oldPass: true,
    newPass: true,
    confirmPass: true,
  });
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
    console.log(
      password.oldPass && !!(password.newPass == password.confirmPass),
      'adfasdfasdf',
    );
    if (password.newPass === password.confirmPass) {
      setPasswordNotMatch(false);
      setDesable(false);
    } else {
      setPasswordNotMatch(true);
      setDesable(true);
    }
  }, [password.confirmPass]);

  console.log('user', password.newPass.length, password.confirmPass.length);

  const handleChangePassword = () => {
    const body = {
      old: password.oldPass,
      new: password.newPass,
    };
    const res = UnAuthPostData(
      'fabindiab2c/users/current/password?lang=en&curr=INR',
      body,
    );
    console.log(res, "resresresresresres");
    Toast.showWithGravity(
      'Password Changed Succesfully',
      Toast.LONG,
      Toast.TOP,
    );
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={Styles.container}>
        <InputText
          secureTextEntry={toggle.oldPass}
          underlineColor="#EDEDED"
          customStyle={Styles.txtinput}
          label="Old password"
          value={password.oldPass}
          onChangeText={pass => setPassword({...password, oldPass: pass})}
          right={
            <TextInput.Icon
              name={() => (
                <Feather
                  name={toggle.oldPass ? 'eye-off' : 'eye'}
                  color={Colors.textcolor}
                  size={15}
                  onPress={() =>
                    setToggle({...toggle, oldPass: !toggle.oldPass})
                  }
                />
              )}
            />
          }
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('MyAccount', {
                screen: 'ResetPassword',
              });
            }}>
            <Text style={Styles.forgottxt}>Forgot password</Text>
          </TouchableOpacity>
        </View>

        <InputText
          underlineColor="#EDEDED"
          secureTextEntry={toggle.newPass}
          customStyle={[Styles.txtinput, {marginTop: 30}]}
          label="New password"
          value={password.newPass}
          onChangeText={pass => setPassword({...password, newPass: pass})}
          right={
            <TextInput.Icon
              name={() => (
                <Feather
                  name={toggle.newPass ? 'eye-off' : 'eye'}
                  color={Colors.textcolor}
                  size={15}
                  onPress={pass => {
                    setToggle({...toggle, newPass: !toggle.newPass});
                  }}
                />
              )}
            />
          }
        />
        <InputText
          secureTextEntry={toggle.confirmPass}
          customStyle={[Styles.txtinput, {marginTop: 30}]}
          label="Confirm password"
          value={password.confirmPass}
          onChangeText={pass => setPassword({...password, confirmPass: pass})}
          right={
            <TextInput.Icon
              name={() => (
                <Feather
                  name={toggle.confirmPass ? 'eye-off' : 'eye'}
                  color={Colors.textcolor}
                  size={15}
                  onPress={() =>
                    setToggle({...toggle, confirmPass: !toggle.confirmPass})
                  }
                />
              )}
            />
          }
        />
        {passwordNotMatch && (
          <TouchableOpacity>
            <Text style={Styles.passnotmatch}>Password not matching</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
      <View style={Styles.commonbtnbox}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Change password"
          customViewStyle={{
            backgroundColor:
              password.oldPass.length > 0 &&
              (password.newPass !== '' || password.confirmPass !== '') &&
              password.newPass == password.confirmPass
                ? Colors.primarycolor
                : Colors.inAactivecolor,
            // password.oldPass && !!(password.newPass == password.confirmPass)
            //   ? Colors.primarycolor
            //   : Colors.inAactivecolor,
          }}
          handleClick={handleChangePassword}
          disable={
            !(
              password.oldPass.length > 0 &&
              (password.newPass !== '' || password.confirmPass !== '') &&
              password.newPass == password.confirmPass
            )
          }
        />
      </View>
    </>
  );
}
