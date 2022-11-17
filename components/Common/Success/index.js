import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import OrderProductCard from '../OrderProductCard';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import CommonButton from '../CommonButton';

export default function Success({
  title = '',
  description = '',
  btntxt = '',
  showCard = true,
}) {
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#F8F6F5',
        }}>
        {/* //----upper section----// */}
        <View style={{alignItems: 'center'}}>
          {/* <Text style={{fontSize: 200}}>☑</Text> */}
          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: '#96AD66',
              borderRadius: 50,
              marginTop: 56,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Image style={{height: 24, width: 34}} source={image.tick} />
          </View>
          <Text
            style={{
              fontSize: 18,
              paddingVertical: 16,
              fontFamily: Fonts.Assistant600,
              color: Colors.textcolor,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              paddingVertical: 15,
              fontFamily: Fonts.Assistant400,
            }}>
            {description}
          </Text>
        </View>

        {/* //----product details----// */}
        {showCard && (
          <OrderProductCard
            image="https://www.bringitonline.in/uploads/2/2/4/5/22456530/saree-photographers-in-delhi-bringitonline-2_orig.jpeg"
            title="Cotton Silk Block Printed Sari Product Name"
            size="M"
            quantity="1"
            price="3,500"
          />
        )}
      </ScrollView>
      <CommonButton backgroundColor={Colors.primarycolor} txt={btntxt} />
    </>
  );
}
