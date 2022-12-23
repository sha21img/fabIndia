import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import {Styles} from './styles';
import InputText from '../../../../Common/InputText';
import CommonButton from '../../../../Common/CommonButton';
import {Colors} from '../../../../../assets/Colors';

function Membership() {
  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        {/* <View style={Styles.nameTxtView}> */}
        <InputText
          label={'Name'}
          //   onChangeText={text => setText(text)}
          //   value={text}
          customStyle={{
            marginTop: 10,
            marginHorizontal: 15,
            paddingHorizontal: 0,
          }}
        />
        <InputText
          label={'Mobile number'}
          //   onChangeText={text => setText(text)}
          //   value={text}
          customStyle={{
            marginTop: 10,
            marginHorizontal: 15,
            paddingHorizontal: 0,
          }}
        />
        <InputText
          label={'Email address'}
          //   onChangeText={text => setText(text)}
          //   value={text}
          customStyle={{
            marginTop: 10,
            marginHorizontal: 15,
            paddingHorizontal: 0,
          }}
        />
      </ScrollView>
      <View
        style={{
          padding: 12,
          backgroundColor: '#FDFDFD',
          elevation: 5,
        }}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Join FabFamily"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
}

export default Membership;
