import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {Colors} from '../../../../assets/Colors';
import {useNavigation} from '@react-navigation/native';

const data = [
  {route: 'WomenCategory', title: 'Women', color: '#792C27'},
  {route: 'MenCatagory', title: 'Men', color: '#792C27'},
  {route: 'KidsCatagory', title: 'Kids', color: '#792C27'},
  {route: 'HomeCatagory', title: 'Home Linen', color: '#792C27'},
  {route: 'FurnitureCategory', title: 'Furniture', color: '#792C27'},
  {route: 'HomeDecorCatagory', title: 'Home Decor', color: '#792C27'},
  {route: 'BeautyCategory', title: 'Beauty', color: '#792C27'},
  {route: 'FoodCatagory', title: 'Food', color: '#792C27'},
  {route: '', title: 'INTERIOR DESIGN Studio', color: '#D7AF49'},
  {route: 'MonogramCatagory', title: 'Add a Monogram', color: '#D7AF49'},
  {route: 'CustomizeCatagory', title: 'Customize', color: '#D7AF49'},
];

export default function Catagory() {
  const navigation = useNavigation();
  const catagory = data.map(item => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.route)}
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
