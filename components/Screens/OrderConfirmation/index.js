import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';

const OrderConfirmation = () => {
  return (
    <ScrollView>
      <View
        style={{
          height: 207,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#96AD66',
            height: 70,
            width: 70,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={image.tick} />
        </View>
        <Text
          style={{
            color: Colors.textcolor,
            marginTop: 30,
            fontFamily: Fonts.Assistant700,
            fontSize: 18,
            lineHeight: 24,
          }}>
          Yay! Your order has been placed.
        </Text>
        <Text
          style={{
            color: Colors.textcolor,
            marginTop: 10,
            fontFamily: Fonts.Assistant400,
            fontSize: 18,
            lineHeight: 24,
          }}>
          You saved
          <Text style={{fontFamily: Fonts.Assistant700}}> ₹ 24,000</Text>
        </Text>
      </View>
      <View style={{height: 113, padding: 13}}>
        <Text
          style={{
            color: Colors.textcolor,
            fontFamily: Fonts.Assistant400,
            fontSize: 18,
            lineHeight: 24,
            textAlign: 'center',
          }}>
          You can check delivery details in
          <Text style={{fontFamily: Fonts.Assistant700}}>‘My orders’</Text>
          within 48 hours of placing the order
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 20,
              color: Colors.primarycolor,
            }}>
            View order details
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{margin:15}}>
        <Text>
          Visit the place where your products are made Take a tour of the
          Fabindia village!
        </Text>
      </View>
    </ScrollView>
  );
};

export default OrderConfirmation;
