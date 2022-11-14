import {View, Text, ScrollView, Alert, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonTopTab from '../../../../Common/CommonTopTab';
import {WomenTabdata} from '../../../../../constant';
import Card from '../../../../Common/Card';
import {Colors} from '../../../../../assets/Colors';
import {image} from '../../../../../assets/images';
import Fonts from '../../../../../assets/fonts';

export default function OrderInProgress() {
  const CardCompo = item => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: '#FFFFFF',
          flexGrow: 1,
        }}>
        <Text style={{paddingTop: 15}}>5 items ordered</Text>
        <Text style={{paddingTop: 10}}>Shipment 1</Text>
        {[0, 0].map(item => {
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
                  <View style={{flexDirection: 'row', paddingVertical: 5}}>
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
      </ScrollView>
    );
  };
  const screenObj = {
    Saris: CardCompo,
    Tunics: CardCompo,
    Kurtas: CardCompo,
    Dresses: CardCompo,
    'Tops Shirts': CardCompo,
    Pants: CardCompo,
  };
  const dataMap = WomenTabdata.map(item => ({
    name: item,
    screen: screenObj[item],
  }));
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 30,
        flexGrow: 1,
        backgroundColor: 'red',
      }}>
      <CommonTopTab data={dataMap} />
    </ScrollView>
  );
}
