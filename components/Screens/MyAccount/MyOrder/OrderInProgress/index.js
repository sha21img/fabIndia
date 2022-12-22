import {View, Text, ScrollView, Alert, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonTopTab from '../../../../Common/CommonTopTab';
import {ProductOrderdata, WomenTabdata} from '../../../../../constant';
import Card from '../../../../Common/Card';
import {Colors} from '../../../../../assets/Colors';
import {image} from '../../../../../assets/images';
import Fonts from '../../../../../assets/fonts';
import StepIndicator from 'react-native-step-indicator';
import OrderProductLongCard from '../../../../Common/OrderProductLongCard';

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
const PaymentPage = (data, item) => {
  console.log('dattt', item);
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
            {item.detail?.deliveryAddress?.nickName}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant600,
              fontSize: 14,
              color: '#979797',
              lineHeight: 18,
            }}>
            {item.detail?.deliveryAddress?.firstName}{' '}
            {item.detail?.deliveryAddress?.lastName}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant600,
              fontSize: 14,
              color: '#979797',
              lineHeight: 18,
            }}>
            {item.detail?.deliveryAddress?.line1}{' '}
            {item.detail?.deliveryAddress?.line2}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant700,
              fontSize: 14,
              color: Colors.textcolor,
              lineHeight: 18,
            }}>
            {item.detail?.deliveryAddress?.town}
            {'  '}
            {item.detail?.deliveryAddress?.postalCode}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant700,
              fontSize: 14,
              color: Colors.textcolor,
              lineHeight: 18,
            }}>
            Mobile -{item.detail?.deliveryAddress?.phone}
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
        {item.detail?.entries.map(item => {
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
                  {item?.product?.name}
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.RupeeForadian,
                    fontSize: 14,
                    color: Colors.textcolor,
                  }}>
                  ₹{item?.product?.priceAfterDiscount?.value}
                </Text>
              </View>
            </>
          );
        })}
        {/* <View
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
        </View> */}
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
            {item.detail?.deliveryCost?.formattedValue}
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
            {item.detail?.subTotal?.formattedValue}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default function OrderInProgress({orderDetails, getorderDetails}) {
  const [currentPosition, setCurrentPosition] = useState(0);
  // const [orderDetailsstate,setorderDetailsstate] = useState(orderDetails)
  const CardCompo = item => {
    return (
      <ScrollView
        contentContainerStyle={{
          backgroundColor: '#FFFFFF',
          flexGrow: 1,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            paddingVertical: 15,
            fontFamily: Fonts.Assistant400,
            fontSize: 14,
            color: '#979797',
            lineHeight: 18,
          }}>
          {orderDetails?.totalItems} items ordered
        </Text>
        {orderDetails?.entries?.map(item => {
          return (
            <>
              <View style={{paddingVertical: 10}}>
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
                  data={item}
                  orderID={orderDetails.code}
                  status={orderDetails?.statusDisplay}
                  getorderDetails={getorderDetails}
                />
              </View>
            </>
          );
        })}
      </ScrollView>
    );
  };
  const screenObj = {
    'Items Ordered & Delivery Details': CardCompo,
    Payment: PaymentPage,
  };
  const dataMap = ProductOrderdata.map(item => ({
    title: item,
    card: screenObj[item],
    detail: orderDetails,
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
