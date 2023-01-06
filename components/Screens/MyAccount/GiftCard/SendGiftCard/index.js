import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../../../assets/Colors';
import CommonButton from '../../../../Common/CommonButton';
import InputText from '../../../../Common/InputText';
import {Styles} from './styles';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BaseURL2, imageURL2, logout} from '../../../../Common/Helper';
import {useDispatch} from 'react-redux';

function SendGiftCard(props) {
  const dispatch = useDispatch();
  const {walletInfo} = props;
  const [userDetail, setUserDetail] = useState({
    email: '',
    confirmemail: '',
    amount: 0,
    to: '',
    from: '',
    message: '',
  });
  const [giftCardDesigns, setGiftCardDesigns] = useState([]);
  const [productDesignCode, setProductDesignCode] = useState('');
  const [giftCardAmount, setGiftCardAmount] = useState([]);
  const [productAmountCode, setProductAmountCode] = useState('');
  const [cardAmount, setCardAmount] = useState(0);

  const getGiftCardProducts = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    await axios
      .get(`${BaseURL2}/getGiftCardProducts?lang=en&curr=INR`, {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      })
      .then(response => {
        // console.log('GiftCardProducts==>', response.data)
        if (response && response.status === 200) {
          setGiftCardAmount(response.data.products);
          setProductAmountCode(response.data.products[1]?.code);
          setCardAmount(response.data.products[1]?.price.formattedValue);
        }
      })
      .catch(errors => {
        console.log('errors==>', errors.response);
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  const getGiftCardDesigns = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    await axios
      .get(`${BaseURL2}/getGiftCardDesigns?fields=FULL&lang=en&curr=INR`, {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      })
      .then(response => {
        // console.log('GiftCardDesigns==>', response.data)
        if (response && response.status === 200) {
          setProductDesignCode(response.data.products[0]?.code);
          setGiftCardDesigns(response.data.products);
        }
      })
      .catch(errors => {
        console.log('errors==>', errors.response);
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  useEffect(() => {
    getGiftCardProducts();
    getGiftCardDesigns();
  }, []);

  const sendGiftCard = async () => {
    const regex = /^[A-Za-z._0-9+-]{3,}@[A-Za-z]{3,}[.][A-Za-z]{2,6}/i;

    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart id', getCartID);
    if (!regex.test(userDetail.email)) {
      Toast.show('Please enter valid Recipient email', Toast.LONG);
    } else if (userDetail.confirmemail == '') {
      Toast.show('Please enter Confirm Recipient email', Toast.LONG);
    } else if (userDetail.confirmemail != userDetail.email) {
      Toast.show('Email ID not Matching', Toast.LONG);
    } else if (userDetail.to == '') {
      Toast.show('Please enter Recipient Name', Toast.LONG);
    } else if (userDetail.from == '') {
      Toast.show('Please enter From', Toast.LONG);
    } else if (
      userDetail.amount > 0 &&
      (userDetail.amount < 500 || userDetail.amount > 50000)
    ) {
      Toast.show('Please Enter Valid Amount', Toast.LONG);
    } else {
      console.log('ellllllllllllllllllllllllllllllllllllllllll');
      const response = await axios
        .post(
          `${BaseURL2}/users/current/carts/${getCartID}/entries/configurator/textfield?fields=FULL&lang=en&curr=INR`,
          {
            configurationInfos: [
              {
                configurationLabel: 'Recipient Email',
                configurationValue: userDetail.confirmemail,
                configuratorType: 'TEXTFIELD',
                status: 'SUCCESS',
              },
              {
                configurationLabel: 'Amount',
                configurationValue: cardAmount,
                configuratorType: 'TEXTFIELD',
                status: 'SUCCESS',
              },
              {
                configurationLabel: 'To',
                configurationValue: userDetail.to,
                configuratorType: 'TEXTFIELD',
                status: 'SUCCESS',
              },
              {
                configurationLabel: 'From',
                configurationValue: userDetail.from,
                configuratorType: 'TEXTFIELD',
                status: 'SUCCESS',
              },
              {
                configurationLabel: 'Personal message',
                configurationValue: userDetail.message,
                configuratorType: 'TEXTFIELD',
                status: 'SUCCESS',
              },
            ],
            product: {
              code: productAmountCode,
            },
            quantity: 1,
            fabProductPrice: userDetail.amount,
            fabProductDesign: {
              code: productDesignCode,
            },
            userId: 'current',
            cartId: '08266751',
          },
          {
            headers: {
              Authorization: `${getToken.token_type} ${getToken.access_token}`,
            },
          },
        )
        .then(response => {
          if (response && response.status === 200) {
            props.navigation.navigate('CartPage');
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
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.headerView}>
        <Icon name="wallet-giftcard" size={34} color={Colors.primarycolor} />
        <Text style={Styles.balanceTxt}> Your total balance:</Text>
        <Text style={Styles.amountTxt}> ₹ {walletInfo?.totalBalance}</Text>
      </View>
      <View>
        <View style={Styles.enterDeatilsView}>
          <Text style={Styles.enterDetailsTxt}>Pick a Design</Text>
        </View>

        <View style={{paddingHorizontal: 15, marginTop: 20}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {giftCardDesigns.map(item => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => setProductDesignCode(item.code)}>
                  <View style={{marginHorizontal: 8}}>
                    <Image
                      resizeMode="stretch"
                      source={{
                        uri: `${imageURL2}${item?.images[0]?.url}`,
                      }}
                      style={{
                        width: 200,
                        height: 100,
                        borderColor: Colors.primarycolor,
                        borderWidth: productDesignCode == item.code ? 2 : 0,
                        borderRadius: 8,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={Styles.enterDeatilsView}>
          <Text style={Styles.enterDetailsTxt}>Enter Details</Text>
        </View>

        <InputText
          label={'Recipient email'}
          onChangeText={text => setUserDetail({...userDetail, email: text})}
          value={userDetail.email}
          customStyle={Styles.textinput}
        />
        <InputText
          label={'Confirm recipient email'}
          onChangeText={text =>
            setUserDetail({...userDetail, confirmemail: text})
          }
          value={userDetail.confirmemail}
          customStyle={Styles.textinput}
        />

        <Text style={Styles.chooseAmtTxt}>Choose an amount</Text>

        <View
          style={[
            Styles.amountTxtView,
            {opacity: userDetail?.amount > 0 ? 0.5 : 1},
          ]}>
          <View style={Styles.amountTxtInnerView}>
            {giftCardAmount.map(item => {
              return item.price.value != '0.0' ? (
                <View
                  style={[
                    item.code == productAmountCode
                      ? Styles.buttonActive
                      : Styles.button,
                  ]}>
                  <TouchableOpacity
                    disabled={userDetail?.amount > 0}
                    key={Math.random()}
                    activeOpacity={0.9}
                    onPress={() => {
                      setProductAmountCode(item.code);
                      setCardAmount(item.price.formattedValue);
                      setUserDetail({...userDetail, amount: 0});
                    }}>
                    <Text
                      style={[
                        item.code == productAmountCode
                          ? Styles.activeAmountTxt
                          : Styles.amountTxt,
                      ]}>
                      {item?.price?.formattedValue}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null;
            })}
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={Styles.chooseAmtTxt1}>(or choose your own amount)</Text>

          <InputText
            label={'Enter amount'}
            value={userDetail.amount}
            keyboardType={'numeric'}
            customStyle={[Styles.textinput, {marginTop: 0, width: '35%'}]}
            onChangeText={text => {
              setProductAmountCode(giftCardAmount[0]?.code);
              setCardAmount(text);
              setUserDetail({...userDetail, amount: text});
              if (text == 0) {
                setProductAmountCode(giftCardAmount[1]?.code);
                setCardAmount(giftCardAmount[1].price.formattedValue);
              }
            }}
          />
          {/* <Text style={[Styles.chooseAmtTxt1, { marginTop: 0 }]}>(min ₹500 - max ₹50,000)</Text> */}
        </View>
        <InputText
          label={'Recipient Name'}
          onChangeText={text => setUserDetail({...userDetail, to: text})}
          value={userDetail.to}
          customStyle={Styles.textinput}
        />
        <InputText
          label={'From'}
          onChangeText={text => setUserDetail({...userDetail, from: text})}
          value={userDetail.from}
          customStyle={Styles.textinput}
        />
        <InputText
          placeholder="Add a personal message"
          placeholderTextColor="#979797"
          onChangeText={text => setUserDetail({...userDetail, message: text})}
          value={userDetail.message}
          numberOfLines={4}
          multiline={true}
          // underlineColor="transparent"
          // activeUnderlineColor="transparent"
          customStyle={Styles.textarea}
        />
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Send gift card"
          customViewStyle={Styles.commonbtn}
          handleClick={sendGiftCard}
        />

        <View style={Styles.bottombox}>
          <Text style={Styles.notetext}>Please note</Text>
          <Text style={Styles.bottomdescription}>
            The gift card cannot be cancelled, refunded or returned. Once
            purchased, the recipient email cannot be changed. Expiry date - 1
            year from today. Only applicable to india user.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default SendGiftCard;
