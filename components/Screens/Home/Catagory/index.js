import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {colors} from '../../../../assets/Colors';

const data = [
  {title: 'Women', color: colors.primarycolor},
  {title: 'Men', color: colors.primarycolor},
  {title: 'Kids', color: colors.primarycolor},
  {title: 'Home Linen', color: colors.primarycolor},
  {title: 'Furniture', color: colors.primarycolor},
  {title: 'Home Decor', color: colors.primarycolor},
  {title: 'Beauty', color: colors.primarycolor},
  {title: 'Food', color: colors.primarycolor},
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
