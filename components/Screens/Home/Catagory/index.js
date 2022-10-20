import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from './styles';

const data = [
  {title: 'Women', color: 'brown'},
  {title: 'Men', color: 'brown'},
  {title: 'Kids', color: 'brown'},
  {title: 'Home Linen', color: 'brown'},
  {title: 'Furniture', color: 'brown'},
  {title: 'Home Decor', color: 'brown'},
  {title: 'Beauty', color: 'brown'},
  {title: 'Food', color: 'brown'},
  {title: 'INTERIOR DESIGN Studio', color: 'yellow'},
  {title: 'Add a Monogram', color: 'yellow'},
  {title: 'Customize', color: 'yellow'},
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
