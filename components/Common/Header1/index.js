import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Styles} from './style';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {useNavigation} from '@react-navigation/native';

export default function Header1({
  customViewStyle = {},
  headtext = '',
  count = '',
}) {
  const navigation = useNavigation();
  return (
    <View style={[Styles.container, customViewStyle]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{paddingHorizontal: 5}}
          onPress={() => navigation.goBack()}>
          <SimpleLineIcons
            name="arrow-left"
            color={Colors.primarycolor}
            size={20}
          />
        </TouchableOpacity>
        <View style={{paddingLeft: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.PlayfairDisplay400,
              color: Colors.primarycolor,
            }}>
            {headtext}
          </Text>
          {!!count && (
            <Text
              style={{
                fontSize: 12,
                fontFamily: Fonts.PlayfairDisplay400,
                color: Colors.primarycolor,
              }}>
              {count} items
            </Text>
          )}
        </View>
      </View>
      <View style={Styles.detailContainer}>
        <TouchableOpacity style={Styles.locationContainer}>
          <EvilIcons name="search" color={Colors.primarycolor} size={30} />

          {/* <Ionicons name="location-sharp" color={'#792C27'} size={20} />
          <Text numberOfLines={1} style={Styles.locationText}>
            Powai, Mumbai
          </Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={Styles.currencyContainer}>
          <EvilIcons name="heart" color={Colors.primarycolor} size={30} />

          {/* <Text style={Styles.currencyIcon}>₹</Text>
          <Text style={Styles.currencyText}>INR</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={Styles.cartContainer}>
          <EvilIcons name="cart" size={30} color={Colors.primarycolor} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
