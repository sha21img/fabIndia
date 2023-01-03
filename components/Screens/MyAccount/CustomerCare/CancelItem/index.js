import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';
import {Styles} from './styles';

export default function CancelItem() {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <Text style={Styles.heading}>I want to cancel an item</Text>
      <View style={{marginTop: 15}}>
        <Text style={Styles.toptext}>For cancelling an item:</Text>
        <Text style={Styles.toptext}>1. Go to 'My Orders'</Text>
        <Text style={Styles.toptext}>
          2. Click on your order and under ‘Items Ordered & Delivery Details’
          select the item that you want to cancel
        </Text>
        <Text style={Styles.toptext}>3. Click on ‘Cancel’</Text>
      </View>
    </ScrollView>
  );
}
