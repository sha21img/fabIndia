import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from './styles';

export default function ReturnItem() {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <Text style={Styles.heading}>I want to return an item</Text>
      <View style={{marginTop: 15}}>
        <Text style={Styles.toptext}>For returning an item:</Text>
        <Text style={Styles.toptext}>1. Go to 'My Orders'</Text>
        <Text style={Styles.toptext}>
          2. Click on your order and under ‘Items Ordered & Delivery Details’
          select the item that you want to cancel
        </Text>
        <Text style={Styles.toptext}>3. Click on Return</Text>
        <Text style={Styles.toptext}>
          4. Select the reason for returning and click on ‘Confirm return’
        </Text>
        <Text style={Styles.toptext}>
          5. Choose your preferred mode of return from the pop-up and click on
          'Confirm'
        </Text>
      </View>
    </ScrollView>
  );
}
