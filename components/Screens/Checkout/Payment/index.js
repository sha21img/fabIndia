import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {Colors} from '../../../../assets/Colors';
// import {
//   CreditCardInput,
// } from 'react-native-credit-card-input';
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SimpleAccordian2 from '../../../Common/SimpleAccordian2';
import {TextInput} from 'react-native-paper';
import {image} from '../../../../assets/images';
const BankData = [
  {name: 'ICICI Bank', id: 1},
  {name: 'State Bank of India', id: 2},
  {name: 'Axis Bank', id: 3},
  {name: 'Yes Bank', id: 4},
];
const Cardsdata = () => {
  const cardDetails = data => {
    console.log('cardDetailscardDetailscardDetailscardDetails', data);
  };
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>carddddddddddddddddddddd</Text>
      {/* <CreditCardInput onChange={cardDetails} /> */}
    </View>
  );
};
const UpiData = () => {
  const [Upistore, setUpistore] = useState('');

  return (
    <View style={{}}>
      <TextInput
        activeOutlineColor="black"
        activeUnderlineColor="black"
        underlineColor="black"
        style={{
          letterSpacing: 2,
          borderBottomColor: 'white',
          fontSize: 14,
          color: 'black',
          backgroundColor: 'white',
          // height: 40,
          width: '100%',
        }}
        value={Upistore}
        placeholder="Enter your UPI Id"
        onChangeText={value => setUpistore(value)}
        placeholderTextColor="grey"
        disableFullscreenUI={true}
      />
      <View
        style={{
          backgroundColor: Colors.primarycolor,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 20,
          paddingHorizontal: 30,
          paddingVertical: 10,
        }}>
        <Text style={{color: 'white'}}>Pay Now</Text>
      </View>
    </View>
  );
};
const NetBanking = () => {
  const [bank, setBank] = useState('');

console.log(bank)
  return (
    <View style={{}}>
      {BankData.map((item) => {
        return (
          <TouchableOpacity 
          onPress={()=> setBank(item.id)}
            style={{
              // backgroundColor: 'pink',
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 25,
              paddingHorizontal: 25,
              marginVertical: 15,
              marginHorizontal: 25,
              borderWidth: 1,
              // elevation:5,
              borderColor: bank == item.id ? Colors.primarycolor : 'black',
              borderRadius: 10,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.primarycolor,
                width: 20,
                height: 20,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: Colors.primarycolor,
                  width: 14,
                  height: 14,
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={image.Shape}
                resizeMode="cover"
                style={{width: 20, height: 20, marginHorizontal: 10}}
              />
              <Text style={{color: 'black', fontSize: 16}}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}

      <View
        style={{
          backgroundColor: Colors.primarycolor,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 20,
          paddingHorizontal: 30,
          paddingVertical: 10,
        }}>
        <Text style={{color: 'white'}}>Pay Now</Text>
      </View>
    </View>
  );
};
const Payment = props => {
  const [paymentMode, setPaymentMode] = useState([]);
  const [showlist, setshowlist] = useState([]);

  let menuItem = [
    {
      id: 1,
      name: 'Cards',
      IconName: 'credit-card',
      subItem: React.createElement(Cardsdata),
    },
    {
      id: 2,
      name: 'UPI',
      IconName: 'credit-card',
      subItem: React.createElement(React.memo(UpiData)),
    },
    {
      id: 3,
      name: 'Net Banking',
      IconName: 'credit-card',
      subItem: React.createElement(React.memo(NetBanking)),
    },
    {
      id: 4,
      name: 'Wallets',
      IconName: 'credit-card',
      subItem:
        'Yes. Fabindia is a registered private limited Indian company - Fabindia Overseas Private Limited. Fabindia has a chain of retail stores in India, a store in Rome-Italy, Dubai-UAE, Bahrain, Qatar and a US based office, which wholesales a collection of Home Textiles to various stores across the US.',
    },
    {
      id: 5,
      name: 'EMI',
      IconName: 'credit-card',
      subItem:
        'Yes. Fabindia is a registered private limited Indian company - Fabindia Overseas Private Limited. Fabindia has a chain of retail stores in India, a store in Rome-Italy, Dubai-UAE, Bahrain, Qatar and a US based office, which wholesales a collection of Home Textiles to various stores across the US.',
    },
  ];

  useEffect(() => {
    paymentModes();
  }, []);
  const openCheckout = (data, UDID) => {
    console.log(
      'selectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselected',
      data.orderId,
    );
    console.log(
      'selectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselected',
      UDID,
    );
    var options = {
      description: 'Payment for Fab india',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      // callback_url: UDID,
      // redirect: true,
      key: 'rzp_test_T70CWf6iJpuekL',
      amount: amount * 100,
      name: 'FAB India',
      orderId: data.orderId,
      prefill: {
        email: selected.email,
        contact: selected.phone,
        name: selected.firstName,
      },
      theme: {color: Colors.primarycolor},
    };
    console.log('optionsoptionsoptions', JSON.stringify(options));
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        console.log('Razorpay==>', JSON.stringify(data));
        props.navigation.navigate('OrderConfirmation', {
          amount: amount,
          addressData: selected,
          UDID: UDID,
        });
        // alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        console.log('error==>', JSON.stringify(error));
        // alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  const getOrderID = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart id', getCartID);
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}/payment/razorpay/orderid/request?lang=en&curr=INR`,
      // {},
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    console.log(
      'handleClickhandleClickhandleClickhandleClickhandleClickhandleClickhandleClick',
      response.data,
    );
    // await paymentModes();
    const UDID = await getUDID();
    openCheckout(response.data, UDID);
  };
  const paymentModes = async () => {
    const getCartID = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);

    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}/paymentModes?fields=DEFAULT`,
      // {},
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );

    setPaymentMode(response.data.paymentModes);
    const final = menuItem.concat(response.data.paymentModes);
    setshowlist(final);
  };
  const getUDID = async () => {
    const getCartID = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);

    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}/payment/razorpay/callback/url?lang=en&curr=INR`,
      // {},
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    console.log(
      'getUDIDgetUDIDgetUDIDgetUDIDgetUDIDgetUDIDgetUDIDgetUDIDgetUDIDgetUDID',
      response.data,
    );
    return response.data;
  };

  return (
    <ScrollView
      //   style={{backgroundColor: 'red', height: '100%'}}
      contentContainerStyle={{backgroundColor: 'white', flexGrow: 1}}>
      <View>
        <View style={{margin: 30, backgroundColor: 'lightgrey', padding: 20}}>
          <Text>Modes of Payment</Text>
        </View>
        <View style={{marginHorizontal: 20, borderRadius: 8}}>
          {showlist.map(item => {
            return (
              <View key={Math.random() * 724436357}>
                <SimpleAccordian2
                  {...props}
                  IconName={item.IconName}
                  title={item.name}
                  subItem={item?.subItem ? item.subItem : null}
                  bodyData={true}
                  // handleclick = {()=>Cardsdata}
                />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
export default React.memo(Payment);
