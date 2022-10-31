import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {Colors} from '../../../../assets/Colors';

const data = [
  {title: 'Women', color: 'rgba(144,50,51,0.8)'},
  {title: 'Men', color: 'rgba(144,50,51,0.8)'},
  {title: 'Kids', color: 'rgba(144,50,51,0.8)'},
  {title: 'Home Linen', color: 'rgba(144,50,51,0.8)'},
  {title: 'Furniture', color: 'rgba(144,50,51,0.8)'},
  {title: 'Home Decor', color: 'rgba(144,50,51,0.8)'},
  {title: 'Beauty', color: 'rgba(144,50,51,0.8)'},
  {title: 'Food', color: 'rgba(144,50,51,0.8)'},
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
