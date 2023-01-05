import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RadioButtonRN from 'radio-buttons-react-native';
import CommonButton from '../CommonButton';
import axios from 'axios';
import {BaseURL2, logout} from '../Helper';
import {useDispatch} from 'react-redux';
import WebView from 'react-native-webview';
export default function OrderProductLongCard(props) {
  const {
    data = {},
    status,
    orderID,
    getorderDetails,
    handliClick = null,
  } = props;
  const image = 'https://apisap.fabindia.com' + data.product.images[0].url;
  console.log(image);
  console.log('data?.status?.orderID', data.availableAction.name);
  // 20030719
  const dispatch = useDispatch();
  const [showmodal, setshowmodal] = useState(false);
  const [comment, setComment] = useState(null);
  const [radio, setRadio] = useState(null);
  // const [statusshow, setStatushow] = useState(data?.status?.name);
  const [returnshow, setreturnshow] = useState(false);
  const [exchangeshow, setexchangeshow] = useState(false);
  const [reasonData, setReasonData] = useState({});
  const [newReasonData, setNewReasonData] = useState([]);
  const [excludesReasonData, setExcludesReasonData] = useState([]);
  const [childreason, setChildreason] = useState([]);
  const [childRadio, setChildRadio] = useState([]);

  // useEffect(() => {
  //   const newStatus = data?.status?.name || null;
  //   setStatushow(newStatus);
  // }, []);
  const radiodata = [
    {
      label: 'Delay in Delivery',
      index: 0,
      reasonCode: 'CANCEL_INCORRECT_PRODUCT',
    },
    {
      label: 'Duplicate Order Placed',
      index: 1,
      reasonCode: 'CANCEL_INCORRECT_PRODUCT',
    },
    {
      label: 'Incorrect size/style/color ordered',
      index: 2,
      reasonCode: 'CANCEL_INCORRECT_PRODUCT',
    },
    {
      label: 'Found Better Price on other website/store',
      index: 3,
      reasonCode: 'CANCEL_INCORRECT_PRODUCT',
    },
    {
      label: 'Product not required anymore (change of mind)',
      index: 4,
      reasonCode: 'CANCEL_INCORRECT_PRODUCT',
    },
    {
      label: 'Others (Please specify)',
      index: 5,
      reasonCode: 'CANCEL_INCORRECT_PRODUCT',
    },
  ];
  const cancelorder = async () => {
    console.log('reasonData.quantity', reasonData.quantity);
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    console.log('orderIDorderIDorderIDorderID', data?.entryNumber);
    console.log('orderIDorderID', orderID);
    console.log('radio.reasonCoderadio.reasonCode', radio.reasonCode);
    console.log('radio.commentcommentcomment.reasonCode', comment);
    const response = await axios
      .post(
        `${BaseURL2}/users/current/orders/${orderID}/cancellation?lang=en&curr=INR`,
        {
          cancellationRequestEntryInputs: [
            {
              // orderEntryNumber: '0',
              // quantity: '1',
              // reasonCode: 'CANCEL_INCORRECT_PRODUCT',
              // reasonDescription: 'kok',
              orderEntryNumber: data?.entryNumber,
              quantity: reasonData.quantity,
              reasonCode: radio.reasonCode,
              reasonDescription: comment,
            },
          ],
        },
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
            // Authorization: `${getToken.token_type} B7vKxGVlrWBGKVNFDlUci2ZfXTM`,
          },
        },
      )
      .then(response => {
        setshowmodal(false);
        console.log(
          'responseresponseresponseresponseresponseresponseresponse',
          response.data,
        );
        props.navigation.navigate('OrderSuccess', {
          productId: data.product.code,
          orderID: orderID,
        });
        getorderDetails();
      })
      .catch(errors => {
        console.log('vicky,orderproductlongcard', errors);

        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  const exchangeorder = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    console.log('orderIDorderIDorderIDorderID', data?.entryNumber);
    const response = await axios
      .post(
        `${BaseURL2}/users/current/orderReturns?fields=DEFAULT`,
        {
          orderCode: data?.product?.code,
          returnRequestEntryInputs: [
            {
              orderEntryNumber: data?.entryNumber,
              quantity: 1,
              reasonCode: 'CANCEL_INCORRECT_PRODUCT',
              reasonDescription: comment,
            },
          ],
        },
        {
          headers: {
            Authorization: `${getToken.token_type} B7vKxGVlrWBGKVNFDlUci2ZfXTM`,
          },
        },
      )
      .then(response => {
        getorderDetails();
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  console.log('newReasonDatanewReasonData', newReasonData);
  // console.log(
  //   'data?.status?.namedata?.status?.namedata?.status?.namedata?.status?.name',
  //   data?.status?.name,
  // );

  // console.logg("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data)

  const reasonForCancel = async (entryNumber, data) => {
    console.log('entryNumbe.....................r', data);
    // const get = await AsyncStorage.getItem('generatToken');
    // const getToken = JSON.parse(get);
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    // 08045003
    await axios
      .post(
        `${BaseURL2}/users/current/orders/${orderID}/${entryNumber}/action?fields=FULL&lang=en&curr=INR`,
        {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
            // Authorization: `${getToken.token_type} B7vKxGVlrWBGKVNFDlUci2ZfXTM`,
          },
        },
      )
      .then(response => {
        console.log(
          '111getOrdersgetOrderdersgetOrdersgetOrdersget11111OrdtOrders',
          response.data.cancelEntries[0],
        );
        console.log(
          'response?.data?.availableAction?.reasonsresponse?.data?.availableAction?.reasons',
          response?.data?.availableAction?.reasons,
        );
        setReasonData(response.data.cancelEntries[0]);
        console.log('response?.data?.availableAction?.reasons', response?.data);

        if (data == 'Cancel') {
          const reason =
            !!response?.data?.availableAction?.reasons.length > 0 ||
            response?.data?.cancelEntries[0];
          console.log('reason', reason);
          const newReasonData = reason.availableAction.reasons.map(
            (item, index) => {
              return {
                label: item.name,
                index: index,
                reasonCode: item.code,
              };
            },
          );
          // const subReason=reason.availableAction.reason.map((item)=>{

          // })
          console.log('newReasonDatanewReasonData', newReasonData);
          setNewReasonData(newReasonData);
          setshowmodal(true);
        } else {
          const reason =
            !!response?.data?.availableAction?.reasons.length > 0 ||
            response?.data?.cancelEntries[0];
          console.log('reason ele wal', reason);
          const newReasonData = reason.availableAction.reasons.map(
            (item, index) => {
              return {
                label: item.name,
                index: index,
                reasonCode: item.code,
              };
            },
          );
          setExcludesReasonData(reason.availableAction.reasons);

          setNewReasonData(newReasonData);

          setreturnshow(true);
        }
      })
      .catch(error => {
        console.log('vicky,orderproductlongcard', error);

        if (error.response.status == 401) {
          logout(dispatch);
        }
        console.log(
          '222getOrdersgetOrderdersgetOrdersgetOrdersget11111OrdtOrders',
          error,
        );
      });

    // setOrders(response.data.orders);
  };
  console.log(
    'data?.product?.name.includes',
    data?.product?.name.includes('gift'),
  );
  const returnOrder = async () => {
    console.log('data?.entryNumber', data?.entryNumber);
    console.log('data?.entryNumber', radio.reasonCode);
    console.log('data?.entryNumber', childRadio.reasonCode);
    console.log('data?.entryNumber', reasonData.quantity);
    console.log('data?.entryNumber', comment);
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);

    axios
      .post(
        `${BaseURL2}/users/current/orderReturns?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name,code,baseOptions,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)&lang=en&curr=INR`,
        {
          orderCode: orderID,
          returnRequestEntryInputs: [
            {
              // orderEntryNumber: '0',
              // quantity: '1',
              // reasonCode: 'CANCEL_INCORRECT_PRODUCT',
              // reasonDescription: 'kok',
              orderEntryNumber: data?.entryNumber,
              parentReasonCode: radio.reasonCode,
              reasonCode: childRadio.reasonCode,
              quantity: reasonData.quantity,
              reasonDescription: comment,
            },
          ],
        },
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
            // Authorization: `${getToken.token_type} B7vKxGVlrWBGKVNFDlUci2ZfXTM`,
          },
        },
      )
      .then(response => {
        setreturnshow(false);
        console.log(
          'responseresponseresponseresponseresponseresponseresponse',
          response.data,
        );
        props.navigation.navigate('OrderSuccess', {
          productId: data.product.code,
          orderID: orderID,
        });
        getorderDetails();
      })
      .catch(errors => {
        console.log('vicky,orderproductlongcard', errors);

        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  const filterSubReason = data => {
    console.log('data111111111111111', data);
    const filteredChildReason = excludesReasonData?.find(item => {
      return item.code == data.reasonCode;
    });
    console.log('filteredChildReason', filteredChildReason);
    const sunReason = filteredChildReason?.subreasons?.map((item, index) => {
      return {
        label: item.name,
        index: index,
        reasonCode: item.code,
      };
    });
    setChildreason(sunReason);
  };
  return (
    <>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          elevation: 5,
          marginBottom: 10,
        }}>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingVertical: 10,
          }}>
          <TouchableOpacity
            style={{width: '25%'}}
            onPress={() =>
              props.navigation.navigate('ProductDetailed', {
                productId: data.product.code,
                imageUrlCheck: data,
              })
            }>
            <Image source={{uri: image}} style={{height: 100, width: 79}} />
            {/* <Text>hjg</Text> */}
          </TouchableOpacity>
          <View style={{width: '70%'}}>
            <Text
              style={{
                fontFamily: Fonts.Assistant400,
                fontSize: 14,
                lineHeight: 18,
                color: Colors.textcolor,
              }}>
              {data?.product?.name}
            </Text>
            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              {!data?.product?.name.includes('gift') && (
                <Text
                  style={{
                    marginRight: 10,
                    fontFamily: Fonts.Assistant400,
                    fontSize: 14,
                    lineHeight: 18,
                    color: Colors.textcolor,
                  }}>
                  Size{' '}
                  {
                    data?.product?.baseOptions[0]?.selected
                      ?.variantOptionQualifiers[1].value
                  }
                </Text>
              )}
              <Text
                style={{
                  marginRight: 10,
                  fontFamily: Fonts.Assistant400,
                  fontSize: 14,
                  lineHeight: 18,
                  color: Colors.textcolor,
                }}>
                Qty {data?.quantity}
              </Text>
            </View>
            <Text
              style={{
                marginRight: 10,
                fontFamily: Fonts.RupeeForadian,
                fontSize: 14,
                lineHeight: 19,
                color: Colors.textcolor,
              }}>
              {data?.totalPrice?.formattedValue}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                alignItems: 'center',
              }}>
              <View>
                {!!data?.status?.name && (
                  <Text
                    style={{
                      color:
                        data?.status?.name == 'Cancelled'
                          ? 'red'
                          : data?.status?.name == 'Delivered'
                          ? '#a3b779'
                          : 'orange',
                      fontSize: 14,
                      fontFamily: Fonts.Assistant700,
                      lineHeight: 18,
                    }}>
                    {data.status.name}
                  </Text>
                )}

                {/* {!!statusshow ? statusshow : null} */}
                {/* <Text>Arriving by Friday, 14 May</Text> */}
              </View>
            </View>
          </View>
        </View>
        {data.availableAction.name !== 'No Action' && (
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              alignItems: 'center',
              backgroundColor: '#FAFAFA',
              justifyContent: 'center',
            }}
            onPress={() => {
              // props.navigation.navigate('OrderSuccess');
              reasonForCancel(data.entryNumber, data.availableAction.name);
            }}>
            <Text
              style={{
                fontFamily: Fonts.Assistant600,
                fontSize: 14,
                lineHeight: 18,
                color: Colors.textcolor,
              }}>
              {data.availableAction.name}
            </Text>
          </TouchableOpacity>
        )}
        {/* {statusshow === 'Cancelled' ? null : status == 'processing' ? (
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              alignItems: 'center',
              backgroundColor: '#FAFAFA',
              justifyContent: 'center',
            }}
            onPress={() => {
              // setshowmodal(true);
              reasonForChange(data.entryNumber);
            }}>
            <Text
              style={{
                fontFamily: Fonts.Assistant600,
                fontSize: 14,
                lineHeight: 18,
                color: Colors.textcolor,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              paddingVertical: 10,
              alignItems: 'center',
              backgroundColor: '#FAFAFA',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => setreturnshow(true)}
              style={{
                width: '100%',
                alignItems: 'center',
                borderRightWidth: 1,
                borderRightColor: '#BDBDBD',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Assistant600,
                  fontSize: 14,
                  lineHeight: 18,
                  color: Colors.textcolor,
                }}>
                Return
              </Text>
            </TouchableOpacity>
          </View>
        )} */}
      </View>

      {/* cancel */}
      <Modal
        visible={showmodal}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={{flexGrow: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <ScrollView
            style={{
              backgroundColor: 'white',
              elevation: 5,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginTop: '45%',
              width: '100%',
              // height: '80%',
            }}>
            <View style={{margin: 10, paddingBottom: 20}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontFamily: Fonts.Assistant700, fontSize: 16}}>
                  You are about to cancel this item!
                </Text>
                <TouchableOpacity onPress={() => setshowmodal(false)}>
                  <Ionicons name="close-circle-outline" size={24} />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  paddingVertical: 15,
                  fontFamily: Fonts.Assistant400,
                  fontSize: 14,
                }}>
                Are you sure you want to cancel the item{' '}
                <Text style={{fontFamily: Fonts.Assistant700, fontSize: 14}}>
                  {data?.product?.name}?
                </Text>
              </Text>
              <Text>
                {' '}
                If yes, do let us know why so we can serve you better the next
                time!
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 15,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons
                    name="arrow-back-circle-outline"
                    color={Colors.primarycolor}
                    size={20}
                  />

                  <Text style={{paddingLeft: 10, color: Colors.textcolor}}>
                    Eligible for Cancellation
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('ViewPolicy');
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.Assistant400,
                      color: Colors.primarycolor,
                      fontSize: 16,
                    }}>
                    View Policy
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{paddingVertical: 18}}>
                <TextInput
                  numberOfLines={3}
                  placeholder="Write your Comment"
                  multiline
                  onChangeText={text => {
                    setComment(text);
                  }}
                  value={comment}
                  style={{
                    borderWidth: 1,
                    borderColor: '#979797',
                    borderRadius: 4,
                    marginHorizontal: 15,
                    paddingHorizontal: 15,
                    textAlignVertical: 'top',
                  }}
                />
              </View>
              <Text
                style={{
                  paddingVertical: 15,
                  fontFamily: Fonts.Assistant400,
                  fontSize: 14,
                }}>
                {' '}
                Reason for cancellation
              </Text>
              <RadioButtonRN
                animationTypes={['zoomIn']}
                circleSize={17}
                box={false}
                data={newReasonData}
                activeColor={Colors.primarycolor}
                selectedBtn={e => {
                  console.log('e1111111111111111111111111', e);
                  setRadio(e);
                }}
                style={{marginVertical: 9}}
              />
              <CommonButton
                backgroundColor="#BDBDBD"
                txt="Submit"
                customViewStyle={{
                  backgroundColor:
                    !!comment && !!radio ? Colors.primarycolor : 'lightgrey',
                  marginTop: 20,
                }}
                disable={!(!!comment && !!radio)}
                handleClick={cancelorder}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
      {/* return */}
      <Modal
        visible={returnshow}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={{flexGrow: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <ScrollView
            style={{
              backgroundColor: 'white',
              elevation: 5,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginTop: '45%',
              width: '100%',
              paddingBottom: 20,
              // height: '80%',
            }}>
            <View style={{margin: 10, paddingBottom: 20}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontFamily: Fonts.Assistant700, fontSize: 16}}>
                  You are about to return this item!
                </Text>
                <TouchableOpacity onPress={() => setreturnshow(false)}>
                  <Ionicons name="close-circle-outline" size={24} />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  paddingVertical: 15,
                  fontFamily: Fonts.Assistant400,
                  fontSize: 14,
                }}>
                Are you sure you want to return the item{' '}
                <Text style={{fontFamily: Fonts.Assistant700, fontSize: 14}}>
                  {data?.product?.name}?
                </Text>
              </Text>
              <Text>
                {' '}
                If yes, do let us know why so we can serve you better the next
                time!
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 15,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons
                    name="arrow-back-circle-outline"
                    color={Colors.primarycolor}
                    size={20}
                  />

                  <Text style={{paddingLeft: 10, color: Colors.textcolor}}>
                    Eligible for return
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('ViewPolicy');
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.Assistant400,
                      color: Colors.primarycolor,
                      fontSize: 16,
                    }}>
                    View Policy
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{paddingVertical: 18}}>
                <TextInput
                  numberOfLines={3}
                  placeholder="Write your Comment"
                  multiline
                  onChangeText={text => {
                    setComment(text);
                  }}
                  value={comment}
                  style={{
                    borderWidth: 1,
                    borderColor: '#979797',
                    borderRadius: 4,
                    marginHorizontal: 15,
                    paddingHorizontal: 15,
                    textAlignVertical: 'top',
                  }}
                />
              </View>
              <Text
                style={{
                  paddingVertical: 15,
                  fontFamily: Fonts.Assistant400,
                  fontSize: 14,
                }}>
                {' '}
                Reason for exchange
              </Text>
              <RadioButtonRN
                animationTypes={['zoomIn']}
                circleSize={17}
                box={false}
                data={newReasonData}
                activeColor={Colors.primarycolor}
                selectedBtn={e => {
                  console.log('e', e);
                  filterSubReason(e);

                  setRadio(e);
                }}
                style={{marginVertical: 9}}
              />
              {childreason?.length > 0 && (
                <>
                  <Text>Select Detail issue</Text>
                  <RadioButtonRN
                    animationTypes={['zoomIn']}
                    circleSize={17}
                    box={false}
                    data={childreason}
                    activeColor={Colors.primarycolor}
                    selectedBtn={e => {
                      setChildRadio(e);
                    }}
                    style={{marginVertical: 9}}
                  />
                </>
              )}
              <CommonButton
                backgroundColor="#BDBDBD"
                txt="Submit"
                customViewStyle={{
                  backgroundColor:
                    !!comment && !!radio ? Colors.primarycolor : 'lightgrey',
                  marginTop: 20,
                }}
                disable={!(!!comment && !!radio)}
                handleClick={returnOrder}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}
