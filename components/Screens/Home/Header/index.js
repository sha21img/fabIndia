import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Styles} from './styles';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';

export default function Header() {
  return (
    <View style={Styles.container}>
      <View style={{width: '50%'}}>
        <Image
          source={image.whitelogo}
          style={{height: 30, width: 90}}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          width: '50%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="location-sharp" color={'white'} size={20} />
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              fontWeight: '400',
              fontFamily: Fonts.AssistantRegular,
            }}>
            Powai, Mumbai
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: '400',
            }}>
            ₹
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: Fonts.AssistantRegular,
              paddingLeft: 5,
            }}>
            INR
          </Text>
        </TouchableOpacity>
        <AntDesign name="shoppingcart" size={24} color={'white'} />
      </View>
    </View>
  );
}
