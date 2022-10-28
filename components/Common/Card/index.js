import {View, Text, Image} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';

export default function Card({customViewStyle = {}, item}) {
  const defaultViewCustomStyles = {
    width: 242,
    elevation: 1,
    backgroundColor: '#FFFFFF',
  };

  return (
    <>
      <View style={[defaultViewCustomStyles, customViewStyle]}>
        <Image
          source={image.card}
          style={{height: 308, width: 242}}
          resizeMode="cover"
        />
        <View
          style={{
            paddingHorizontal: 10,
            paddingTop: 10,
            paddingBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#4A4A4A',
              lineHeight: 21,
              fontFamily: Fonts.AssistantRegular,
            }}>
            Cotton Silk Block Printed Sari Product Name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                paddingRight: 10,
                fontWeight: '400',
                fontSize: 16,
                color: '#4A4A4A',
                fontFamily: Fonts.RupeeForadian,
              }}>
              ₹ 800
            </Text>
            <Text
              style={{
                paddingRight: 10,
                textDecorationLine: 'line-through',
                color: '#979797',
                fontSize: 14,
              }}>
              ₹ 1,000
            </Text>
            <Text
              style={{
                paddingRight: 10,
                fontFamily: Fonts.AssistantRegular,
                color: '#96AD66',
                fontWeight: '700',
                fontSize: 16,
              }}>
              20% off
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
