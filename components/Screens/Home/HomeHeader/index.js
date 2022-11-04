import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Styles} from './styles';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';

export default function HomeHeader() {
  return (
    <View style={Styles.container}>
      <View style={Styles.logoBox}>
        <Image
          source={image.color_logo}
          style={Styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={Styles.detailContainer}>
        <TouchableOpacity style={Styles.locationContainer}>
          <Ionicons name="location-sharp" color={'#792C27'} size={20} />
          <Text numberOfLines={1} style={Styles.locationText}>
            Powai, Mumbai
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.currencyContainer}>
          <Text style={Styles.currencyIcon}>₹</Text>
          <Text style={Styles.currencyText}>INR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.cartContainer}>
          <AntDesign name="shoppingcart" size={24} color={'#792C27'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
