import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/Colors';
import TopBanner from './TopBanner';
import SortBox from './SortBox';
import CardList from './CardList';
import {image} from '../../../assets/images';

const cardData = [
  {banner: image.FabulousCard1, title: 'Silk Banarasi Sari'},
  {banner: image.FabulousCard2, title: 'Cotton Woven Jamdani Sari'},
  {banner: image.FabulousCard3, title: 'Silk Banarasi Woven Sari'},
  {banner: image.FabulousCard4, title: 'Silk Tussar Chikankari Sari'},
];

export default function Fabulous() {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: Colors.backgroundColor,
        flexGrow: 1,
        paddingBottom: 20,
      }}>
      <TopBanner />
      <SortBox />
      <CardList data={cardData} />
    </ScrollView>
  );
}
