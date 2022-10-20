import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {colors} from '../../../../assets/Colors';
import { Colors } from '../../../../assets/Colors';

const data = [
  {title: 'Women', color: Colors.primarycolor},
  {title: 'Men', color: Colors.primarycolor},
  {title: 'Kids', color: Colors.primarycolor},
  {title: 'Home Linen', color: Colors.primarycolor},
  {title: 'Furniture', color: Colors.primarycolor},
  {title: 'Home Decor', color: Colors.primarycolor},
  {title: 'Beauty', color: Colors.primarycolor},
  {title: 'Food', color: Colors.primarycolor},
  {title: 'INTERIOR DESIGN Studio', color: '#D7AF49'},
  {title: 'Add a Monogram', color: '#D7AF49'},
  {title: 'Customize', color: '#D7AF49'},
];

export default function Catagory() {
  const catagory = data.map(item => {
    return (
      <View style={[Styles.catagory, {backgroundColor: item.color}]}>
        <Text style={Styles.catagoryText}>{item.title}</Text>
      </View>
    );
  });
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={Styles.container}>
      {catagory}
    </ScrollView>
  );
}
