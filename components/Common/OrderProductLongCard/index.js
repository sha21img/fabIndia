import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RadioButtonRN from 'radio-buttons-react-native';
import CommonButton from '../CommonButton';
import axios from 'axios';
export default function OrderProductLongCard({
  data = {},
  status,
  orderID,
  getorderDetails,
  handliClick = null,
}) {
  const [showmodal, setshowmodal] = useState(false);
  const [comment, setComment] = useState(null);
  const [radio, setRadio] = useState(null);
  const [statusshow, setStatushow] = useState(data?.status?.name || null);
  const [returnshow, setreturnshow] = useState(false);
  const [exchangeshow, setexchangeshow] = useState(false);

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
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    console.log('orderIDorderIDorderIDorderID', data?.entryNumber);
    const response = await axios.post(
      `https://apisap.fabindiahome.com/occ/v2/fabindiab2c/users/current/orders/${orderID}/cancellation?lang=en&curr=INR`,
      {
        cancellationRequestEntryInputs: [
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
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    console.log(
      'responseresponseresponseresponseresponseresponseresponse',
      response.data,
    );
    getorderDetails();
  };

  const exchangeorder = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    console.log('orderIDorderIDorderIDorderID', data?.entryNumber);
    const response = await axios.post(
      `https://apisap.fabindiahome.com/occ/v2/fabindiab2c/users/current/orderReturns?fields=DEFAULT`,
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
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    console.log(
      'responseresponseresponseresponseresponseresponseresponse',
      response.data,
    );
    getorderDetails();
  };

  // console.log('statusstatusstatusstatus', status);
  // console.log(
  //   'data?.status?.namedata?.status?.namedata?.status?.namedata?.status?.name',
  //   data?.status?.name,
  // );

  // console.logg("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data)
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
          <View style={{width: '35%'}}>
            <Image
              source={image.ArtistImg1}
              style={{height: 131, width: 106}}
            />
          </View>
          <View style={{width: '60%'}}>
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
                <Text
                  style={{
                    color: 'red',
                    fontSize: 14,
                    fontFamily: Fonts.Assistant700,
                    lineHeight: 18,
                  }}>
                  {!!statusshow ? statusshow : null}
                </Text>
                {/* <Text>Arriving by Friday, 14 May</Text> */}
              </View>
            </View>
          </View>
        </View>

        {!!data?.status?.name == 'Cancelled' ? null : status == 'processing' ? (
          <View
            style={{
              paddingVertical: 15,
              alignItems: 'center',
              backgroundColor: '#FAFAFA',
            }}>
            <TouchableOpacity
              onPress={() => {
                setshowmodal(true);
              }}
              style={{alignItems: 'center', justifyContent: 'center'}}>
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
          </View>
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
                width: '50%',
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
            <TouchableOpacity
              style={{width: '50%', alignItems: 'center'}}
              onPress={() => setexchangeshow(true)}>
              <Text
                style={{
                  fontFamily: Fonts.Assistant600,
                  fontSize: 14,
                  lineHeight: 18,
                  color: Colors.textcolor,
                }}>
                Exchange
              </Text>
            </TouchableOpacity>
            {/* <Text
        style={{
          fontFamily: Fonts.Assistant600,
          fontSize: 14,
          lineHeight: 18,
          color: Colors.textcolor,
        }}>
        Cancel
      </Text> */}
          </View>
        )}
      </View>

      {/* cancel */}
      <Modal
        visible={showmodal}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View
            style={{
              backgroundColor: 'white',
              elevation: 5,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginTop: 'auto',
              width: '100%',
              height: '80%',
            }}>
            <View style={{margin: 10}}>
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
                data={radiodata}
                activeColor={Colors.primarycolor}
                selectedBtn={e => {
                  console.log('e', e);
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
          </View>
        </View>
      </Modal>
      {/* return */}
      <Modal
        visible={returnshow}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View
            style={{
              backgroundColor: 'white',
              elevation: 5,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginTop: 'auto',
              width: '100%',
              height: '80%',
            }}>
            <View style={{margin: 10}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontFamily: Fonts.Assistant700, fontSize: 16}}>
                  You are about to cancel this item!
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
                data={radiodata}
                activeColor={Colors.primarycolor}
                selectedBtn={e => {
                  console.log('e', e);
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
          </View>
        </View>
      </Modal>
      {/* exchange */}
      <Modal
        visible={exchangeshow}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View
            style={{
              backgroundColor: 'white',
              elevation: 5,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginTop: 'auto',
              width: '100%',
              height: '80%',
            }}>
            <View style={{margin: 10}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontFamily: Fonts.Assistant700, fontSize: 16}}>
                  You are about to cancel this item!
                </Text>
                <TouchableOpacity onPress={() => setexchangeshow(false)}>
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
                data={radiodata}
                activeColor={Colors.primarycolor}
                selectedBtn={e => {
                  console.log('e', e);
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
                handleClick={exchangeorder}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
