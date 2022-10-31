import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';

export default function PointDetailCard({customViewStyle = {}, item}) {
  const defaultViewCustomStyles = {
    width: 290,
    elevation: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    marginRight: 15,
  };
  return (
    <>
      <View style={[defaultViewCustomStyles, customViewStyle]}>
        <Image
          source={image.PointDetailCard}
          style={Styles.image}
          resizeMode="cover"
        />
        <View style={Styles.detailContainer}>
          <Text style={Styles.heading}>Beach Day</Text>
          <View style={Styles.headingTextBox}>
            <Text style={Styles.headingText}>Block Print Cotton Kaftan</Text>
            <Text style={Styles.headingText}>+</Text>
            <Text style={Styles.headingText}>Silver Earrings</Text>
          </View>
          <View style={Styles.financeBox}>
            <Text style={Styles.financeMoney}>₹ 800</Text>
            <Text style={Styles.financeOff}>₹ 1,000</Text>
            <Text style={Styles.financeOffer}>You save ₹200</Text>
          </View>
        </View>
      </View>
    </>
  );
}
