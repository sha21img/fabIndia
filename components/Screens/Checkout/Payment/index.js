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
import {CreditCardInput, LiteCreditCardInput} from '../../../CardView';
const BankData = [
  {name: 'ICICI Bank', code: 'ICICI', id: 1},
  {name: 'State Bank of India', code: 'SBI', id: 2},
  {name: 'Axis Bank', code: 'AXIS', id: 3},
  {name: 'Yes Bank', code: 'YES', id: 4},
  {name: 'HDFC Bank', code: 'HDFC', id: 5},
];
const WalletData = [
  {name: 'Airtel Money', id: 1},
  {name: 'amazonpay', id: 2},
  {name: 'Free Charge', id: 3},
  {name: 'Jio Money', id: 4},
  {name: 'Mobikwik', id: 5},
  {name: 'Ola Money', id: 6},
  {name: 'Payzapp', id: 7},
  {name: 'Phonepe', id: 8},
];
const openCheckout = (id, UDID, method, data, details) => {
  let prfilData;
  if (method == 'card') {
    prfilData = {
      email: details?.user?.uid,
      contact: details?.deliveryAddress?.cellphone,
      name: details?.user.name,
      method: method,
      'card[name]': details?.user.name,
      'card[number]': data.number,
      'card[expiry]': data.expiry,
      'card[cvv]': data.cvc,
    };
  } else if (method == 'netbanking') {
    prfilData = {
      email: details?.user?.uid,
      contact: details?.deliveryAddress?.cellphone,
      name: details?.user.name,
      method: method,
      bank: data.code,
      // bank: 'HDFC',
    };
  } else if (method == 'wallet') {
    prfilData = {
      email: details?.user?.uid,
      contact: details?.deliveryAddress?.cellphone,
      name: details?.user.name,
      method: method,
      wallet: data.name,
    };
  } else if (method == 'upi') {
    prfilData = {
      email: details?.user?.uid,
      contact: details?.deliveryAddress?.cellphone,
      name: details?.user.name,
      method: method,
      vpa: data,
    };
  }
  var options = {
    description: 'Payment for Fab india',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: details?.totalPriceWithTax?.currencyIso,
    // callback_url: UDID,
    // redirect: true,
    key: 'rzp_test_T70CWf6iJpuekL',
    amount: details?.totalPriceWithTax?.value * 100,
    name: 'FAB India',
    orderId: id.orderId,
    prefill: prfilData,
    theme: {color: Colors.primarycolor},
  };
  console.log('optionsoptionsoptions', JSON.stringify(options));
  RazorpayCheckout.open(options)
    .then(data => {
      // handle success
      console.log('Razorpay==>', JSON.stringify(data));
      props.navigation.navigate('OrderConfirmation', {
        amount: details?.totalPriceWithTax?.value,
        addressData: details,
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
const getDetails = async () => {
  const get = await AsyncStorage.getItem('generatToken');
  const getToken = JSON.parse(get);
  const getCartID = await AsyncStorage.getItem('cartID');
  const type = getToken.isCheck ? 'current' : 'anonymous';
  console.log('this us cart id a', getToken);
  const response = await axios.get(
    `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/${type}/carts/${getCartID}?fields=DEFAULT,user,deliveryAddress(FULL)`,
    {
      headers: {
        Authorization: `${getToken.token_type} ${getToken.access_token}`,
      },
    },
  );
  if (response.status == 200) {
    console.log(
      'response.datresponse.dataresponse.dataresponse.dataa',
      response.data,
    );
    return response.data;
  }
};
const getOrderID = async (method, data) => {
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
  const details = await getDetails();
  console.log('detailsdetailsdetailsdetailsdetailsdetailsdetails', details);
  openCheckout(response.data, UDID, method, data, details);
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
const Cardsdata = () => {
  const [card, setcard] = useState(null);
  const _onChange = formData => {
    if (formData.valid) {
      setcard(formData.values);
    }
    // console.log(JSON.stringify(formData, null, ' '), 'hiiiiiiiiiiii');
  };

  const _onFocus = field => console.log('focusing', field);
  return (
    <View style={{backgroundColor: 'white'}}>
      <LiteCreditCardInput
        autoFocus
        inputStyle={{
          fontSize: 16,
          color: 'black',
        }}
        validColor={'black'}
        invalidColor={'red'}
        placeholderColor={'darkgray'}
        onFocus={_onFocus}
        onChange={_onChange}
      />
      <TouchableOpacity
        onPress={() => {
          getOrderID('card', card);
        }}
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
      </TouchableOpacity>
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
      <TouchableOpacity
        onPress={() => {
          getOrderID('upi', Upistore);
        }}
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
      </TouchableOpacity>
    </View>
  );
};
const NetBanking = () => {
  const [bank, setBank] = useState('');

  console.log(bank);
  return (
    <View style={{}}>
      {BankData.map(item => {
        return (
          <TouchableOpacity
            onPress={() => setBank(item)}
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 25,
              paddingHorizontal: 25,
              marginVertical: 15,
              marginHorizontal: 25,
              borderWidth: 1,
              elevation: 4,
              borderColor: bank.id == item.id ? Colors.primarycolor : 'white',
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

      <TouchableOpacity
        onPress={() => {
          getOrderID('netbanking', bank);
        }}
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
      </TouchableOpacity>
    </View>
  );
};
const Wallets = () => {
  const [wallet, setwallet] = useState('');

  return (
    <View style={{}}>
      {WalletData.map(item => {
        return (
          <TouchableOpacity
            onPress={() => setwallet(item)}
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 25,
              paddingHorizontal: 25,
              marginVertical: 15,
              marginHorizontal: 25,
              borderWidth: 1,
              elevation: 3,
              borderColor: wallet.id == item.id ? Colors.primarycolor : 'white',
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

      <TouchableOpacity
        onPress={() => {
          getOrderID('wallet', wallet);
        }}
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
      </TouchableOpacity>
    </View>
  );
};

const Cashondelivery = () => {
  const [wallet, setwallet] = useState('');

  return (
    <View style={{}}>
      {WalletData.map(item => {
        return (
          <TouchableOpacity
            onPress={() => setwallet(item)}
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 25,
              paddingHorizontal: 25,
              marginVertical: 15,
              marginHorizontal: 25,
              borderWidth: 1,
              elevation: 3,
              borderColor: wallet.id == item.id ? Colors.primarycolor : 'white',
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

      <TouchableOpacity
        onPress={() => {
          getOrderID('wallet', wallet);
        }}
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
      </TouchableOpacity>
    </View>
  );
};
const Loyalitypoints = () => {
 
  const [points, setPoints] = useState('');

  return (
    <View style={{}}>
      <View style={{margin:20}}>
      <Text style={{color:'black'}}>Available Balance : 0</Text>
      <Text style={{color:'black',marginTop:20}}>Mobile Number  : 9462797441</Text>
      </View>



      <TouchableOpacity
        onPress={() => {
        }}
        style={{
          backgroundColor: Colors.primarycolor,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 20,
          paddingHorizontal: 30,
          paddingVertical: 10,
        }}>
        <Text style={{color: 'white'}}>Redeem</Text>
      </TouchableOpacity>
    </View>
  );
};
const Giftcardwallet = () => {
  const [giftcard, setGiftcard] = useState('');
  const [showcard , setShowcard] = useState(false)

  const [pin , setPin] = useState(null)

  return (
    <View style={{}}>
      <View
        style={{
          margin: 20,
          backgroundColor: '#F3ECE8',
          padding: 20,
          alignItems: 'center',
        }}>
        <Text>
          Your Total Balance
          <Text> ₹ 0.0</Text>
        </Text>
      
        
      </View>
      { showcard ? 
        <>
        <View style={{marginHorizontal:20}}>

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
          value={giftcard}
          placeholder="Gift Card"
          onChangeText={value => setGiftcard(value)}
          placeholderTextColor="grey"
          disableFullscreenUI={true}
        />
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
            marginTop:10
          }}
          value={pin}
          placeholder="Pin"
          onChangeText={value => setPin(value)}
          placeholderTextColor="grey"
          disableFullscreenUI={true}
        /> 
        </View>
        </>
        : null
        }
      <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:20}}>
        <TouchableOpacity
          onPress={() => { !showcard ? null : setShowcard(false)}}
          style={{
            backgroundColor: !showcard ? '#BDBDBD' : 'white',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 20,
            borderColor:Colors.primarycolor,
            borderWidth:1,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}>
          <Text style={{color: Colors.primarycolor}}>{!showcard ? 'Redeem' : 'Cancel'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {setShowcard(true)}}
          style={{
            backgroundColor: !showcard ?Colors.primarycolor : '#BDBDBD',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 20,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}>
          <Text style={{color: 'white'}}>Add Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Razorpay = () => {
  const [wallet, setwallet] = useState('');

  return (
    <View style={{}}>
      {WalletData.map(item => {
        return (
          <TouchableOpacity
            onPress={() => setwallet(item)}
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 25,
              paddingHorizontal: 25,
              marginVertical: 15,
              marginHorizontal: 25,
              borderWidth: 1,
              elevation: 3,
              borderColor: wallet.id == item.id ? Colors.primarycolor : 'white',
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

      <TouchableOpacity
        onPress={() => {
          getOrderID('wallet', wallet);
        }}
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
      </TouchableOpacity>
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
      subItem: React.createElement(React.memo(Wallets)),
    },
    // {
    //   id: 5,
    //   name: 'EMI',
    //   IconName: 'credit-card',
    //   subItem: React.createElement(React.memo(Wallets)),
    // },
  ];

  useEffect(() => {
    paymentModes();
  }, []);

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
    let filter = response.data.paymentModes.filter((el)=>{
      return el.name != 'RAZORPAY'
    })
    console.log("filterfilterfilterfilterfilterfilter",filter)
    const final = menuItem.concat(filter);
    console.log('finalllllllllll', final);
    let updateFinal = [];
    let idVal = 0;
    final.map(el => {
      if (!Object.keys(el).includes('id')) {
        idVal = idVal + 1;
        el.id = idVal;
        el.IconName = 'credit-card';
      } else {
        idVal = el.id;
      }
      if (!Object.keys(el).includes('subItem')) {
        console.log("el.nameel.name",el.name)
        switch (el.name) {
          case 'CASHONDELIVERY':
            el.subItem = React.createElement(Cashondelivery);
            break;
          case 'LOYALITYPOINTS':
            el.subItem = React.createElement(Loyalitypoints);
            break;
          case 'GIFTCARDWALLET':
            el.subItem = React.createElement(Giftcardwallet);
            break;
            default : 
            return 
        }
        // let name = React.createElement(
        //  <Text>{el.name.charAt(0).toUpperCase() + el.name.slice(1).toLowerCase()}</Text>
        // );
        // let name = React.createElement(React.memo(NetBanking))
        // console.log('naaam', typeof name);
        // if (typeof name == 'object') {
        //   el.subItem = name
        //   console.log('el.subItem el.subItem el.subItem', name);
        // }
      }
      updateFinal.push(el);
    });
    console.log('updateFinal', updateFinal);
    setshowlist(updateFinal);
  };

  console.log('showlistshowlistshowlistshowlistshowlistshowlist', showlist);
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
