import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {image} from '../../../../../assets/images';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Feather';
import GiftIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Styles} from './styles';
import InputText from '../../../../Common/InputText';
import {Colors} from '../../../../../assets/Colors';
import CommonButton from '../../../../Common/CommonButton';
function AddGiftCard() {
  const [password, setPassword] = useState('');
  const [userDetail, setUserDetail] = useState({
    giftcard: '',
    pin: '',
  });
  const [toggle, setToggle] = useState(true);

  const [seePassword, setSeePassword] = useState(true);

  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        <View style={Styles.headerView}>
          <GiftIcon name="wallet-giftcard" size={34} color="#750000" />
          <Text style={Styles.headerTxtOne}> Your total balance:</Text>
          <Text style={Styles.headerTxtTwo}> ₹0</Text>
        </View>
        <Image style={Styles.stretch} source={image.fabgiftcard} />
        <View style={Styles.cardDetailsView}>
          <Text style={Styles.cardDetailsTxt}>Enter your card Details</Text>

          <InputText
            label={'Gift card number'}
            onChangeText={text =>
              setUserDetail({...userDetail, giftcard: text})
            }
            value={userDetail.giftcard}
            customStyle={{
              marginTop: 20,
              paddingHorizontal: 0,
            }}
          />

          <InputText
            secureTextEntry={toggle}
            underlineColor="#EDEDED"
            customStyle={{
              borderRadius: 1,
              fontSize: 14,
              marginBottom: 5,
              backgroundColor: '#FFFFFF',
              width: '100%',
            }}
            label="PIN"
            value={password}
            onChangeText={pass => setPassword(pass)}
            right={
              <TextInput.Icon
                name={() => (
                  <Feather
                    name={toggle ? 'eye-off' : 'eye'}
                    color={Colors.textcolor}
                    size={15}
                    onPress={() => setToggle(!toggle)}
                  />
                )}
              />
            }
          />
        </View>
      </ScrollView>
      <View
        style={{
          padding: 12,
          backgroundColor: '#FDFDFD',
          elevation: 5,
        }}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Add gift card"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
}

export default AddGiftCard;
