import {View, Text, Image} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';

export default function OrderProductLongCard({data = []}) {
  return data.map(item => {
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
              {item.title}
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
                Size {item.size}
              </Text>
              <Text
                style={{
                  marginRight: 10,
                  fontFamily: Fonts.Assistant400,
                  fontSize: 14,
                  lineHeight: 18,
                  color: Colors.textcolor,
                }}>
                Qty {item.quantity}
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
              ₹ {item.price}
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
            flexDirection: 'row',
          }}>
          <View
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
          </View>
          <View style={{width: '50%', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: Fonts.Assistant600,
                fontSize: 14,
                lineHeight: 18,
                color: Colors.textcolor,
              }}>
              Exchange
            </Text>
          </View>
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
        <View
          style={{
            paddingVertical: 10,
            alignItems: 'center',
            backgroundColor: '#FAFAFA',
          }}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
      </View>
    );
  });
}
