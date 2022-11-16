import {View, Text, ScrollView, Alert, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonTopTab from '../../../../Common/CommonTopTab';
import {ProductOrderdata, WomenTabdata} from '../../../../../constant';
import Card from '../../../../Common/Card';
import {Colors} from '../../../../../assets/Colors';
import {image} from '../../../../../assets/images';
import Fonts from '../../../../../assets/fonts';
import StepIndicator from 'react-native-step-indicator';

const labels = ['Order confirmed', 'Shipped', 'Delivery  pending'];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
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
export default function OrderInProgress() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const CardCompo = item => {
    return (
      <ScrollView
        contentContainerStyle={{
          backgroundColor: '#FFFFFF',
          flexGrow: 1,
          paddingHorizontal: 15,
        }}>
        {[0, 0, 0].map(item => {
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
                  }}>
                  5 items ordered
                </Text>
                <Text
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
                </View>
                {[0, 0, 0, 0].map(item => {
                  return (
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
                            Cotton Silk Block Printed Sari Product Name
                          </Text>
                          <View
                            style={{flexDirection: 'row', paddingVertical: 5}}>
                            <Text
                              style={{
                                marginRight: 10,
                                fontFamily: Fonts.Assistant400,
                                fontSize: 14,
                                lineHeight: 18,
                                color: Colors.textcolor,
                              }}>
                              Size M
                            </Text>
                            <Text
                              style={{
                                marginRight: 10,
                                fontFamily: Fonts.Assistant400,
                                fontSize: 14,
                                lineHeight: 18,
                                color: Colors.textcolor,
                              }}>
                              Qty1
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
                            ₹ 800
                          </Text>

                          <View style={{flexDirection: 'row', paddingTop: 10}}>
                            <View
                              style={{
                                height: 15,
                                width: 15,
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: '#FAA859',
                                marginRight: 5,
                              }}></View>
                            <View>
                              <Text
                                style={{
                                  color: '#FAA859',
                                  fontSize: 14,
                                  fontFamily: Fonts.Assistant700,
                                  lineHeight: 18,
                                }}>
                                In progress
                              </Text>
                              <Text>Arriving by Friday, 14 May</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          paddingVertical: 10,
                          alignItems: 'center',
                          backgroundColor: '#FAFAFA',
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
                      </View>
                    </View>
                  );
                })}
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
    name: item,
    screen: screenObj[item],
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
