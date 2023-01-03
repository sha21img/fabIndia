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
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BaseURL2, logout} from '../../../../Common/Helper';
import {useDispatch} from 'react-redux';
function AddGiftCard(props) {
  const dispatch = useDispatch();
  const {walletInfo} = props;
  const [cardPin, setCardPin] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [toggle, setToggle] = useState(true);

  const [seePassword, setSeePassword] = useState(true);

  const addGiftCard = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    if (cardNo == '') {
      Toast.show('Please enter Gift Card Number', Toast.LONG);
    } else if (cardPin == '') {
      Toast.show('Please enter Gift Card Pin', Toast.LONG);
    } else {
      const response = await axios
        .post(
          `${BaseURL2}/users/current/addGiftCard?lang=en&curr=INR`,
          {
            cardNumber: cardNo,
            cardPin: cardPin,
          },
          {
            headers: {
              Authorization: `${getToken.token_type} ${getToken.access_token}`,
            },
          },
        )
        .then(response => {
          if (response && response.status === 200) {
            Toast.show(response.data.responseMessage, Toast.LONG);
          }
        })
        .catch(errors => {
          if (errors.response.status == 401) {
            logout(dispatch);
          }
        });
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        <View style={Styles.headerView}>
          <GiftIcon name="wallet-giftcard" size={34} color="#750000" />
          <Text style={Styles.headerTxtOne}> Your total balance:</Text>
          <Text style={Styles.headerTxtTwo}> ₹ {walletInfo?.totalBalance}</Text>
        </View>
        <Image style={Styles.stretch} source={image.fabgiftcard} />
        <View style={Styles.cardDetailsView}>
          <Text style={Styles.cardDetailsTxt}>Enter your card Details</Text>

          <InputText
            label={'Gift card number'}
            onChangeText={text => setCardNo(text)}
            value={cardNo}
            maxLength={16}
            keyboardType={'numeric'}
            customStyle={{
              marginTop: 20,
              // paddingHorizontal: 0,
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
            value={cardPin}
            onChangeText={pass => setCardPin(pass)}
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
          handleClick={addGiftCard}
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
}

export default AddGiftCard;
