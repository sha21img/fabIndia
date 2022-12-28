import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {Colors} from '../../../../assets/Colors';
import Razorpay from 'react-native-customui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SimpleAccordian2 from '../../../Common/SimpleAccordian2';
import {TextInput} from 'react-native-paper';
import {image} from '../../../../assets/images';
import {CreditCardInput, LiteCreditCardInput} from '../../../CardView';
import {useNavigation} from '@react-navigation/native';
import Fonts from '../../../../assets/fonts';
import Toast from 'react-native-simple-toast';
import {BaseURL2} from '../../../Common/Helper';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {Dropdown} from 'react-native-element-dropdown';
const BankData = [
  {name: 'ICICI Bank', code: 'ICIC', id: 1},
  {name: 'State Bank of India', code: 'SBIN', id: 2},
  {name: 'Axis Bank', code: 'UTIB', id: 3},
  {name: 'Yes Bank', code: 'YESB', id: 4},
];
const WalletData = [
  {name: 'Airtel Money', id: 1, code: 'airtelmoney'},
  {name: 'amazonpay', id: 2, code: 'amazonpay'},
  {name: 'Free Charge', id: 3, code: 'freecharge'},
  {name: 'Jio Money', id: 4, code: 'jiomoney'},
  {name: 'Mobikwik', id: 5, code: 'mobikwik'},
  {name: 'Ola Money', id: 6, code: 'olamoney'},
  {name: 'Payzapp', id: 7, code: 'payzapp'},
  {name: 'Phonepe', id: 8, code: 'phonepe'},
];
var items = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Java',
  },
  {
    id: 3,
    name: 'Ruby',
  },
  {
    id: 4,
    name: 'React Native',
  },
  {
    id: 5,
    name: 'PHP',
  },
  {
    id: 6,
    name: 'Python',
  },
  {
    id: 7,
    name: 'Go',
  },
  {
    id: 8,
    name: 'Swift',
  },
];
const Payment = props => {
  const {razorpaymethod} = props;
  console.log(
    'razorpaymethodrazorpaymethodrazorpaymethodrazorpaymethodrazorpaymethod',
    razorpaymethod,
  );
  const [paymentMode, setPaymentMode] = useState([]);
  const [showlist, setshowlist] = useState([]);
  const [cartDetails, setcartDetails] = useState(null);
  const navigation = useNavigation();
  const openCheckout = (id, UDID, method, data, details,emid) => {
    // console.log('dataa6666666a', data.expiry.split('/')[0]);
    let options;

    if (method == 'card') {
      let card = {
        number: data.number,
        name: details?.user.name,
        expiry_month: Number(data.expiry.split('/')[0]),
        expiry_year: Number(data.expiry.split('/')[1]),
        cvv: Number(data.cvc),
      };
      options = {
        description: 'Payment for Fab india',
        currency: details?.totalPriceWithTax?.currencyIso,
        key_id: 'rzp_test_T70CWf6iJpuekL',
        amount: details?.totalPriceWithTax?.value * 100,
        email: details?.user?.uid,
        contact: details?.deliveryAddress?.phone,
        order_id: id.orderId,
        method: method,
        card: card,
      };
    } else if (method == 'netbanking') {
      options = {
        description: 'Payment for Fab india',
        currency: details?.totalPriceWithTax?.currencyIso,
        key_id: 'rzp_test_T70CWf6iJpuekL',
        amount: details?.totalPriceWithTax?.value * 100,
        email: details?.user?.uid,
        contact: details?.deliveryAddress?.phone,
        order_id: id.orderId,
        method: method,
        bank: data.code,
      };
    } else if (method == 'emi'){
      let card = {
        number: data.number,
        name: details?.user.name,
        expiry_month: Number(data.expiry.split('/')[0]),
        expiry_year: Number(data.expiry.split('/')[1]),
        cvv: Number(data.cvc),
      };
      options = {
        description: 'Payment for Fab india',
        currency: details?.totalPriceWithTax?.currencyIso,
        key_id: 'rzp_test_T70CWf6iJpuekL',
        amount: details?.totalPriceWithTax?.value * 100,
        email: details?.user?.uid,
        contact: details?.deliveryAddress?.phone,
        order_id: id.orderId,
        method: method,
        emi_duration: emid.duration,
        card: card,
      };
    }
    
    else if (method == 'wallet') {
      options = {
        description: 'Payment for Fab india',
        currency: details?.totalPriceWithTax?.currencyIso,
        key_id: 'rzp_test_T70CWf6iJpuekL',
        amount: details?.totalPriceWithTax?.value * 100,
        email: details?.user?.uid,
        contact: details?.deliveryAddress?.phone,
        order_id: id.orderId,
        method: method,
        wallet: data.code,
      };
    } else if (method == 'upi') {
      options = {
        description: 'Payment for Fab india',
        currency: details?.totalPriceWithTax?.currencyIso,
        key_id: 'rzp_test_T70CWf6iJpuekL',
        amount: details?.totalPriceWithTax?.value * 100,
        email: details?.user?.uid,
        contact: details?.deliveryAddress?.phone,
        order_id: id.orderId,
        method: method,
        vpa: data,
      };
    }

    console.log('optionsoptionsoptions00000', JSON.stringify(options));
    // RazorpayCheckout.open(options)
    //   .then(data => {
    //     // handle success
    //     console.log('Razorpay==>', JSON.stringify(data));
    //     navigation.navigate('OrderConfirmation', {
    //       amount: details?.totalPriceWithTax?.value,
    //       addressData: details,
    //       UDID: UDID,
    //     });
    //     // alert(`Success: ${data.razorpay_payment_id}`);
    //   })
    //   .catch(error => {
    //     console.log('error==>', JSON.stringify(error));
    //   });
    Razorpay.open(options)
      .then(data => {
        navigation.navigate('OrderConfirmation', {
          amount: details?.totalPriceWithTax?.value,
          addressData: details,
          UDID: UDID,
        });
      })
      .catch(error => {
        console.log(`Error: ${error.code} | ${error.description}`);
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  const getDetails = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const type = getToken.isCheck ? 'current' : 'anonymous';
    console.log('this us cart id a', getToken);
    const response = await axios.get(
      `${BaseURL2}/users/${type}/carts/${getCartID}?fields=DEFAULT,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    if (response.status == 200) {
      console.log(
        'response.datresponse.dataresponse.dataresponse.dataagetDetailsgetDetailsgetDetailsgetDetailsgetDetailsgetDetailsgetDetailsgetDetailsgetDetails',
        response.data,
      );
      setcartDetails(response.data);
      return response.data;
    }
  };
  const getOrderID = async (method, data,circlepoint) => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart id', getCartID);
    const response = await axios.get(
      `${BaseURL2}/users/current/carts/${getCartID}/payment/razorpay/orderid/request?lang=en&curr=INR`,
      // {},
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
          // Authorization: `bearer CfQZ6-rE0ngL8o-Yxu5-XQTS4YE`
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
    openCheckout(response.data, UDID, method, data, details,circlepoint);
  };
  const getUDID = async () => {
    console.log('udiddddddd');
    const getCartID = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);

    const response = await axios.get(
      `${BaseURL2}/users/current/carts/${getCartID}/payment/razorpay/callback/url?lang=en&curr=INR`,
      // {},
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
          // Authorization: `bearer CfQZ6-rE0ngL8o-Yxu5-XQTS4YE`
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
    const [State, SetState] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
      let formatedData = Object.entries(razorpaymethod.netbanking);
      let final = [];
      formatedData.map(el => {
        let ob = {
          label: el[1],
          code: el[0],
        };
        final.push(ob);
      });
      console.log('finallllllllllllllllll', final);
      setData(final);
    }, []);
    const renderLabel = () => {
      if (isFocus) {
        return (
          <Text style={[style.label, isFocus && {color: 'blue'}]}>State</Text>
        );
      }
      return null;
    };
    console.log(
      'razorpaymethodrazorpaymethodrazorpaymethodashish',
      razorpaymethod.netbanking,
    );
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
                {bank.id == item.id ? (
                  <View
                    style={{
                      backgroundColor: Colors.primarycolor,
                      width: 14,
                      height: 14,
                      borderRadius: 10,
                    }}
                  />
                ) : null}
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
        <View style={{marginTop: 10}}>
          <Dropdown
            style={{
              height: 50,
              paddingHorizontal: 8,
              paddingBottom: 0,
              borderBottomWidth: 0.8,
              borderBottomColor: '#ababab',
              marginBottom: 10,
            }}
            placeholderStyle={{fontSize: 16, fontFamily: Fonts.Assistant400}}
            selectedTextStyle={{fontSize: 16, fontFamily: Fonts.Assistant400}}
            inputSearchStyle={{fontSize: 16, fontFamily: Fonts.Assistant400}}
            iconStyle={{width: 20, height: 20}}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="label"
            placeholder={!isFocus ? 'Select Bank' : '...'}
            searchPlaceholder="Search..."
            value={State}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setBank(item);
              setIsFocus(false);
            }}
          />
        </View>

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
                borderColor:
                  wallet.id == item.id ? Colors.primarycolor : 'white',
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
                {wallet.id == item.id ? (
                  <View
                    style={{
                      backgroundColor: Colors.primarycolor,
                      width: 14,
                      height: 14,
                      borderRadius: 10,
                    }}
                  />
                ) : null}
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
    const [verify, setVerify] = useState(false);
    const [trID, setTrID] = useState(false);
    const [otp, setOtp] = useState(null);

    const orderPlace = async () => {
      console.log('orderPlaceorderPlaceorderPlaceCashondelivery');
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      const getCartID = await AsyncStorage.getItem('cartID');
      console.log('this us cart id', getToken);
      const response = await axios
        .post(
          `${BaseURL2}/users/current/placeOrder?fields=DEFAULT,deliveryAddress(FULL)&cartId=${getCartID}&termsChecked=true&lang=en&curr=INR`,
          {},
          {
            headers: {
              Authorization: `${getToken.token_type} ${getToken.access_token}`,
            },
          },
        )
        .then(response => {
          console.log(
            'orderPlaceorderPlaceorderPlaceorderPlace',
            response.data,
          );
          if (response.data) {
            navigation.navigate('OrderConfirmation', {
              type: 'cod',
            });
          }
        })
        .catch(error => {
          console.log('errorr', error);
        });
    };
    const generateOTP = async () => {
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      const getCartID = await AsyncStorage.getItem('cartID');
      console.log('this us cart id', getCartID);
      const response = await axios.get(
        `${BaseURL2}/users/current/carts/${getCartID}/otp/generate?fields=DEFAULT&lang=en&curr=INR`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      );
      console.log(
        'generateOTPgenerateOTPgenerateOTPgenerateOTPgenerateOTP',
        response.data,
      );
      if (response.data) {
        setVerify(true);
        setTrID(response.data?.transactionId);
      }
    };

    const verifyOTP = async () => {
      console.log(
        'otp transaction , amount',
        otp,
        trID,
        cartDetails?.totalAmountToPay?.value,
      );
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      const getCartID = await AsyncStorage.getItem('cartID');
      console.log('this us cart idverifyOTPverifyOTPverifyOTP', getCartID);
      const response = await axios.post(
        `${BaseURL2}/users/current/carts/${getCartID}/payment/cod/otp/verify/request?fields=DEFAULT&lang=en&curr=INR`,
        {
          otp: otp,
          transactionId: trID,
          amount: cartDetails?.totalAmountToPay?.value, //(cod => cart amount, baki dono me wallet amount)
          // "walletBal": "5000.0" only for gift card (giftcard) (loyalitypoints)
        },
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      );
      console.log(
        'generateOTPgenerateOTPgenerateOTPgenerateOTPgenerateOTP',
        response.data,
      );
      if (response.data?.success) {
        orderPlace();
      }
    };
    return (
      <View style={{}}>
        {!verify ? (
          <>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Fonts.Assistant400,
                  paddingVertical: 15,
                }}>
                You will receive an OTP on your mobile number{' '}
                {cartDetails?.deliveryAddress?.cellphone}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Fonts.Assistant400,
                  paddingVertical: 15,
                }}>
                Please use this OTP to continue with the transaction
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                generateOTP();
              }}
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: Colors.primarycolor,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <Text style={{color: Colors.primarycolor}}>Generate OTP</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Fonts.Assistant400,
                  paddingTop: 15,
                }}>
                Please use this OTP to continue with the transaction
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Fonts.Assistant400,
                  paddingVertical: 15,
                }}>
                Not received? Resend OTP
              </Text>
              <View>
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
                    textAlign: 'center',
                  }}
                  keyboardType="numeric"
                  value={otp}
                  placeholder="Enter 4-Digit OTP"
                  onChangeText={value => setOtp(value)}
                  placeholderTextColor="grey"
                  disableFullscreenUI={true}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginBottom: 20,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setVerify(false);
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
                  <Text style={{color: 'white'}}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    verifyOTP();
                  }}
                  style={{
                    backgroundColor: otp ? Colors.primarycolor : 'lightgrey',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 20,
                    borderRadius: 20,
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                  }}>
                  <Text style={{color: 'white'}}>Confirm Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };
  const Loyalitypoints = () => {
    const [points, setPoints] = useState('');
    const [balance, setBalance] = useState('');
    const [showotop, setShowotp] = useState(false);
    const [otp, setOtp] = useState(null);
    const [trID, setTrID] = useState(false);
    const getLoyalityPoints = async () => {
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      const response = await axios
        .get(`${BaseURL2}/users/current/loyalityPoints?lang=en&curr=INR`, {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        })
        .then(response => {
          console.log('in the then response', response.data);
          setBalance(response.data.balances[0]);
        })
        .catch(error => {
          console.log('in the catch error', error);
        });
    };
    useEffect(() => {
      getLoyalityPoints();
    }, []);
    const generateOTP = async () => {
      setShowotp(true);
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      const getCartID = await AsyncStorage.getItem('cartID');
      console.log('this us cart id', getCartID);
      const response = await axios.get(
        `${BaseURL2}/users/current/carts/${getCartID}/otp/generate?fields=DEFAULT&lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      );
      console.log(
        'generateOTPgenerateOTPgenerateOTPgenerateOTPgenerateOTP',
        response.data,
      );
      if (response.data) {
        setTrID(response.data?.transactionId);
      }
    };
    const verfiyOTP = async () => {
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      const getCartID = await AsyncStorage.getItem('cartID');
      console.log('this us cart idverifyOTPverifyOTPverifyOTP', getCartID);
      const response = await axios.post(
        `${BaseURL2}/users/current/carts/${getCartID}/payment/loyalitypoints/otp/verify/request?fields=DEFAULT&lang=en&curr=INR`,
        {
          otp: otp,
          transactionId: trID,
          amount: balance, //(cod => cart amount, baki dono me wallet amount)
          // "walletBal": "5000.0" only for gift card (giftcard) (loyalitypoints)
        },
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      ).then((response)=>{
        console.log("errr99999r",response.data)

        if (response.data?.success) {
          orderPlace();
        } else {
          Toast.showWithGravity(
            ' Sorry Insufficient balance',
            Toast.LONG,
            Toast.TOP,
          );
          setShowotp(false);
        }
      }).catch((err)=>{
        console.log("errrr",err.response.data.errors[0])
        Toast.showWithGravity(
          err.response.data.errors[0].message,
          Toast.LONG,
          Toast.TOP,
        );
        setShowotp(false);
      })
    };
    const orderPlace = async () => {
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      const getCartID = await AsyncStorage.getItem('cartID');
      console.log('this us cart id', getCartID);
      const response = await axios.post(
        `${BaseURL2}/users/current/placeOrder?fields=DEFAULT%2CdeliveryAddress(FULL)&cartId=${getCartID}&termsChecked=true&lang=en&curr=INR`,
        {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      );
      console.log(
        'generateOTPgenerateOTPgenerateOTPgenerateOTPgenerateOTP',
        response.data,
      );
      if (response.data) {
        console.log('successs order place ');
        // navigation.navigate('OrderConfirmation', {
        //   type: 'cod',
        // });
      }
    };
    return (
      <View style={{}}>
        <View style={{margin: 20}}>
          <Text style={{color: 'black'}}>
            Available Balance : {balance.balanceCurrencyAmount}
          </Text>
          <Text style={{color: 'black', marginTop: 20}}>
            Mobile Number : {cartDetails?.deliveryAddress?.cellphone}
          </Text>
          {showotop ? (
            <>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: Fonts.Assistant400,
                    paddingTop: 15,
                  }}>
                  One Time Password (OTP) has been sent successfully to your
                  mobile number
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: Fonts.Assistant400,
                    paddingVertical: 15,
                  }}>
                  Note: This OTP will be valid only for 15 minutes. Your points
                  will be released again if order is not placed in this time
                  frame
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: Fonts.Assistant400,
                    paddingVertical: 15,
                  }}>
                  Not received? Resend OTP
                </Text>
              </View>
              <View>
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
                    textAlign: 'center',
                  }}
                  keyboardType="numeric"
                  value={otp}
                  placeholder="Enter 4-Digit OTP"
                  onChangeText={value => setOtp(value)}
                  placeholderTextColor="grey"
                  disableFullscreenUI={true}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginBottom: 20,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setShowotp(false);
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
                  <Text style={{color: 'white'}}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    verfiyOTP();
                  }}
                  style={{
                    backgroundColor: otp ? Colors.primarycolor : 'lightgrey',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 20,
                    borderRadius: 20,
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                  }}>
                  <Text style={{color: 'white'}}>Verify OTP</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : null}
        </View>
        {!showotop ? (
          <TouchableOpacity
            onPress={() => generateOTP()}
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
        ) : null}
      </View>
    );
  };
  const Giftcardwallet = () => {
    const [giftcard, setGiftcard] = useState(null);
    const [showcard, setShowcard] = useState(false);
    const [Balance, setBalance] = useState(null);
    const [pin, setPin] = useState(null);
    const [trID, setTrID] = useState(false);
    const [showotop, setShowotp] = useState(false);
    const [otp, setOtp] = useState(null);

    useEffect(() => {
      getWallet();
    }, []);

    const getWallet = async () => {
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      const getCartID = await AsyncStorage.getItem('cartID');
      console.log('this us cart id', getCartID);
      const response = await axios.get(
        `${BaseURL2}/users/current/getWallet?lang=en&curr=INR`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      );
      console.log('getWalletgetWalletgetWalletgetWallet', response.data);
      if (response.data) {
        setBalance(response.data?.totalBalance);
      }
    };

    const addCard = async () => {
      setShowcard(true);
      if (giftcard && pin) {
        console.log('iffffffffffffff');
        const get = await AsyncStorage.getItem('generatToken');
        const getToken = JSON.parse(get);
        const getCartID = await AsyncStorage.getItem('cartID');
        const response = await axios.post(
          `${BaseURL2}/users/current/addGiftCard?lang=en&curr=INR`,
          {
            cardNumber: giftcard,
            cardPin: pin,
          },
          {
            headers: {
              Authorization: `${getToken.token_type} ${getToken.access_token}`,
            },
          },
        );
        console.log(
          'addCardaddCardaddCardaddCardt00000000000000000000000',
          response.data,
        );
        if (response.data.responseCode != 10004) {
          getWallet();
          setShowcard(false);
        }
      } else {
        Toast.showWithGravity(
          response.data.responseMessage,
          Toast.LONG,
          Toast.TOP,
        );
      }
    };
    const Otpgenrate = async () => {
      setShowotp(true);
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      const getCartID = await AsyncStorage.getItem('cartID');
      console.log('this us cart id', getCartID);
      const response = await axios.get(
        `${BaseURL2}/users/current/carts/${getCartID}/otp/generate?fields=DEFAULT&lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      );
      console.log(
        'generateOTPgenerateOTPgenerateOTPgenerateOTPgenerateOTP',
        response.data,
      );
      if (response.data) {
        setTrID(response.data?.transactionId);
      }
    };
    const verfiyOTP = async () => {
      console.log('otp , trID ,Balance0', otp, trID, Balance);
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      const getCartID = await AsyncStorage.getItem('cartID');
      console.log('this us cart idverifyOTPverifyOTPverifyOTP', getCartID);
      const response = await axios
        .post(
          `${BaseURL2}/users/current/carts/${getCartID}/payment/giftcard/otp/verify/request?fields=DEFAULT&lang=en&curr=INR`,
          {
            otp: otp,
            transactionId: trID,
            amount: Balance, //(cod => cart amount, baki dono me wallet amount)
            // "walletBal": "5000.0" only for gift card (giftcard) (loyalitypoints)
          },
          {
            headers: {
              Authorization: `${getToken.token_type} ${getToken.access_token}`,
            },
          },
        )
        .then(response => {
          if (response.data?.success) {
            orderPlace();
          } else {
            Toast.showWithGravity(
              ' Sorry Insufficient balance',
              Toast.LONG,
              Toast.TOP,
            );
            setShowotp(false);
          }
        })
        .catch(error => {
          console.log('error', error.response.data.errors[0].message);
          Toast.showWithGravity(
            error.response.data.errors[0].message,
            Toast.LONG,
            Toast.TOP,
          );
        });
    };
    const orderPlace = async () => {
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      const getCartID = await AsyncStorage.getItem('cartID');
      console.log('this us cart id', getCartID);
      const response = await axios.post(
        `${BaseURL2}/users/current/placeOrder?fields=DEFAULT%2CdeliveryAddress(FULL)&cartId=${getCartID}&termsChecked=true&lang=en&curr=INR`,
        {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      );
      console.log(
        'generateOTPgenerateOTPgenerateOTPgenerateOTPgenerateOTP',
        response.data,
      );
      if (response.data) {
        console.log('successs order place ');
        // navigation.navigate('OrderConfirmation', {
        //   type: 'cod',
        // });
      }
    };
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
            <Text> ₹ {Balance}</Text>
          </Text>
        </View>
        {showotop ? (
          <>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Fonts.Assistant400,
                  paddingTop: 15,
                }}>
                One Time Password (OTP) has been sent successfully to your
                mobile number
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Fonts.Assistant400,
                  paddingVertical: 15,
                }}>
                Note: This OTP will be valid only for 15 minutes. Your points
                will be released again if order is not placed in this time frame
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Fonts.Assistant400,
                  paddingVertical: 15,
                }}>
                Not received? Resend OTP
              </Text>
            </View>
            <View>
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
                  textAlign: 'center',
                }}
                keyboardType="numeric"
                value={otp}
                placeholder="Enter 4-Digit OTP"
                onChangeText={value => setOtp(value)}
                placeholderTextColor="grey"
                disableFullscreenUI={true}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginBottom: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setShowotp(false);
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
                <Text style={{color: 'white'}}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  verfiyOTP();
                }}
                style={{
                  backgroundColor: otp ? Colors.primarycolor : 'lightgrey',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 20,
                  borderRadius: 20,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}>
                <Text style={{color: 'white'}}>Verify OTP</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : null}
        {showcard ? (
          <>
            <View style={{marginHorizontal: 20}}>
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
                  marginTop: 10,
                }}
                value={pin}
                placeholder="Pin"
                onChangeText={value => setPin(value)}
                placeholderTextColor="grey"
                disableFullscreenUI={true}
              />
            </View>
          </>
        ) : null}
        {!showotop ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                !showcard ? Otpgenrate() : setShowcard(false);
              }}
              style={{
                backgroundColor: !showcard ? '#BDBDBD' : 'white',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 20,
                borderColor: Colors.primarycolor,
                borderWidth: 1,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <Text style={{color: Colors.primarycolor}}>
                {!showcard ? 'Redeem' : 'Cancel'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                addCard();
              }}
              style={{
                backgroundColor:
                  !showcard || (giftcard && pin)
                    ? Colors.primarycolor
                    : '#BDBDBD',
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
        ) : null}
      </View>
    );
  };
  const EMIdata = () => {
    const [card, setcard] = useState(null);
    const [State, SetState] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState([]);
    const [circlepoint,setCirclepoint] = useState(null)

    useEffect(() => {
      let formatedData = Object.entries(razorpaymethod.emi_options);
      let final = [];
      formatedData.map(el => {
        let ob = {
          label: el[0],
          value: el[1],
        };
        final.push(ob);
      });
      console.log('finallllllllll_______llllllll', final);
      setData(final);
    }, []);

    const _onChange = formData => {
      if (formData.valid) {
        setcard(formData.values);
      }

      // console.log(JSON.stringify(formData, null, ' '), 'hiiiiiiiiiiii');
    };
    const renderLabel = () => {
      if (isFocus) {
        return (
          <Text style={[style.label, isFocus && {color: 'blue'}]}>State</Text>
        );
      }
      return null;
    };
    const _onFocus = field => console.log('focusing', field);

    console.log('_____________', selected);

    return (
      <View style={{backgroundColor: 'white'}}>
        <View style={{marginTop: 10}}>
          <Dropdown
            style={{
              height: 50,
              paddingHorizontal: 8,
              paddingBottom: 0,
              borderBottomWidth: 0.8,
              borderBottomColor: '#ababab',
              marginBottom: 10,
            }}
            placeholderStyle={{fontSize: 16, fontFamily: Fonts.Assistant400}}
            selectedTextStyle={{fontSize: 16, fontFamily: Fonts.Assistant400}}
            inputSearchStyle={{fontSize: 16, fontFamily: Fonts.Assistant400}}
            iconStyle={{width: 20, height: 20}}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="label"
            placeholder={!isFocus ? 'Select Bank' : '...'}
            searchPlaceholder="Search..."
            value={State}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setSelected(item.value);
              // setIsFocus(false);
            }}
          />
        </View>
        {selected.length ? (
          <View style={{marginVertical:15}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#ABABAB',
                borderBottomWidth: 3,
                borderBottomColor: '#222',
              }}>
              <View
                style={{
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 20,
                }}>
                <Text>Plans</Text>
              </View>
              <View
                style={{
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 20,
                }}>
                <Text>Interests</Text>
              </View>
            </View>
            {selected.map((item, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: index % 2 == 0 ? '#f6f6f6' : '#fff',
                  }}>
                  
                  <View
                    style={{
                      width: '50%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection:'row',
                      paddingVertical: 20,
                      borderBottomWidth: 0.8,
                      borderLeftWidth: 0.8,
                    }}>
                      <TouchableOpacity
                       onPress={()=>{
                        setCirclepoint(item)
                       }}
                    style={{
                      borderWidth: 1,
                      borderColor: Colors.primarycolor,
                      width: 20,
                      height: 20,
                      marginRight:15,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {circlepoint?.duration == item?.duration ? (
                      <View
                        style={{
                          backgroundColor: Colors.primarycolor,
                          width: 14,
                          height: 14,
                          borderRadius: 10,
                        }}
                      />
                    ) : null}
                  </TouchableOpacity>
                    <Text>{item.duration}</Text>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 20,
                      borderWidth: 0.8,
                      borderTopWidth: 0,
                    }}>
                    <Text>{item.interest}%</Text>
                  </View>
                </View>
              );
            })}
          </View>
        ) : null}
        <LiteCreditCardInput
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
            getOrderID('emi', card,circlepoint);
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
    {
      id: 5,
      name: 'EMI',
      IconName: 'credit-card',
      subItem: React.createElement(React.memo(EMIdata)),
    },
  ];

  useEffect(() => {
    asyncfunc();
  }, []);
  const asyncfunc = async () => {
    await getDetails();
    await paymentModes();
  };

  const paymentModes = async () => {
    const getCartID = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);

    const response = await axios.get(
      `${BaseURL2}/users/current/carts/${getCartID}/paymentModes?fields=DEFAULT`,
      // {},
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    console.log(
      'response.data.paymentModes',
      response.data.paymentModes,
      getToken,
      getCartID,
    );

    setPaymentMode(response.data.paymentModes);
    let filter = response.data.paymentModes.filter(el => {
      return el.name != 'RAZORPAY';
    });
    console.log('filterfilterfilterfilterfilterfilter', filter);
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
        console.log('el.nameel.name', el.name);
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
          default:
            return;
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
        <View style={{marginVertical: 5, marginHorizontal: 30}}>
          <View
            style={{borderBottomWidth: 1, paddingTop: 15, paddingBottom: 20}}>
            <Text style={{fontFamily: Fonts.Assistant700, fontSize: 18}}>
              {' '}
              ORDER SUMMARY
            </Text>
          </View>
          <Text
            style={{
              marginTop: 15,
              fontFamily: Fonts.Assistant400,
              fontSize: 17,
              color: 'black',
            }}>
            Price Details ({cartDetails?.deliveryItemsQuantity} items)
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 18,
            }}>
            <Text>Total MRP</Text>
            <Text>{cartDetails?.subTotalWithoutDiscount?.formattedValue}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text>discount on MRP</Text>
            <Text>{cartDetails?.productDiscounts?.formattedValue}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
              paddingTop: 15,
              paddingBottom: 28,
              marginBottom: 15,
            }}>
            <Text>Delivery Charges</Text>
            <Text>{cartDetails?.deliveryCost?.formattedValue}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 15,
            }}>
            <Text>Amount Payable</Text>
            <Text>{cartDetails?.totalAmountToPay?.formattedValue}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default React.memo(Payment);
