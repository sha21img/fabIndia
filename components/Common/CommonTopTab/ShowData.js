import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/Colors';
import Card from '../Card';

export default function ShowData({item}) {
  console.log('show Data Component', item);
  React.useEffect(() => {});
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 10,
        backgroundColor: Colors.backgroundColor,
      }}>
      <Card
        offer="20"
        originalprice="1,000"
        customViewStyle={{marginRight: 10}}
      />
      <Card customViewStyle={{marginRight: 10}} />
    </ScrollView>
  );
}
