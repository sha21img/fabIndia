import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Modal} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Styles from './styles';
import {Colors} from '../../../../assets/Colors';
import CommonButton from '../../../Common/CommonButton';
import Fonts from '../../../../assets/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import RazorpayCheckout from 'react-native-razorpay';
import {logout} from '../../../Common/Helper';
import {useDispatch} from 'react-redux';
const faqs = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
];
const MyAddresses = props => {
  const {
    checkaddress,
    getCheckAddress,
    amount,
    totalquantity,
    setCurrentPosition,
  } = props;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [peritem, setPeritem] = useState(null);
  const [selected, setSelected] = useState('');

  const handleClick = async id => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios
      .delete(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/addresses/${id}`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        getCheckAddress();
        setModalShow(false);
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  const setDeliveryAddress = async id => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const response = await axios
      .put(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}/addresses/delivery?addressId=${id}`,
        {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {})
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  // const openCheckout = (data, UDID) => {
  //   console.log(
  //     'selectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselected',
  //     data.orderId,
  //   );
  //   console.log(
  //     'selectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselectedselected',
  //     UDID,
  //   );
  //   var options = {
  //     description: 'Payment for Fab india',
  //     image: 'https://i.imgur.com/3g7nmJC.png',
  //     currency: 'INR',
  //     // callback_url: UDID,
  //     // redirect: true,
  //     key: 'rzp_test_T70CWf6iJpuekL',
  //     amount: amount * 100,
  //     name: 'FAB India',
  //     orderId: data.orderId,
  //     prefill: {
  //       email: selected.email,
  //       contact: selected.phone,
  //       name: selected.firstName,
  //     },
  //     theme: {color: Colors.primarycolor},
  //   };
  //   console.log("optionsoptionsoptions", JSON.stringify(options))
  //   RazorpayCheckout.open(options)
  //     .then(data => {
  //       // handle success
  //       console.log('Razorpay==>', JSON.stringify(data));
  //       props.navigation.navigate('OrderConfirmation', {
  //         amount: amount,
  //         addressData: selected,
  //         UDID: UDID,
  //       });
  //       // alert(`Success: ${data.razorpay_payment_id}`);
  //     })
  //     .catch(error => {
  //       // handle failure
  //       console.log('error==>', JSON.stringify(error));
  //       // alert(`Error: ${error.code} | ${error.description}`);
  //     });
  // };
  // const getOrderID = async () => {
  //   const get = await AsyncStorage.getItem('generatToken');
  //   const getToken = JSON.parse(get);
  //   const getCartID = await AsyncStorage.getItem('cartID');
  //   console.log('this us cart id', getCartID);
  //   const response = await axios.get(
  //     `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}/payment/razorpay/orderid/request?lang=en&curr=INR`,
  //     // {},
  //     {
  //       headers: {
  //         Authorization: `${getToken.token_type} ${getToken.access_token}`,
  //       },
  //     },
  //   );
  //   console.log(
  //     'handleClickhandleClickhandleClickhandleClickhandleClickhandleClickhandleClick',
  //     response.data,
  //   );
  //   await paymentModes();
  //   const UDID = await getUDID();
  //   openCheckout(response.data, UDID);
  // };
  // const paymentModes = async () => {
  //   const getCartID = await AsyncStorage.getItem('cartID');
  //   const get = await AsyncStorage.getItem('generatToken');
  //   const getToken = JSON.parse(get);

  //   const response = await axios.get(
  //     `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}/paymentModes?fields=DEFAULT`,
  //     // {},
  //     {
  //       headers: {
  //         Authorization: `${getToken.token_type} ${getToken.access_token}`,
  //       },
  //     },
  //   );
  //   console.log(
  //     'paymentModespaymentModespaymentModespaymentModespaymentModespaymentModespaymentModes',
  //     response.data,
  //   );
  // };
  // const getUDID = async () => {
  //   const getCartID = await AsyncStorage.getItem('cartID');
  //   const get = await AsyncStorage.getItem('generatToken');
  //   const getToken = JSON.parse(get);

  //   const response = await axios.get(
  //     `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}/payment/razorpay/callback/url?lang=en&curr=INR`,
  //     // {},
  //     {
  //       headers: {
  //         Authorization: `${getToken.token_type} ${getToken.access_token}`,
  //       },
  //     },
  //   );
  //   console.log(
  //     'getUDIDgetUDIDgetUDIDgetUDIDgetUDIDgetUDIDgetUDIDgetUDIDgetUDIDgetUDID',
  //     response.data,
  //   );
  //   return response.data;
  // };
  return (
    <>
      <ScrollView
        contentContainerStyle={Styles.container}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <Text style={Styles.headingtxt}>Saved Addresses</Text>
        <View style={Styles.body}>
          {checkaddress?.addresses?.map((faq, index) => (
            <>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  setDeliveryAddress(faq.id);
                  setSelected(prev => (prev == faq ? '' : faq));
                }}
                style={[
                  Styles.txtbox,
                  {
                    marginBottom: faq.length - 1 == index ? 0 : 15,
                    borderColor: selected.id == faq.id ? 'red' : '#ababab',
                    borderWidth: 1,
                  },
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={Styles.mainDivText}>
                    Home{faq.defaultAddress ? '(Default)' : null}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      setShow(prev => (prev != faq.id ? faq.id : ''))
                    }>
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      color={Colors.textcolor}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
                {show == faq.id ? (
                  <View style={Styles.modalbox}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('Address', {editData: faq});
                        setShow(false);
                      }}>
                      <Text style={Styles.edittxt}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setModalShow(true);

                        setPeritem(faq);
                        setShow(false);
                      }}>
                      <Text style={Styles.deletetxt}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
                <Text style={Styles.titletxt}>
                  {faq.firstName} {faq.lastName}
                </Text>
                <Text style={Styles.titletxt}>{faq.line1}</Text>
                <Text style={Styles.titletxt}>{faq.line2}</Text>
                <Text style={Styles.titletxt}>
                  {faq.town} {faq.postalCode}
                </Text>
                <Text style={Styles.titletxt}>Mobile - {faq.phone}</Text>
              </TouchableOpacity>
            </>
          ))}
        </View>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => props.navigation.navigate('Address')}>
          <Entypo
            name="circle-with-plus"
            color={Colors.primarycolor}
            size={20}
          />
          <Text style={Styles.addbtntxt}>Add a new Addresses</Text>
        </TouchableOpacity>
        <View style={{marginVertical: 5, marginHorizontal: 15}}>
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
            Price Details ({totalquantity} items)
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 18,
            }}>
            <Text>Total MRP</Text>
            <Text>24,980</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text>discount on MRP</Text>
            <Text>-8,393</Text>
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
            <Text>0</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 15,
            }}>
            <Text>Amount Payable</Text>
            <Text>₹{amount}</Text>
          </View>
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
          txt="Continue"
          customViewStyle={{
            backgroundColor: !!selected ? Colors.primarycolor : '#BDBDBD',
          }}
          // handleClick={getOrderID}
          handleClick={() => setCurrentPosition(prev => prev + 1)}
          disable={!!!selected}
        />
      </View>

      <Modal
        visible={modalShow}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={Styles.modalcontainer}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              elevation: 5,
              borderRadius: 4,
              paddingHorizontal: 15,
              paddingVertical: 10,
              width: '100%',
              // right: '9%',
              top: '35%',
            }}>
            <View style={Styles.headbox}>
              <Text style={Styles.headtxt}>
                You are about to remove address!
              </Text>
              <TouchableOpacity onPress={() => setModalShow(false)}>
                <Ionicons name="close-circle-outline" size={15} />
              </TouchableOpacity>
            </View>
            <Text style={Styles.head1txt}>
              Are you sure you want to remove this Address?
            </Text>

            {/* ///---choose mode of return---/// */}

            {/* //--radio button--// */}
            {/* <RadioButtonRN
              animationTypes={['zoomIn']}
              circleSize={17}
              box={false}
              data={dataTwo}
              activeColor="maroon"
              selectedBtn={e => console.log(e)}
              style={{marginVertical: 9}}
            /> */}
            <View
              style={{
                paddingVertical: 15,
                width: '50%',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.Assistant700,
                  color: Colors.textcolor,
                }}>
                {peritem?.firstName} {peritem?.lastName}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.Assistant400,
                  color: Colors.textcolor,
                }}>
                {peritem?.line1} {peritem?.line2} {peritem?.town}{' '}
                {peritem?.postalCode}
              </Text>
            </View>
            <View
              style={{
                paddingVertical: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <CommonButton
                txt="Cancel"
                customViewStyle={{
                  backgroundColor: '#FFFFFF',
                  width: '47%',
                  borderWidth: 1,
                  borderColor: Colors.primarycolor,
                }}
                btntxtColor={Colors.primarycolor}
              />
              <CommonButton
                backgroundColor="#BDBDBD"
                txt="Remove address"
                customViewStyle={{
                  backgroundColor: Colors.primarycolor,
                  width: '47%',
                }}
                handleClick={() => handleClick(peritem?.id)}
              />
            </View>

            {/* <View
              style={{
                padding: 10,
                backgroundColor: '#FDFDFD',
              }}>
              <TouchableOpacity
                onPress={() => setModalShow(true)}
                style={{
                  backgroundColor: Colors.primarycolor,
                  borderRadius: 20,
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Assistant400,
                    fontSize: 16,
                    color: '#fff',
                    alignSelf: 'center',
                  }}>
                  Confirm return
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </Modal>
    </>
  );
};
export default MyAddresses;
