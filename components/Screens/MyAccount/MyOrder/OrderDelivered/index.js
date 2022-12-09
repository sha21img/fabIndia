import {View, Text, ScrollView, Modal, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonTopTab from '../../../../Common/CommonTopTab';
import {ProductOrderdata} from '../../../../../constant';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';
import OrderProductLongCard from '../../../../Common/OrderProductLongCard';
import StepIndicator from 'react-native-step-indicator';
import CloseIcon from 'react-native-vector-icons/Ionicons';
import CommonButton from '../../../../Common/CommonButton';
import {useNavigation} from '@react-navigation/native';

const labels = ['Order confirmed', 'Shipped', 'Delivery  pending'];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#96AD66',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#96AD66',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#96AD66',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#96AD66',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#96AD66',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#979797',
};
const PaymentPage = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
      }}>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#EDEDED'}}>
        <Text
          style={{
            paddingTop: 20,
            fontFamily: Fonts.Assistant600,
            fontSize: 16,
            color: Colors.textcolor,
          }}>
          Delivery Address
        </Text>
        <View
          style={{
            paddingVertical: 15,
            width: '50%',
          }}>
          <Text
            style={{
              fontFamily: Fonts.Assistant600,
              fontSize: 14,
              color: '#979797',
              lineHeight: 18,
            }}>
            Home
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant700,
              fontSize: 14,
              color: Colors.textcolor,
              lineHeight: 18,
            }}>
            402, El Tara, Orchard Avenue, Hiranandani Gardens, Powai, Mumbai
            400076
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#EDEDED',
          paddingVertical: 15,
        }}>
        <Text
          style={{
            margin: 5,
          }}>
          Payment Details
        </Text>
        {[
          {name: 'Cotton Silk Block Printed Sari', price: '800'},
          {name: 'Cotton Silk Block Printed Sari', price: '800'},
          {name: 'Cotton Silk Block Printed Sari', price: '800'},
          {name: 'Regis Wingback Chair', price: '7000'},
          {name: 'Cotton Silk Block Printed Sari', price: '3,500'},
          {name: 'Cotton Silk Block Printed Sari', price: '3,500'},
        ].map(item => {
          return (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 5,
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Assistant400,
                    fontSize: 14,
                    color: Colors.textcolor,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.RupeeForadian,
                    fontSize: 14,
                    color: Colors.textcolor,
                  }}>
                  ₹{item.price}
                </Text>
              </View>
            </>
          );
        })}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 5,
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 14,
              color: '#96AD66',
            }}>
            Coupon savings
          </Text>
          <Text
            style={{
              fontFamily: Fonts.RupeeForadian,
              fontSize: 14,
              color: '#96AD66',
            }}>
            - ₹ 500
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 5,
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 14,
              color: '#96AD66',
            }}>
            Delivery
          </Text>
          <Text
            style={{
              fontFamily: Fonts.RupeeForadian,
              fontSize: 14,
              color: Colors.textcolor,
            }}>
            ₹ 99
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 5,
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontFamily: Fonts.Assistant700,
              fontSize: 14,
              color: Colors.textcolor,
            }}>
            Total amount
          </Text>
          <Text
            style={{
              fontFamily: Fonts.RupeeForadian,
              fontSize: 14,
              color: Colors.textcolor,
            }}>
            ₹ 12,490
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const CardCompo = props => {
  const navigation = useNavigation();
  const [currentPosition, setCurrentPosition] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  const handleClick = data => {
    props.navigation.navigate('ReturnStatus', {screen: data});
    // console.log('currentPosition', data);
    // if (data == 'Return') {
    //   setModalVisible(!modalVisible);
    // } else {
    //   setModalVisible1(!modalVisible1);
    // }
  };
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: '#FFFFFF',
          flexGrow: 1,
          paddingHorizontal: 15,
        }}>
        {[0].map(item => {
          return (
            <>
              <View>
                <Text
                  style={{
                    paddingTop: 15,
                    fontFamily: Fonts.Assistant400,
                    fontSize: 14,
                    color: '#979797',
                    lineHeight: 18,
                    marginBottom: 10,
                  }}>
                  5 items ordered
                </Text>
                {/* <Text
                style={{
                  paddingTop: 10,
                  fontFamily: Fonts.Assistant600,
                  fontSize: 14,
                  color: Colors.textcolor,
                }}>
                Shipment 1
              </Text>
              <View style={{paddingVertical: 10}}>
                <StepIndicator
                  customStyles={customStyles}
                  currentPosition={currentPosition}
                  labels={labels}
                  stepCount={3}
                />
              </View> */}

                <OrderProductLongCard
                  handliClick={handleClick}
                  data={[
                    {
                      title: 'Cotton Silk Block Printed Sari Product Name',
                      size: 'M',
                      quantity: '1',
                      price: '800',
                    },
                    {
                      title: 'Cotton Silk Block Printed Sari Product Name',
                      size: 'M',
                      quantity: '1',
                      price: '800',
                    },
                    {
                      title: 'Cotton Silk Block Printed Sari Product Name',
                      size: 'M',
                      quantity: '1',
                      price: '800',
                    },
                  ]}
                />
              </View>
            </>
          );
        })}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{width: '100%', flex: 1, backgroundColor: 'rgba(0,0,0,0.6)'}}>
          <View
            style={{
              marginTop: 'auto',
              width: '100%',
              backgroundColor: 'white',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <View style={{padding: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: Fonts.Assistant600,
                    color: Colors.textcolor,
                  }}>
                  Refund details
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <CloseIcon
                    name="close-circle-outline"
                    size={25}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: Fonts.Assistant600,
                    color: Colors.textcolor,
                    lineHeight: 21,
                  }}>
                  Total refund amount
                </Text>
                <Text>₹800</Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.Assistant400,
                  color: Colors.textcolor,
                }}>
                Refund was credited to your bank account
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            padding: 12,
            backgroundColor: '#FDFDFD',
          }}>
          <CommonButton
            backgroundColor="#BDBDBD"
            txt="Done"
            customViewStyle={{
              backgroundColor: Colors.primarycolor,
            }}
          />
        </View>
      </Modal>
    </>
  );
};
export default function OrderDelivered(props) {
  const screenObj = {
    'Items Ordered & Delivery Details': () => CardCompo(props),
    Payment: PaymentPage,
  };
  const dataMap = ProductOrderdata.map(item => ({
    title: item,
    card: screenObj[item],
  }));
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 30,
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        // paddingHorizontal: 15,
      }}>
      <CommonTopTab data={dataMap} />
    </ScrollView>
  );
}
