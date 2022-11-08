import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import Accordian from '../../Common/Accordian';
const data = [
  {
    id: 0,
    title: 'Women',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ], 
  },
  {
    id: 1,
    title: 'Men',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 2,
    title: 'Kids',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 3,
    title: 'Home Linen',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 4,
    title: 'Furniture',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 5,
    title: 'Home Decor',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 6,
    title: 'Home Decor',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 7,
    title: 'Beauty',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 8,
    title: 'Food',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 9,
    title: 'Collections',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
];
const data1 = [
  'Monogramming',
  'Customization',
  'Interior Design Solutions',
  'Offers',
  'Store Locator',
  'FAQs',
  'Contact us',
  'Customer Service',
  'FabFamily',
  'About Fabindia',
  'Franchise Enquiry Form',
  'Privacy Policy',
  'Terms of use',
  'Log out',
];

export default function Menu() {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.headbox}>
        <Text style={Styles.headtxt}>Hello!</Text>
      </View>
      <View style={Styles.box}>
        <View style={Styles.loginbox}>
          <Text style={Styles.logintxt}>Log in</Text>
        </View>
        <View style={Styles.registerbox}>
          <Text style={Styles.registertxt}>Register</Text>
        </View>
      </View>
      <View style={Styles.accordiancont}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Accordian title={item.title} category={item.category} />
          )}
        />
        {data1.map((item, i) => {
          return (
            <View key={Math.random() * 1021} style={Styles.servicebox}>
              <Text style={Styles.servicetxt}>{item}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
