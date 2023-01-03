import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';
import {Styles} from './styles';

export default function ExchangeItem() {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <Text style={Styles.heading}>I want to exchange an item</Text>
      <View style={{marginTop: 15}}>
        <Text style={Styles.toptext}>For exchanging an item:</Text>
        <Text style={Styles.toptext}>1. Go to 'My Orders'</Text>
        <Text style={Styles.toptext}>
          2. Click on your order and under ‘Items Ordered & Delivery Details’
          select the item that you want to exchange
        </Text>
        <Text style={Styles.toptext}>3. Click on ‘Exchange’</Text>
        <Text style={Styles.toptext}>
          4. Select the reason for exchanging and click on ‘Confirm exchange’
        </Text>
        <Text style={Styles.toptext}>
          5. Select the replacement size / colour / product
        </Text>
        <Text style={Styles.toptext}>6. Pay the balance amount, if any</Text>
      </View>
    </ScrollView>
  );
}
