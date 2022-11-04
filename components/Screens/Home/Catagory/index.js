import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {Colors} from '../../../../assets/Colors';

const data = [
  {title: 'Women', color: '#792C27'},
  {title: 'Men', color: '#792C27'},
  {title: 'Kids', color: '#792C27'},
  {title: 'Home Linen', color: '#792C27'},
  {title: 'Furniture', color: '#792C27'},
  {title: 'Home Decor', color: '#792C27'},
  {title: 'Beauty', color: '#792C27'},
  {title: 'Food', color: '#792C27'},
  {title: 'INTERIOR DESIGN Studio', color: '#D7AF49'},
  {title: 'Add a Monogram', color: '#D7AF49'},
  {title: 'Customize', color: '#D7AF49'},
];

export default function Catagory() {
  const catagory = data.map(item => {
    return (
      <TouchableOpacity
        style={[Styles.catagory, {backgroundColor: item.color}]}>
        <Text style={Styles.catagoryText}>{item.title}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <View style={Styles.mainContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.container}>
        {catagory}
      </ScrollView>
    </View>
  );
}
