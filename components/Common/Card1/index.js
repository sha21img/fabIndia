import {View, Text, Image} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';

export default function Card1({customViewStyle = {}, item}) {
  const defaultViewCustomStyles = {
    width: '48%',
    elevation: 1,
    backgroundColor: '#FFFFFF',
  };

  return (
    <>
      <View style={[defaultViewCustomStyles, customViewStyle]}>
        <Image
          source={image.card}
          style={{height: 212, width: '100%'}}
          resizeMode="cover"
        />
        <View
          style={{
            paddingHorizontal: 10,
            paddingTop: 10,
            paddingBottom: 20,
          }}>
          <Text
            numberOfLines={1}
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
            {/* {lefttxt ? (
              <Text
                style={{
                  paddingRight: 10,
                  fontWeight: '400',
                  fontSize: 14,
                  color: '#4A4A4A',
                }}>
                {lefttxt}
              </Text>
            ) : null} */}
            <Text
              style={{
                paddingRight: 5,
                fontWeight: '400',
                fontSize: 14,
                color: '#4A4A4A',
              }}>
              M.R.P.
            </Text>
            <Text
              style={{
                paddingRight: 5,
                fontWeight: '400',
                fontSize: 13,
                color: '#4A4A4A',
              }}>
              ₹ 800
            </Text>
            <Text
              style={{
                paddingRight: 5,
                textDecorationLine: 'line-through',
                color: '#979797',
                fontSize: 12,
                fontWeight: '700',
              }}>
              ₹ 1,000
            </Text>
            <Text
              style={{
                paddingRight: 5,
                fontFamily: Fonts.AssistantRegular,
                color: '#96AD66',
                fontWeight: '700',
                fontSize: 12,
              }}>
              20% off
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
