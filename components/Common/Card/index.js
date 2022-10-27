import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';

export default function Card({data2}) {
  return data2.map((item, index) => {
    return (
      <>
        <View
          style={{
            flexWrap: 'wrap',
            width: 242,
            marginRight: 23,
            elevation: 1,
            backgroundColor: '#FFFFFF',
          }}>
          <Image source={image.card} style={{height: 308, width: 242}} />
          <View
            style={{
              paddingHorizontal: 10,
              paddingTop: 10,
              paddingBottom: 30,
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
              }}>
              <Text
                style={{
                  paddingRight: 10,
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#4A4A4A',
                }}>
                ₹ 800
              </Text>
              <Text
                style={{
                  paddingRight: 10,
                  textDecorationLine: 'line-through',
                  color: '#979797',
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
  });
}
