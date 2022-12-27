import {
  View,
  Text,
  ScrollView,
  Alert,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonTopTab from '../../../../Common/CommonTopTab';
import {ProductOrderdata, WomenTabdata} from '../../../../../constant';
import Card from '../../../../Common/Card';
import {Colors} from '../../../../../assets/Colors';
import {image} from '../../../../../assets/images';
import Fonts from '../../../../../assets/fonts';
import StepIndicator from 'react-native-step-indicator';
import OrderProductLongCard from '../../../../Common/OrderProductLongCard';
import CommonButton from '../../../../Common/CommonButton';

const labels = ['Order confirmed', 'Shipped', 'Delivery'];
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
export default function OrderInProgress(props) {
  const {orderDetails, getorderDetails, orderID} = props;
  const [currentPosition, setCurrentPosition] = useState(0);

  console.log('orderDetails', orderDetails);

  var consignmentData =
    !!orderDetails &&
    orderDetails?.consignments?.map(item => {
      console.log('itemaaaaaaaaaaaaa', item.carrierDetails);
      return {
        trackUrl: item?.carrierDetails?.trackingUrl,
        code: item?.entries[0]?.orderEntry?.product?.code,
        trackingID: item?.trackingID,
      };
    });
  console.log('consignmentData', consignmentData);
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
        {orderDetails?.entries?.map((item, index) => {
          console.log('item111111111111111', item);
          const position =
            !!item?.status?.name &&
            (item?.status?.name == 'Returned' ||
              item?.status?.name == 'Delivered' ||
              item?.status?.name == 'Non Returnable')
              ? 3
              : item?.status?.name == 'Shipped'
              ? 2
              : 1;

          return (
            <>
              <View style={{paddingVertical: 10}}>
                {item?.status?.name && item?.status?.name != 'Cancelled' ? (
                  <>
                    <Text
                      style={{
                        paddingTop: 10,
                        fontFamily: Fonts.Assistant600,
                        fontSize: 14,
                        color: Colors.textcolor,
                      }}>
                      Shipment {index + 1}
                    </Text>

                    <View style={{paddingVertical: 10}}>
                      <StepIndicator
                        customStyles={customStyles}
                        currentPosition={position}
                        labels={labels}
                        stepCount={3}
                      />
                    </View>
                  </>
                ) : null}
                <OrderProductLongCard
                  data={item}
                  orderID={orderDetails.code}
                  status={orderDetails?.statusDisplay}
                  getorderDetails={getorderDetails}
                  {...props}
                  orderID1={orderID}
                />
                {!!item?.status?.name &&
                  (item?.status?.name == 'Returned' ||
                    item?.status?.names == 'Shipped' ||
                    item?.status?.name == 'Delivered' ||
                    item?.status?.name == 'Non Returnable') && (
                    <>
                      <TouchableOpacity
                        style={{
                          paddingVertical: 15,
                          alignItems: 'center',
                          backgroundColor: '#FAFAFA',
                          justifyContent: 'center',
                        }}
                        onPress={() => {
                          const trackId = consignmentData.find(items => {
                            return items.code === item.product.code;
                          });
                          console.log('trackId', trackId);
                          Linking.openURL(
                            `https://apisap.fabindiahome.com/occ/v2/fabindiab2c/vinculum/orders/v1/getInvoice/${orderID}/${trackId?.trackingID}`,
                          );
                        }}>
                        <Text
                          style={{
                            fontFamily: Fonts.Assistant600,
                            fontSize: 14,
                            lineHeight: 18,
                            color: Colors.textcolor,
                          }}>
                          Invoice
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          paddingVertical: 15,
                          alignItems: 'center',
                          backgroundColor: '#FAFAFA',
                          justifyContent: 'center',
                          marginVertical: 15,
                        }}
                        onPress={() => {
                          const fetchUrl = consignmentData.find(items => {
                            return items.code === item.product.code;
                          });
                          console.log('fetchUrlfetchUrl', fetchUrl);
                          props.navigation.navigate('Tracking', {
                            url: fetchUrl.trackUrl,
                          });
                        }}>
                        <Text
                          style={{
                            fontFamily: Fonts.Assistant600,
                            fontSize: 14,
                            lineHeight: 18,
                            color: Colors.textcolor,
                          }}>
                          TrackOrder
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
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
